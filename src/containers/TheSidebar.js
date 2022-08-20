import React from 'react'
import {
  useSelector,
  // useDispatch
} from 'react-redux'
import { setSideMenu, selectSideMenu } from 'src/features/sideMenuSlice'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  // const dispatch = useDispatch()
  const sideMenu = useSelector( selectSideMenu )

  return (
    <CSidebar
      show={sideMenu}
      minimize={true}
      colorScheme="dark"
      // style={{background:"#261b87"}}
      // onShowChange={dispatch(setSideMenu(true))}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        /> */}
        <h4 className="c-sidebar-brand-full">Crayons</h4>
        <h4 className="c-sidebar-brand-minimized"><strong>C</strong></h4>
        {/* <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
