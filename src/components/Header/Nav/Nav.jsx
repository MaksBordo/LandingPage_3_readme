import React from "react";
import classes from "./nav.module.scss";
import { NavLink } from "react-router-dom";

export const Nav = ({ signInBtnActive, menuBtnActive, setMenuBtnActive }) => {
  return (
    <div
      className={
        menuBtnActive
          ? `${classes["nav"]} ${classes["nav_active"]}`
          : classes["nav"]
      }
    >
      <ul className={classes["nav__list"]}>
        <li className={classes["nav__list-item"]}>
          <NavLink
            to="/home"
            className={
              signInBtnActive
                ? `${classes["nav__link"]} ${classes["nav__link_signed-in"]}`
                : classes["nav__link"]
            }
            activeClassName={classes["nav__link_selected"]}
            onClick={() => setMenuBtnActive()}
          >
            WHAT'S NEW <span className={classes["nav__link-span"]}>&gt;</span>
          </NavLink>
        </li>
        <li className={classes["nav__list-item"]}>
          <NavLink
            to="/women"
            className={
              signInBtnActive
                ? `${classes["nav__link"]} ${classes["nav__link_signed-in"]}`
                : classes["nav__link"]
            }
            activeClassName={classes["nav__link_selected"]}
            onClick={() => setMenuBtnActive()}
          >
            WOMEN <span className={classes["nav__link-span"]}>&gt;</span>
          </NavLink>
        </li>
        <li className={classes["nav__list-item"]}>
          <NavLink
            to="/accessories"
            className={
              signInBtnActive
                ? `${classes["nav__link"]} ${classes["nav__link_signed-in"]}`
                : classes["nav__link"]
            }
            activeClassName={classes["nav__link_selected"]}
            onClick={() => setMenuBtnActive()}
          >
            ACCESSORIES <span className={classes["nav__link-span"]}>&gt;</span>
          </NavLink>
        </li>
        <li className={classes["nav__list-item"]}>
          <NavLink
            to="/kids"
            className={
              signInBtnActive
                ? `${classes["nav__link"]} ${classes["nav__link_signed-in"]}`
                : classes["nav__link"]
            }
            activeClassName={classes["nav__link_selected"]}
            onClick={() => setMenuBtnActive()}
          >
            KIDS <span className={classes["nav__link-span"]}>&gt;</span>
          </NavLink>
        </li>
        <li className={classes["nav__list-item"]}>
          <NavLink
            to="/beauty"
            className={
              signInBtnActive
                ? `${classes["nav__link"]} ${classes["nav__link_signed-in"]}`
                : classes["nav__link"]
            }
            activeClassName={classes["nav__link_selected"]}
            onClick={() => setMenuBtnActive()}
          >
            BEAUTY <span className={classes["nav__link-span"]}>&gt;</span>
          </NavLink>
        </li>
        <li className={classes["nav__list-item"]}>
          <NavLink
            to="/outlet"
            className={
              signInBtnActive
                ? `${classes["nav__link"]} ${classes["nav__link_signed-in"]}`
                : classes["nav__link"]
            }
            activeClassName={classes["nav__link_selected"]}
            onClick={() => setMenuBtnActive()}
          >
            OUTLET <span className={classes["nav__link-span"]}>&gt;</span>
          </NavLink>
        </li>
        <li className={classes["nav__list-item"]}>
          <NavLink
            to="/stories"
            className={
              signInBtnActive
                ? `${classes["nav__link"]} ${classes["nav__link_signed-in"]}`
                : classes["nav__link"]
            }
            activeClassName={classes["nav__link_selected"]}
            onClick={() => setMenuBtnActive()}
          >
            STORIES <span className={classes["nav__link-span"]}>&gt;</span>
          </NavLink>
        </li>
      </ul>
      <div className={classes["nav__sign-in-extra"]}>
        <button className={classes["nav__sign-in-extra-btn"]}>
          Sign in | Register
        </button>
      </div>
    </div>
  );
};
