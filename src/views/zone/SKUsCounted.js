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

const SKUsCounted = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  const pageChange = (newPage) => {
    currentPage !== newPage &&
      history.push(`/zone-detail-report?page=${newPage}`);
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

  const fields = ["name", "supervisor", "range", "status",     {
    key: 'action',
    label: 'Action',
    sorter: false,
    filter: false
  }];

  return (
    <>
      <CRow>
        <CCol sm={12} md={12}>
          <CCard>
            <CCardHeader>
              <h4>SKUs counted under [Fixture No.]</h4>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={zoneData}
                fields={fields}
                hover
                clickableRows
                columnFilter
                tableFilter
                itemsPerPageSelect
                sorter
                itemsPerPage={10}
                activePage={page}
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                  action: (item, index) => {
                    return (
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={() => {
                            console.log("testing");
                          }}
                        >
                          {"Clear Count"}
                        </CButton>
                      </td>
                    );
                  },
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
};

export default SKUsCounted;
