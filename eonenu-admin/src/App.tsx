import React from 'react'
import { Admin, Resource } from 'react-admin'
import customDataProvider from './CustomDataProvider'
import { ReservationList, ReservationCreate, ReservationEdit } from './Reservations'
import { CounselTypeList, CounselTypeCreate } from './Counseltypes'
import { NoticeList, NoticeCreate, NoticeEdit } from './Notices'
import { RegistrationList, RegistrationShow } from './Registrations'
import { BranchList, BranchCreate } from './Branches'

const dataProvider = customDataProvider('https://d1gdfgxq7hebxk.cloudfront.net/admin/v1');

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="reservations" list={ReservationList} create={ReservationCreate} edit={ReservationEdit} />
      <Resource name="counsel-types" list={CounselTypeList} create={CounselTypeCreate} />
      <Resource name="notices" list={NoticeList} create={NoticeCreate} edit={NoticeEdit} />
      <Resource name="registrations" list={RegistrationList} show={RegistrationShow} />
      <Resource name="branches" list={BranchList} create={BranchCreate} />
    </Admin>
  )
}

export default App;