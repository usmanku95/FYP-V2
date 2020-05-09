/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Events from "views/Events"
import Matches from "views/Matches"
import MatchSummary from "views/MatchSummary"
import Teams from "views/Teams"
import TeamDetails from "views/TeamDetails"
import Schedule from "views/Schedule"
import Scoreboard from "views/Scoreboard"
import Register from "views/Register"

import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Login from "views/Login";

const dashboardRoutes = [
  {
    path:"/events",
    component:Events,
    name:"Events",
    layout:"/user"
  },
  {
    path:"/matches",
    component:Matches,
    name:"Matches",
    hideSelf:true,
    layout:"/user"
  },

  {
    path:"/matchSummary",
    component:MatchSummary,
    name:"Match Summary",
    hideSelf:true,
    layout:"/user"
  },
  {
    path:"/teams",
    component:Teams,
    name:"Teams",
    layout:"/user"
  },
  {
    path:"/teamDetails",
    component:TeamDetails,
    name:"Teams Detail",
    hideSelf:true,
    layout:"/user"
  },
  {
    path:"/schedule",
    component:Schedule,
    name:"Schedule",
    layout:"/user"
  },
  {
    path:"/scoreboard",
    component:Scoreboard,
    name:"Scoreboard",
    layout:"/user"
  },
  {
    path:"/register",
    component:Register,
    name:"Register",
    layout:"/user"
  },  {
    path:"/login",
    component:Login,
    name:"Login",
    layout:"/user"
  },
];

export default dashboardRoutes;
