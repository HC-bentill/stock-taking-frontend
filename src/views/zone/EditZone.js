import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CCol,
  CRow,
  CButton,
  CForm,
  CInputGroup,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

function EditZone() {
  const [deleteModal, setDeleteModal] = useState(false);
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
              onClick={() => alert("dd")}
              className=""
              block
              color="primary"
              aria-pressed="true"
            >
              <CIcon size="sm" name="cil-pencil" />
              <span className="mfs-2">Save</span>
            </CButton>
          </CCol>
          <CCol md={2} sm={6} xs={6}>
            <CButton
              onClick={() => setDeleteModal(!deleteModal)}
              className=""
              block
              color="danger"
              aria-pressed="true"
            >
              <CIcon size="sm" name="cil-trash" />
              <span className="mfs-2">Delete Zone</span>
            </CButton>
          </CCol>
        </CRow>
      </CForm>

      {/* ---------------------------------------------------------------------- */}
      {/* delete modal */}
      <CModal
        show={deleteModal}
        onClose={() => setDeleteModal(!deleteModal)}
        color="danger"
      >
        <CModalHeader closeButton>
          <CModalTitle>
            <strong>Warning !</strong>
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <strong>Are you sure you want to delete this record ?</strong>
        </CModalBody>
        <CModalFooter>
          <CButton color="danger">Confrim</CButton>{" "}
          <CButton onClick={() => setDeleteModal(!deleteModal)}>Cancel</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default EditZone;
