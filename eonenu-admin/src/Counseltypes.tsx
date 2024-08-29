import React from 'react'
import { 
    List,
    Create,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextInput,
    Datagrid,
    TextField
} from 'react-admin'

export const CounselTypeList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" label="상담유형 ID" />
            <TextField source="name" label="이름" />
        </Datagrid>
    </List>
);

export const CounselTypeCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="상담유형 이름" />
        </SimpleForm>
    </Create>
);

export const CounselTypeShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" label="상담유형 ID" />
            <TextField source="name" label="이름" />
        </SimpleShowLayout>
    </Show>
);
