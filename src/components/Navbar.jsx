import './Navbar.css'
import React, { useState }from "react";
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

const menu = document.querySelector(".cust-navbar");
const menuItems = document.querySelectorAll(".Navbar-Link");
const hamburger= document.querySelector(".hamburger-button");
const closeIcon= document.querySelector(".closeMenu");
const menuIcon = document.querySelector(".openMenu");

const menuOpen = false;


function handleMenu(menuOpen) {
  menuOpen = !menuOpen;
  if (menuOpen) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    console.log("if")

  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    console.log("else");
  }
}

// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )
const CustNavbar = () => (
        <div className="cust-navbar">
              <button class="hamburger-button" onClick={menuOpen}> 
                <i className="fas fa-bars hamburger openMenu"></i>
                <i className="fas fa-bars hamburger closeMenu"></i>
              </button>
              <NavLink className="Navbar-Link" to="/">HEM             </NavLink>
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