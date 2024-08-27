import React from 'react'
import { Admin, Resource } from 'react-admin'
import customDataProvider from './CustomDataProvider'
import { ReservationList, ReservationCreate, ReservationShow } from './Reservations'
import { CounselTypeList, CounselTypeCreate, CounselTypeShow } from './Counseltypes'
import { NoticeList, NoticeCreate, NoticeEdit, NoticeShow } from './Notices'
import { RegistrationList, RegistrationShow } from './Registrations'
import { BranchList, BranchCreate, BranchShow } from './Branches'

const dataProvider = customDataProvider('https://d1gdfgxq7hebxk.cloudfront.net/admin/v1');

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="reservations" list={ReservationList} create={ReservationCreate} show={ReservationShow} />
      <Resource name="counsel-types" list={CounselTypeList} create={CounselTypeCreate} show={CounselTypeShow} />
      <Resource name="notices" list={NoticeList} create={NoticeCreate} edit={NoticeEdit} show={NoticeShow} />
      <Resource name="registrations" list={RegistrationList} show={RegistrationShow} />
      <Resource name="branches" list={BranchList} create={BranchCreate} show={BranchShow} />
    </Admin>
  )
}

export default App;