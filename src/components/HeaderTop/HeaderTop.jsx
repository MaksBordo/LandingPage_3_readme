import React from "react";
import classes from "./header-top.module.scss";

export const HeaderTop = () => {
  return (
    <div className={classes["header-top"]}>
      <p className={classes["header-top__text"]}>We deliver Worldwide</p>
      <div className={classes["header-top__aside"]}>
        <img
          className={classes["header-top__aside-icon"]}
          src="https://img.icons8.com/material/24/000000/marker--v1.png"
          alt="location"
        />
        <a href="#" className={classes["header-top__aside-link"]}>
          Our stores
        </a>
      </div>
    </div>
  );
};
