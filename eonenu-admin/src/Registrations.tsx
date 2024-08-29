import React from 'react'
import { 
    List,
    Show,
    SimpleShowLayout,
    Datagrid,
    TextField,
    UrlField,
    Labeled,
    DeleteButton
} from 'react-admin'

const ClientInfoField = ({ record }: { record?: any }) => (
  <div>
      <p>성별: {record?.clientInfo.gender}</p>
      <p>생년월일: {record?.clientInfo.birthdate}</p>
      <p>졸업 유형: {record?.clientInfo.graduationType}</p>
      <p>전화번호: {record?.clientInfo.clientPhone}</p>
      <p>이름: {record?.clientInfo.clientName}</p>
      <p>부모 전화번호: {record?.clientInfo.parentPhone}</p>
  </div>
);

const SubjectsField = ({ record }: { record?: any }) => (
  <div>
      <p>국어 과목: {record?.subjects.koreanSubject}</p>
      <p>수학 과목: {record?.subjects.mathSubject}</p>
      <p>선택 과목1: {record?.subjects.electiveSubject1}</p>
      <p>선택 과목2: {record?.subjects.electiveSubject2}</p>
      <p>제2외국어: {record?.subjects.secondLanguageSubject}</p>
  </div>
);

const GradeField = ({ record }: { record?: any }) => (
  <div>
      <p>국어 과목: {record?.grade.koreanSubject}, 점수: {record?.grade.koreanScore}</p>
      <p>수학 과목: {record?.grade.mathSubject}, 점수: {record?.grade.mathScore}</p>
      <p>영어 등급: {record?.grade.englishGrade}</p>
      <p>한국사 등급: {record?.grade.histroyGrade}</p>
      <p>선택 과목1: {record?.grade.electiveSubject1}, 점수: {record?.grade.electiveScore1}</p>
      <p>선택 과목2: {record?.grade.electiveSubject2}, 점수: {record?.grade.electiveScore2}</p>
      <p>제 2외국어: {record?.grade.secondLanguageSubject}, 등급: {record?.grade.secondLanguageGrade}</p>
  </div>
);

export const RegistrationList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" label="접수 ID" />
            <TextField source="branchName" label="지점 이름" />
            <TextField source="registrationType" label="접수 유형"/>
            <TextField source="clientName" label="고객 이름"/>
            <TextField source="clientPhone" label="고객 전화번호"/>
            <DeleteButton />
        </Datagrid>
    </List>
)

export const RegistrationShow = (props: any) => (
  <Show {...props}>
      <SimpleShowLayout>
          <TextField source="id" label="접수 ID" />
          <TextField source="registrationUuid" label="접수 UUID" />
          <TextField source="branchId" label="지점 ID" />
          <TextField source="registrationType" label="접수 유형" />
          <Labeled label="고객 정보">
            <ClientInfoField />
          </Labeled>
          <Labeled label="과목 정보">
            <SubjectsField />
          </Labeled>
          <Labeled label="성적 정보">
            <GradeField />
          </Labeled>
          <UrlField source="profileImageUrl" label="프로필 이미지" />
          <UrlField source="reportFileUrl" label="성적표 이미지" />
      </SimpleShowLayout>
  </Show>
);