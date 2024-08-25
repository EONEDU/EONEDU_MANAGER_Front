import React from 'react'
import { 
    List,
    Show,
    SimpleShowLayout,
    Datagrid,
    TextField
} from 'react-admin'

export const RegistrationList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="접수 ID" />
            <TextField source="branchName" label="지점 이름" />
            <TextField source="registrationType" label="접수 유형"/>
            <TextField source="clientName" label="고객 이름"/>
            <TextField source="clientPhone" label="고객 전화번호"/>
        </Datagrid>
    </List>
)

export const RegistrationShow = (props: any) => (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="username" />
      </SimpleShowLayout>
    </Show>
  );