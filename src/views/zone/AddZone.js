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
import { useForm } from "react-hook-form";

function Add_school() {
  // modal form
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <CForm onSubmit={handleSubmit(onSubmit)} formNoValidate>
        <CRow>
          <CCol md={4} sm={12}>
            <label>Zone Name</label>
            <CInputGroup className="mb-5">
              <input
                className="customFormInput"
                type="text"
                placeholder="Enter Zone Name"
                required
              />
            </CInputGroup>
          </CCol>
          <CCol md={4} sm={12}>
            <label>Zone Supervisor</label>
            <CInputGroup className="mb-5">
              <select className="customFormInput" required>
                <option>Henry</option>
                <option>John</option>
                <option>Doe</option>
              </select>
            </CInputGroup>
          </CCol>
          <CCol md={4} sm={12}>
            <label>Fixture Range</label>
            <CInputGroup className="mb-5">
              <CRow>
                <CCol md={6} sm={6} xs={6}>
                  <input
                    className="customDoubleInput"
                    type="text"
                    placeholder="from"
                    required
                  />
                </CCol>
                <CCol md={6} sm={6} xs={6}>
                  <input
                    className="customDoubleInput"
                    type="text"
                    placeholder="to"
                    required
                  />
                </CCol>
              </CRow>
            </CInputGroup>
          </CCol>
          <CCol md={4} sm={12}>
            <label>Mobile Number</label>
            <CInputGroup className="mb-5">
              <input
                className="customFormInput"
                type="text"
                placeholder="Enter Mobile Number"
                required
              />
            </CInputGroup>
          </CCol>
          <CCol md={4} sm={12}>
            <label>Zone Percentage Count</label>
            <CInputGroup className="mb-5">
              <CRow>
                <CCol md={6} sm={6} xs={6}>
                  <input
                    className="customDoubleInput"
                    type="text"
                    placeholder="first count"
                    required
                  />
                </CCol>
                <CCol md={6} sm={6} xs={6}>
                  <input
                    className="customDoubleInput"
                    type="text"
                    placeholder="second count"
                    required
                  />
                </CCol>
              </CRow>
            </CInputGroup>
          </CCol>
        </CRow>
        <CRow>
        <CCol md={2} sm={6} xs={6}>
            <CButton
              className=""
              block
              color="primary"
              aria-pressed="true"
            >
              <CIcon size="sm" name="cil-pencil" />
              <span className="mfs-2">Add Zone</span>
            </CButton>
          </CCol>
        </CRow>
      </CForm>
    </>
  );
}

export default Add_school;
