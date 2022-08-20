import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import swal from "sweetalert";

function Add_school() {
  // modal form
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const history = useHistory();

  const handleCreate = async (e) => {};

  return (
    <>
      <CForm onSubmit={handleCreate} formNoValidate>
        <CRow>
          <CCol md={4} sm={12}>
            <label>Name</label>
            <CInputGroup className="mb-3">
              <CInput
                type="text"
                placeholder="Enter School Name"
                autoComplete="name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </CInputGroup>
          </CCol>
          <CCol md={4} sm={12}>
          <label>Class</label>
            <CInputGroup className="mb-3">
              <CInput
                type="text"
                placeholder="Enter Location"
                autoComplete="location"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </CInputGroup>
          </CCol>
          <CCol md={4} sm={12}>
          <label>Date</label>
            <CInputGroup className="mb-3">
              <CInput
                type="text"
                placeholder="Enter contact no."
                autoComplete="contact"
                id="contact"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </CInputGroup>
          </CCol>

        </CRow>
        <CButton type="submit" color="primary">
            Save
          </CButton>{" "}
      </CForm>
    </>
  );
}

export default Add_school;
