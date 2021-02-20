import React, { useState } from "react";
import classes from "./header.module.scss";
import { Nav } from "./Nav/Nav";
import { MenuBtn } from "./MenuBtn/MenuBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../redux/reducers/reducerHeader/reducerHeader";

const HeaderRender = ({ signInBtnActive, setSignInBtnActive }) => {
  const [menuBtnActive, setMenuBtnActive] = useState(false);
  const [openFormBtnActive, setOpenFormBtnActive] = useState(false);
  return (
    <div
      className={
        signInBtnActive
          ? `${classes["header"]} ${classes["header_signed-in"]}`
          : classes["header"]
      }
    >
      <div className={classes["header__container"]}>
        <MenuBtn
          signInBtnActive={signInBtnActive}
          menuBtnActive={menuBtnActive}
          setMenuBtnActive={() => {
            setMenuBtnActive(!menuBtnActive);
            setOpenFormBtnActive(false);
          }}
        />
        <button
          className={
            openFormBtnActive
              ? `${classes["header__open-form-btn"]} ${classes["header__open-form-btn_active"]}`
              : classes["header__open-form-btn"]
          }
          onClick={() => {
            setOpenFormBtnActive(!openFormBtnActive);
            setMenuBtnActive(false);
          }}
        >
          <FontAwesomeIcon
            icon={faSearch}
            size="lg"
            className={
              signInBtnActive
                ? `${classes["header__open-form-btn-icon"]} ${classes["header__open-form-btn-icon_signed-in"]}`
                : classes["header__open-form-btn-icon"]
            }
          />
        </button>
        <h1
          className={
            menuBtnActive
              ? `${classes["header__title"]} ${classes["header__title_active"]}`
              : classes["header__title"]
          }
          style={
            openFormBtnActive || menuBtnActive || signInBtnActive
              ? { color: "#000" }
              : { color: "#fff" }
          }
        >
          Aurora
        </h1>
        <form
          className={
            openFormBtnActive
              ? `${classes["header__form"]} ${classes["header__form_open"]}`
              : classes["header__form"]
          }
        >
          <input
            type="text"
            className={classes["header__search"]}
            placeholder="What are you looking for?"
          />
          <button className={classes["header__search-btn"]} type="submit">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              className={classes["header__search-icon"]}
            />
          </button>
        </form>
        <button
          className={classes["header__sign-in-btn"]}
          onClick={() => {
            setSignInBtnActive();
          }}
        >
          <p className={classes["header__sign-in-btn-text"]}>
            {signInBtnActive ? "Hi, Angels" : "Sign in | Register"}
          </p>
          <svg
            className={classes["header__sign-in-btn-svg"]}
            viewBox="0 0 53 60"
          >
            <g>
              <path d="M47.5,15.6 C47.5,13.5 45.8,11.9 43.7,11.9 L35.5,11.9 C35.4,8.9 34.8,5.5 32.9,3.1 C31.2,1.1 28.9,-2.22044605e-15 25.9,-2.22044605e-15 C23.4,-2.22044605e-15 21.3,1 19.8,2.8 C17.7,5.2 16.9,8.9 16.7,11.9 L8.9,11.9 C6.8,11.9 5.1,13.5 5.1,15.6 L0,56.1 C0,58.2 1.7,59.9 3.8,59.9 L26.9,59.9 L48.8,59.9 C50.9,59.9 52.6,58.2 52.6,56.1 L47.5,15.6 L47.5,15.6 Z M21.2,4 C22.4,2.7 23.9,2 25.8,2 C28.2,2 30,2.9 31.3,4.4 C32.9,6.4 33.4,8.8 33.5,11.8 L18.6,11.8 C18.8,8.9 19.5,6 21.2,4 L21.2,4 Z M48.8,57.9 L26.9,57.9 L3.8,57.9 C2.8,57.9 2.1,57.1 2,56.2 L7.2,15.8 L7.3,15.7 L7.3,15.6 C7.3,14.6 7.9,14 8.9,14 L16.5,14 C16.5,16 16.7,17.3 16.7,17.4 C16.8,17.9 17.2,18.2 17.7,18.2 L17.8,18.2 C18.3,18.1 18.7,17.8 18.7,17.2 C18.7,17.2 18.5,16 18.6,14 L33.6,14 C33.5,16 33.3,17.1 33.3,17.1 C33.2,17.6 33.5,18.1 34.1,18.2 C34.6,18.3 35.2,18.1 35.3,17.5 C35.3,17.4 35.6,16 35.7,14 L43.9,14 C44.9,14 45.5,14.5 45.5,15.6 L45.5,15.7 L45.6,15.8 L50.7,56.2 C50.5,57.1 49.8,57.9 48.8,57.9 L48.8,57.9 Z"></path>
            </g>
          </svg>
          <p
            className={
              signInBtnActive
                ? `${classes["header__cart-display"]} ${classes["header__cart-display_active"]}`
                : classes["header__cart-display"]
            }
          >
            99
          </p>
        </button>
      </div>
      <Nav
        signInBtnActive={signInBtnActive}
        menuBtnActive={menuBtnActive}
        setMenuBtnActive={() => {
          setMenuBtnActive(false);
        }}
      />
    </div>
  );
};
export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderRender);
