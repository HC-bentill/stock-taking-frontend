import React from 'react';



const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy( () => import( './views/dashboard/Dashboard' ) );
// school
const Schools = React.lazy( () => import( './views/school/View_schools' ) );
const School = React.lazy( () => import( './views/school/School' ) );
const Add_school = React.lazy( () => import( './views/school/Add_school' ) );

// class
const Class = React.lazy( () => import( './views/class/View_class' ) );

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/charts', name: 'Charts', component: Charts },

  // schools
  { path: '/schools', name: 'Schools', component: Schools },
  { path: '/add_school', name: 'Add School', component: Add_school },
  { path: '/school/:id', exact: true, name: 'School Details', component: School },

  //class
  { path: '/class', name: 'Class', component: Class },

];

export default routes;
