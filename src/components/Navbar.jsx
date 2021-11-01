import './Navbar.css'
import React from "react";
import SetPageContent from './SetPageContent';
import InfoBox from './InfoBox';
import { NavLink,
         BrowserRouter as Router,
         Switch,
         BrowserRouter,
         Route
 } from "react-router-dom";

 const homeContent      = <SetPageContent id="home"     />;
 const rsvpContent      = <SetPageContent id="rsvp"     />;
 const sleepingContent  = <SetPageContent id="sleeping" />;
 const speechContent    = <SetPageContent id="speech"   />;
 const giftsContent     = <SetPageContent id="gifts"    />;
 const errorContent     = <SetPageContent id="error"    />;
const notfound = () => (
  <div>
    <InfoBox title="404" content={errorContent}></InfoBox>
  </div>
)

const CustNavbar = () => (
        <div className="cust-navbar">
              <NavLink className="Navbar-Link" to="/">Hem             </NavLink>
              <NavLink className="Navbar-Link" to="/OSA">OSA          </NavLink>
              <NavLink className="Navbar-Link" to="/SOVPLATS">SOVPLATS</NavLink>
              <NavLink className="Navbar-Link" to="/TAL">TAL          </NavLink>
              <NavLink className="Navbar-Link" to="/GIFTS">GÅVOR      </NavLink>
        </div>
)

const routes = (
  <BrowserRouter>
    <div>
      <CustNavbar />
      <Switch>
        <Route id="infobox" exact path='/'    render={() => <InfoBox title="Välkommen" content={homeContent}      />} />
        <Route id="infobox" path='/OSA'       render={() => <InfoBox title="Osa"       content={rsvpContent}      />} />
        <Route id="infobox" path='/SOVPLATS'  render={() => <InfoBox title="Sovplats"  content={sleepingContent}  />} />
        <Route id="infobox" path='/TAL'       render={() => <InfoBox title="Hålla Tal" content={speechContent}    />} />
        <Route id="infobox" path='/GIFTS'     render={() => <InfoBox title="Gåvor"     content={giftsContent}     />} />
        <Route component={notfound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default routes;