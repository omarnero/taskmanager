import React, { useContext } from "react";
import classes from "./Navigation Menu.module.css";
import { useNavigate } from "react-router-dom";
import AuctionsIcon from "../icons/AuctionsIcon";
import UserIcon from "../icons/UserIcon";
import PaymentIcon from "../icons/PaymentIcon";
import { KeffekContext } from "../../../context/KeffekContext";

const NavigationMenu = ({ height }) => {
  const navigate = useNavigate();
  const { toggle } = useContext(KeffekContext);
  const path = window.location.pathname;
  if (toggle) {
    return (
      <div className={height ? classes.nav__minmenu : classes.nav__menu}>
        <nav className={classes.navMobile}>
          <ul>
            <li
              className={path === "/auctions" ? classes.active : ""}
              onClick={() => {
                navigate("/auctions");
              }}
            >
              <AuctionsIcon width={30} height={26} />
            </li>
            <li
              className={path === "/employees" ? classes.active : ""}
              onClick={() => {
                navigate("/employees");
              }}
            >
              <UserIcon width={30} height={26} />
            </li>
            <li
              onClick={() => {
                navigate("/payment");
              }}
              className={path === "/payment" ? classes.active : ""}
            >
              <PaymentIcon width={30} height={26} />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  return (
    <div className={height ? classes.nav__minmenu : classes.nav__menu}>
      <nav className={classes.nav}>
        <ul>
          <li
            className={path === "/auctions" ? classes.active : ""}
            onClick={() => {
              navigate("/auctions");
            }}
          >
            <AuctionsIcon />
            <p className={classes.nav__name}>Auctions</p>
          </li>
          <li
            className={path === "/employees" ? classes.active : ""}
            onClick={() => {
              navigate("/employees");
            }}
          >
            <UserIcon />
            <p className={classes.nav__name}>Employees</p>
          </li>
          <li
            onClick={() => {
              navigate("/payment");
            }}
            className={path === "/payment" ? classes.active : ""}
          >
            <PaymentIcon />
            <p className={classes.nav__name}>Payments</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
