import React from 'react';
import Charts from './views/charts/Charts';
import Dashboard from './views/dashboard/Dashboard';
import Zones from './views/zone/Zones';
import AddZone from './views/zone/AddZone';
import EditZone from './views/zone/EditZone';
import Class from './views/class/View_class';
import ZoneDetailReport from './views/zone/ZoneDetailReport';
import SKUsCounted from './views/zone/SKUsCounted';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/charts', name: 'Charts', component: Charts },

  // Zones
  { path: '/zones', name: 'Zones', component: Zones },
  { path: '/add-zone', name: 'Add Zone', component: AddZone },
  { path: '/edit-zone/:id', exact: true, name: 'Edit Zones', component: EditZone },
  { path: '/zone-detail-report', exact: true, name: 'Zone Detail Report', component: ZoneDetailReport },
  { path: '/skus-counted', exact: true, name: 'SKUs Counted', component: SKUsCounted },


  //class
  { path: '/class', name: 'Class', component: Class },

];

export default routes;
