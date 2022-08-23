import React from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import WidgetsDropdown from '../widgets/WidgetsDropdown.js'


const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol sm="12">
         <WidgetsDropdown />
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
