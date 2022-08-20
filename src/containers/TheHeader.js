import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSideMenu, selectSideMenu } from 'src/features/sideMenuSlice'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sideMenu = useSelector(selectSideMenu)

  const toggleSidebar = () => {
    // const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    // dispatch({type: 'set', sidebarShow: val})
    //get the current state of the sidebar manu using selector and use the dispatch to change it upon click
    dispatch(setSideMenu(!sideMenu))
  }

  const toggleSidebarMobile = () => {
    // const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    // dispatch({type: 'set', sidebarShow: val})
    dispatch(setSideMenu(!sideMenu))
  }

  const handleWindowWidth = () => {
    if ( window.innerWidth > 992 ) {
      dispatch( setSideMenu(true) );
    } else{
      dispatch( setSideMenu(false) );
    } 
  }

  //if component mounts and screen width is more then 992px then sidebar should be true
  useEffect( () => {
    handleWindowWidth();
  },[])


  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <h4 className="c-sidebar-brand-full">Crayons</h4>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">{" "}</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/users">{" "}</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>{" "}</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/>
        <TheHeaderDropdown/>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
          <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink className="c-subheader-nav-link"href="#">
              <CIcon name="cil-speech" alt="Settings" />
            </CLink>
            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
            </CLink>
            <CLink className="c-subheader-nav-link" href="#">
              <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
            </CLink>
          </div>
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
