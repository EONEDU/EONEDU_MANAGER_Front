import React from 'react'
import { 
    List,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    Datagrid,
    TextField
} from 'react-admin'

export const NoticeList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="공지사항 ID" />
            <TextField source="title" label="제목" />
        </Datagrid>
    </List>
)

export const NoticeCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" label="제목" />
            <TextInput source="content" label="내용" multiline rows={5} />
        </SimpleForm>
    </Create>
);

export const NoticeEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" label="제목" />
            <TextInput source="content" label="내용" multiline rows={5} />
        </SimpleForm>
    </Edit>
);