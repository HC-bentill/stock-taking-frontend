import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import axios from 'axios';
import swal from 'sweetalert';

function Add_school () {
    // modal form
    const [ name, setName ] = useState( "" );
    const [ location, setLocation ] = useState( "" );
    const [ contact, setContact ] = useState( "" );
    const history = useHistory()

    const handleCreate = async e => {
      e.preventDefault();
      axios
      .post('http://localhost:1337/api/schools', {
        data: {
          name: name,
          location: location,
          contact: contact
        }
      })
      .then(response => {
        // Handle success.
        swal({
          title: "Success",
          text: "School has been created successfully!",
          icon: "success",
          button: false,
          timer: 2000,
        } );
        history.push( "/schools" );
        console.log(response)
        // console.log('User profile', response.data.user);
        // console.log('User token', response.data.jwt);
      })
      .catch(error => {
        // Handle error.
        swal({
          title: "Oops !",
          text: "An error occurred !",
          icon: "error",
        });
        console.log('An error occurred:', error.response);
      });
    }
  
    return (
      <>
        <CRow>
          <CCol md={5} sm={12}>
            <CCard>
              <CCardHeader className="text-light" color="primary"><strong>Add New School</strong></CCardHeader>
              <CCardBody>
              <CForm onSubmit={handleCreate} formNoValidate>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-home" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Enter School Name"
                      autoComplete="name"
                      id="name"
                      name="name"
                      value={name}
                      onChange={e => setName( e.target.value )}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-LocationPin" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Enter Location"
                      autoComplete="location"
                      id="location"
                      name="location"
                      value={location}
                      onChange={e => setLocation( e.target.value )}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-phone" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Enter contact no."
                      autoComplete="contact"
                      id="contact"
                      name="contact"
                      value={contact}
                      onChange={e => setContact( e.target.value )}
                      required
                    />
                  </CInputGroup>
                  <CButton type="submit" color="primary">Save</CButton>{' '}
              </CForm>
            </CCardBody>
            </CCard>


          </CCol>
        </CRow>
      </>
  )
}

export default Add_school;
