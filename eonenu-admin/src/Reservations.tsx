import React from 'react'
import { 
    List,
    Edit,
    Create,
    SimpleForm,
    Datagrid,
    TextInput,
    TextField,
    DateInput,
    ReferenceInput,
    SelectInput,
    Filter
} from 'react-admin'

const ReservationFilter = (props: any) => (
    <Filter {...props}>
        <DateInput source="date" label="예약 날짜" alwaysOn />
    </Filter>
);

const timeChoices = [
    { id: '10:00', name: '10:00' },
    { id: '10:30', name: '10:30' },
    { id: '11:00', name: '11:00' },
    { id: '11:30', name: '11:30' },
    { id: '12:00', name: '12:00' },
    { id: '12:30', name: '12:30' },
    { id: '13:00', name: '13:00' },
    { id: '13:30', name: '13:30' },
    { id: '14:00', name: '14:00' },
    { id: '14:30', name: '14:30' },
    { id: '15:00', name: '15:00' },
    { id: '15:30', name: '15:30' },
    { id: '16:00', name: '16:00' },
    { id: '16:30', name: '16:30' },
    { id: '17:00', name: '17:00' },
    { id: '17:30', name: '17:30' },
    { id: '18:00', name: '18:00' },
    { id: '18:30', name: '18:30' },
    { id: '19:00', name: '19:00' },
    { id: '19:30', name: '19:30' },
    { id: '20:00', name: '20:00' },
    { id: '20:30', name: '20:30' },
    { id: '21:00', name: '21:00' },
    { id: '21:30', name: '21:30' },
];

const stateChoices = [
    { id: 'WAITING', name: '대기중' },
    { id: 'CONFIRMED', name: '승인됨' },
    { id: 'CANCELED', name: '취소됨' },
];

export const ReservationList = (props: any) => (
    <List filters={<ReservationFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="예약 ID" />
            <TextField source="title" label="제목" />
            <TextField source="date" label="날짜" />
            <TextField source="time" label="시간" />
            <TextField source="branchName" label="지점" />
            <TextField source="type" label="유형" />
            <TextField source="clientName" label="고객 이름" />
            <TextField source="clientPhone" label="고객 전화번호" />
            <TextField source="counselTypeName" label="상담 유형" />
            <TextField source="state" label="상태" />
            <TextField source="adminName" label="관리자 이름" />
            <TextField source="adminReason" label="관리자 사유" />
        </Datagrid>
    </List>
)

export const ReservationCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="counselTypeId" reference="counsel-types" label="상담 유형">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="branchId" reference="branches" label="지점">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateInput source="date" label="날짜" />
            <SelectInput source="time" choices={timeChoices} label="시간" />
            <TextInput source="adminName" label="담당자 이름" />
            <TextInput source="reason" label="예약 불가 사유" />
        </SimpleForm>
    </Create>
);

export const ReservationEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <SelectInput source="state" choices={stateChoices} label="상태" />
        </SimpleForm>
    </Edit>
);