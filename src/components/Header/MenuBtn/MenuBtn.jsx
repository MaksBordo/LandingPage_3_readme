import React from "react";
import classes from "./menu-btn.module.scss";

export const MenuBtn = ({
  signInBtnActive,
  menuBtnActive,
  setMenuBtnActive,
}) => {
  return (
    <button
      className={
        menuBtnActive
          ? `${classes["menu-btn"]} ${classes["menu-btn_active"]}`
          : classes["menu-btn"]
      }
      onClick={() => {
        setMenuBtnActive();
      }}
    >
      <div
        className={
          signInBtnActive
            ? `${classes["menu-btn__bar1"]} ${classes["menu-btn__signed-in"]}`
            : classes["menu-btn__bar1"]
        }
      ></div>
      <div
        className={
          signInBtnActive
            ? `${classes["menu-btn__bar2"]} ${classes["menu-btn__signed-in"]}`
            : classes["menu-btn__bar2"]
        }
      ></div>
      <div
        className={
          signInBtnActive
            ? `${classes["menu-btn__bar3"]} ${classes["menu-btn__signed-in"]}`
            : classes["menu-btn__bar3"]
        }
      ></div>
    </button>
  );
};
