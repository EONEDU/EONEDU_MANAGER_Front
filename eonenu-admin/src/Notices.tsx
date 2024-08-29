import React from 'react'
import { 
    List,
    Edit,
    Create,
    Show, 
    SimpleForm,
    SimpleShowLayout,
    TextInput,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton
} from 'react-admin'

export const NoticeList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" label="공지사항 ID" />
            <TextField source="title" label="제목" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const NoticeCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" label="제목" />
            <TextInput source="content" label="내용" />
        </SimpleForm>
    </Create>
);

export const NoticeEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" label="제목" />
            <TextInput source="content" label="내용" />
        </SimpleForm>
    </Edit>
);

export const NoticeShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" label="공지사항 ID" />
            <TextField source="title" label="제목" />
            <TextField source="content" label="내용" />
        </SimpleShowLayout>
    </Show>
);