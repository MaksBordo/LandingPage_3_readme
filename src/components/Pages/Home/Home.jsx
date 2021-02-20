import React, { Fragment } from "react";
import classes from "./home.module.scss";
import { Footer } from "../../Footer/Footer";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../redux/reducers/reducerHeader/reducerHeader";

const HomeRender = ({ signInBtnActive }) => {
  return (
    <Fragment>
      <div className={classes["home"]}>
        <div
          className={
            signInBtnActive
              ? `${classes["home__content"]} ${classes["home__content_active"]}`
              : classes["home__content"]
          }
        >
          <h2 className={classes["home__title"]}>Hello! Welcome to Aurora</h2>
        </div>
        <div className={classes["home__subscribe"]}>
          <div className={classes["home__subscribe-container"]}>
            <p className={classes["home__subscribe-text"]}>
              New arrivals. Exclusive previews. First access to sales. Sign up
              to stay in the know.
            </p>
            <form className={classes["home__subscribe-form"]}>
              <input
                type="text"
                placeholder="Your email address"
                className={classes["home__subscribe-input"]}
              />
              <button className={classes["home__subscribe-btn"]}>
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeRender);
