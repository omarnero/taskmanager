import React, { useContext } from "react";
import classes from "./NavigationMenu.module.css";
import { useNavigate } from "react-router-dom";
// import AuctionsIcon from "../icons/AuctionsIcon";
// import UserIcon from "../icons/UserIcon";
// import PaymentIcon from "../icons/PaymentIcon";


const NavigationMenu = ({ height }) => {
  const navigate = useNavigate();

  const path = window.location.pathname;
 
  return (
    <div className={height ? classes.nav__minmenu : classes.nav__menu}>
      <nav className={classes.nav}>
        <ul>
          <li
            className={path === "/profile" ? classes.active : ""}
            onClick={() => {
              navigate("/profile");
            }}
          >
    
            <p className={classes.nav__name}>Profile</p>
          </li>
          <li
            className={path === "/tasks" ? classes.active : ""}
            onClick={() => {
              navigate("/tasks");
            }}
          >

            <p className={classes.nav__name}>Tasks</p>
          </li>
          <li
            onClick={() => {
              navigate("/tasks");
            }}
            className={path === "/payment" ? classes.active : ""}
          >
   
            <p className={classes.nav__name}>Payments</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
