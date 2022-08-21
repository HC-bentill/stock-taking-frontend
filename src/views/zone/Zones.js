import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CBadge,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import swal from "sweetalert";
import zoneData from "./zoneData";

function View_schools() {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/zones?page=${newPage}`);
  };

  const getBadge = (status) => {
    switch (status) {
      case "Closed":
        return "success";
      case "Assigned":
        return "warning";
      case "Unassigned":
        return "danger";
      default:
        return "primary";
    }
  };

  const fields = [
    { key: "name", _style: { width: "40%" } },
    "registered",
    { key: "role", _style: { width: "20%" } },
    { key: "status", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];
  return (
    <>
      <CRow>
        <CCol sm={12} md={12}>
          <CRow className="justify-content-end pr-5">
            <CButton
              to={"/add-zone"}
              className="mb-4 p-2"
              color="primary"
              aria-pressed="true"
            >
              <CIcon size="sm" name="cil-pencil" />
              <span className="mfs-2">Create Zone</span>
            </CButton>
          </CRow>
          <CCard>
            <CCardHeader>
              <h4>Zones</h4>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={zoneData}
                fields={["name", "supervisor", "range", "status"]}
                hover
                clickableRows
                columnFilter
                tableFilter
                itemsPerPageSelect
                sorter
                itemsPerPage={10}
                activePage={page}
                onRowClick={(item) => history.push(`/edit-zone/${item.id}`)}
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
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
  );
}

export default View_schools;
