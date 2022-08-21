import React from 'react';



const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy( () => import( './views/dashboard/Dashboard' ) );
// zone
const Zones = React.lazy( () => import( './views/zone/Zones' ) );
const AddZone = React.lazy( () => import( './views/zone/AddZone' ) );
const EditZone = React.lazy( () => import( './views/zone/EditZone' ) );

// class
const Class = React.lazy( () => import( './views/class/View_class' ) );

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/charts', name: 'Charts', component: Charts },

  // Zones
  { path: '/zones', name: 'Zones', component: Zones },
  { path: '/add-zone', name: 'Add Zone', component: AddZone },
  { path: '/edit-zone/:id', exact: true, name: 'Edit Zones', component: EditZone },

  //class
  { path: '/class', name: 'Class', component: Class },

];

export default routes;
