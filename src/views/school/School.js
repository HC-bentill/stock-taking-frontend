import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import swal from "sweetalert";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const School = ({ match }) => {
  const [schoolData, setSchoolData] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const history = useHistory();

  useEffect(() => {}, []);

  async function handleDelete() {
    await axios
      .delete(`http://localhost:1337/api/schools/${match.params.id}`)
      .then((response) => {
        // Handle success.
        swal({
          text: "Record has been deleted successfully !",
          icon: "success",
          button: false,
          timer: 2000,
        });
        history.push("/schools");
        console.log(response);
      })
      .catch((err) => {
        // Handle error.
        swal({
          text: `An error occurred !`,
          icon: "error",
          button: false,
          timer: 2000,
        });
        history.push("/schools");
        console.log(err);
      });
  }

  async function handleEdit() {
    await axios
      .put(`http://localhost:1337/api/schools/${match.params.id}`, {
        data: {
          name: name,
          location: location,
          contact: contact,
        },
      })
      .then((response) => {
        // Handle success.
        swal({
          title: "Success",
          text: "School has been edited successfully!",
          icon: "success",
          button: false,
          timer: 2000,
        });
        history.push(`/schools/${match.params.id}`);
        console.log(response);
      })
      .catch((err) => {
        // Handle error.
        swal({
          text: `An error occurred !`,
          icon: "error",
          button: false,
          timer: 2000,
        });
        history.push(`/schools/${match.params.id}`);
        console.log(err);
      });
  }

  return (
    <>
      <CRow>
        <CCol lg={6}>
          <CCard className="p-4">
            <h5>School id: {match.params.id}</h5>
            <CCardBody>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <td>
                      <strong>name: </strong>
                      {schoolData.name}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Location: </strong> {schoolData.location}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Contact: </strong> {schoolData.contact}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </CCardBody>
            <CRow>
              <CCol md={6}>
                <CButton
                  onClick={() => setEditModal(!editModal)}
                  className=""
                  block
                  color="primary"
                  aria-pressed="true"
                >
                  <CIcon size="sm" name="cil-pencil" />
                  <span className="mfs-2">Edit</span>
                </CButton>
              </CCol>
              <CCol md={6}>
                <CButton
                  onClick={() => setDeleteModal(!deleteModal)}
                  className=""
                  block
                  color="danger"
                  aria-pressed="true"
                >
                  <CIcon size="sm" name="cil-pencil" />
                  <span className="mfs-2">Delete</span>
                </CButton>
              </CCol>
            </CRow>
          </CCard>
        </CCol>
      </CRow>
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
          <CButton color="danger">
            Confrim
          </CButton>{" "}
          <CButton onClick={() => setDeleteModal(!deleteModal)}>Cancel</CButton>
        </CModalFooter>
      </CModal>

      {/* ---------------------------------------------------------------------- */}
      {/* edit modal */}
      <CModal
        show={editModal}
        onClose={() => setEditModal(!editModal)}
        color="primary"
      >
        <CModalHeader closeButton>
          <CModalTitle>
            <strong>Edit School</strong>
          </CModalTitle>
        </CModalHeader>
        <CModalBody className="p-4">
          <CForm onSubmit={handleEdit} formNoValidate>
            <CInputGroup className="mb-3">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-home" />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="text"
                autoComplete="name"
                id="name"
                name="name"
                placeholder={schoolData.name}
                value={schoolData.name}
                onChange={(e) => setName(e.target.value)}
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
                autoComplete="location"
                id="location"
                name="location"
                placeholder={schoolData.location}
                value={schoolData.location}
                onChange={(e) => setLocation(e.target.value)}
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
                autoComplete="contact"
                id="contact"
                name="contact"
                placeholder={schoolData.contact}
                value={schoolData.contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </CInputGroup>
            <CButton onClick={() => handleEdit()} type="submit" color="primary">
              Save
            </CButton>{" "}
            <CButton onClick={() => setEditModal(!editModal)}>Cancel</CButton>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
};

export default School;
