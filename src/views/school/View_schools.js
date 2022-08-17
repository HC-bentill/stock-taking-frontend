import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import axios from 'axios';
import swal from 'sweetalert';
import usersData from '../users/UsersData';

function View_schools () {
  const [ schoolData, setSchoolData ] = useState( [] );
  const [ createModal, setCreateModal ] = useState( false );
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [ page, setPage ] = useState( currentPage )

  
  useEffect( () => {
    axios
    .get('http://localhost:1337/api/schools/')
    .then(response => {
      // Handle success.
      const data = response.data.data;
      //restructure array of objects from api with reduce()
      const results = data.reduce( ( arr, obj ) => {
        let new_obj = {
          ...obj,
          ...obj.attributes
        }
        delete new_obj[ 'attributes' ]
        return [...arr, new_obj]
      }, [])
      setSchoolData( results );
      console.log('results:', results);
    })
    .catch(error => {
      // Handle error.
      swal({
        title: "Oops !",
        text: "An Error Occured !",
        icon: "error",
      });
      console.log('An error occurred:', error.response);
    });

  }, [] );
  
  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])
  
  console.log( schoolData );
  console.log(usersData);

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/schools?page=${newPage}`)
  }
  return (
    <>
    <CRow>
      <CCol sm={12} md={12}>
        <CRow className="justify-content-end pr-5">
          <CButton to={'/add_school'} className="mb-4 p-2" color="primary" aria-pressed="true">
            <CIcon size="sm" name="cil-pencil" />
            <span className="mfs-2">Create New School</span>
          </CButton>    
        </CRow>
        <CCard>
          <CCardHeader>
            <h4>Schools</h4>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={schoolData}
              fields={[
                { key: 'name', _classes: 'font-weight-bold' },
                 'location', 'contact'
              ]}
              hover
              clickableRows
              striped
              columnFilter
              tableFilter
              itemsPerPageSelect
              sorter
              itemsPerPage={10}
              activePage={page}
              onRowClick={(item) => history.push(`/school/${item.id}`)}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              doubleArrows={false} 
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
      </CRow>
      </>
    )
    
}

export default View_schools;
