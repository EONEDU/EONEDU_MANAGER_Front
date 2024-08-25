import React from 'react'
import {
    List,
    Create,
    SimpleForm,
    TextInput,
    Datagrid,
    TextField
} from 'react-admin'

export const BranchList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="지점 ID" />
            <TextField source="name" label="이름" />
        </Datagrid>
    </List>
);
  
export const BranchCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="지점 이름" />
        </SimpleForm>
    </Create>
);