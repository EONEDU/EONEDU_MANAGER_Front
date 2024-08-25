import { stringify } from 'query-string';
import { fetchUtils, DataProvider, CreateResult, RaRecord } from 'ra-core';

/*
 * getList          => GET http://my.api.url/posts?_sort=title&_order=ASC&_start=0&_end=24
 * getOne           => GET http://my.api.url/posts/123
 * getManyReference => GET http://my.api.url/posts?author_id=345
 * getMany          => GET http://my.api.url/posts?id=123&id=456&id=789
 * create           => POST http://my.api.url/posts/123
 * update           => PUT http://my.api.url/posts/123
 * updateMany       => PUT http://my.api.url/posts/123, PUT http://my.api.url/posts/456, PUT http://my.api.url/posts/789
 * delete           => DELETE http://my.api.url/posts/123
*/

const customDataProvider = (apiUrl: string, httpClient = fetchUtils.fetchJson): DataProvider => ({
    getList: (resource, params) => {
        const { page, perPage } = params.pagination || {};
        const { field, order } = params.sort || {};
        const query: Record<string, any> = {
            ...fetchUtils.flattenObject(params.filter),
        };
    
        if (page !== undefined) {
            query.page = page - 1;
        }
    
        if (perPage !== undefined) {
            query.size = perPage;
        }
    
        if (field) {
            query.sort = `${field},${order}`;
        }
    
        if (params.filter && params.filter.date) {
            query.date = params.filter.date;
        }
    
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
    
        return httpClient(url, { signal: params?.signal }).then(({ json }) => {
            if (!json.data || !json.data.content) {
                throw new Error('The response format is invalid.');
            }
            return {
                data: json.data.content,
                total: json.data.totalElements,
                pageInfo: {
                    hasNextPage: !json.data.last,
                    hasPreviousPage: json.data.pageNumber > 0,
                },
            };
        });
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            signal: params?.signal,
        }).then(({ json }) => ({
            data: json.data,
        })),

    getMany: (resource, params) => {
        const query = {
            id: params.ids,
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url, { signal: params?.signal }).then(({ json }) => ({
            data: json.data.content,
        }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query: Record<string, any> = {
            ...fetchUtils.flattenObject(params.filter),
            [params.target]: params.id,
        };

        if (page !== undefined) {
            query.page = page - 1;
        }

        if (perPage !== undefined) {
            query.size = perPage;
        }

        if (field) {
            query.sort = `${field},${order}`;
        }

        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url, { signal: params?.signal }).then(({ json }) => {
            if (!json.data || !json.data.content) {
                throw new Error('The response format is invalid.');
            }
            return {
                data: json.data.content,
                total: json.data.totalElements,
            };
        });
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json.data })),

    updateMany: (resource, params) =>
        Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                })
            )
        ).then(responses => ({
            data: responses.map(({ json }) => json.data.id),
        })),

    create: <RecordType extends RaRecord = any>(resource: string, params: any) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => {
            if (!json.data) {
                throw new Error('The response format is invalid.');
            }
            const result: CreateResult<RecordType> = {
                data: { ...params.data, id: json.data.id } as RecordType,
            };
            return result;
        }),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json.data })),

    deleteMany: (resource, params) =>
        Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: 'DELETE',
                })
            )
        ).then(responses => ({
            data: responses.map(({ json }) => json.data.id),
        })),
});

export default customDataProvider;