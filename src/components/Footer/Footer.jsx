import React, { useState, useEffect } from "react";
import classes from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faSnapchatGhost,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const [headingBtnDisabled, setHeadingBtnDisabled] = useState(true);
  const [linksOpen, setLinksOpen] = useState([false, false, false, false]);
  useEffect(() => {
    if (window.matchMedia("(max-width: 574px)").matches) {
      setHeadingBtnDisabled(false);
    }
  }, []);
  const updateLinksOpen = (id) => {
    setLinksOpen(linksOpen.map((item, index) => (index === id ? !item : item)));
  };
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer__container"]}>
        <div className={classes["footer__wrapper"]}>
          <button
            className={classes["footer__heading-btn"]}
            disabled={headingBtnDisabled}
            onClick={() => {
              updateLinksOpen(0);
            }}
          >
            About Us
            <span
              className={
                linksOpen[0]
                  ? `${classes["footer__heading-btn-arrow"]} ${classes["footer__heading-btn-arrow_open"]}`
                  : classes["footer__heading-btn-arrow"]
              }
            >
              &#8250;
            </span>
          </button>
          <div
            className={
              linksOpen[0]
                ? `${classes["footer__links"]} ${classes["footer__links_open"]}`
                : classes["footer__links"]
            }
          >
            <a href="#" className={classes["footer__link"]}>
              Who we are
            </a>
            <a href="#" className={classes["footer__link"]}>
              Our stores
            </a>
            <a href="#" className={classes["footer__link"]}>
              Customer Reviews
            </a>
          </div>
        </div>
        <div className={classes["footer__wrapper"]}>
          <button
            className={classes["footer__heading-btn"]}
            disabled={headingBtnDisabled}
            onClick={() => {
              updateLinksOpen(1);
            }}
          >
            Categories
            <span
              className={
                linksOpen[1]
                  ? `${classes["footer__heading-btn-arrow"]} ${classes["footer__heading-btn-arrow_open"]}`
                  : classes["footer__heading-btn-arrow"]
              }
            >
              &#8250;
            </span>
          </button>
          <div
            className={
              linksOpen[1]
                ? `${classes["footer__links"]} ${classes["footer__links_open"]}`
                : classes["footer__links"]
            }
          >
            <a href="#" className={classes["footer__link"]}>
              Women fashion
            </a>
            <a href="#" className={classes["footer__link"]}>
              Accessories
            </a>
            <a href="#" className={classes["footer__link"]}>
              Kids
            </a>
          </div>
        </div>
        <div className={classes["footer__wrapper"]}>
          <button
            className={classes["footer__heading-btn"]}
            disabled={headingBtnDisabled}
            onClick={() => {
              updateLinksOpen(2);
            }}
          >
            Help
            <span
              className={
                linksOpen[2]
                  ? `${classes["footer__heading-btn-arrow"]} ${classes["footer__heading-btn-arrow_open"]}`
                  : classes["footer__heading-btn-arrow"]
              }
            >
              &#8250;
            </span>
          </button>
          <div
            className={
              linksOpen[2]
                ? `${classes["footer__links"]} ${classes["footer__links_open"]}`
                : classes["footer__links"]
            }
          >
            <a href="#" className={classes["footer__link"]}>
              Customer service
            </a>
            <a href="#" className={classes["footer__link"]}>
              Size guide
            </a>
            <a href="#" className={classes["footer__link"]}>
              Contact us
            </a>
          </div>
        </div>
        <div className={classes["footer__wrapper"]}>
          <button
            className={classes["footer__heading-btn"]}
            disabled={headingBtnDisabled}
            onClick={() => {
              updateLinksOpen(3);
            }}
          >
            Payments & Delivery
            <span
              className={
                linksOpen[3]
                  ? `${classes["footer__heading-btn-arrow"]} ${classes["footer__heading-btn-arrow_open"]}`
                  : classes["footer__heading-btn-arrow"]
              }
            >
              &#8250;
            </span>
          </button>
          <div
            className={
              linksOpen[3]
                ? `${classes["footer__links"]} ${classes["footer__links_open"]}`
                : classes["footer__links"]
            }
          >
            <a href="#" className={classes["footer__link"]}>
              Purchase terms
            </a>
            <a href="#" className={classes["footer__link"]}>
              Guarantee
            </a>
          </div>
        </div>
        <div className={classes["footer__wrapper"]}>
          <button
            className={`${classes["footer__heading-btn"]} ${classes["footer__heading-btn_social"]}`}
          >
            Social
          </button>
          <div className={classes["footer__social-links"]}>
            <a
              href="https://www.instagram.com/"
              className={classes["footer__social-link"]}
              title="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://www.twitter.com/"
              className={classes["footer__social-link"]}
              title="twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://www.snapchat.com/"
              className={classes["footer__social-link"]}
              title="snapchat"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSnapchatGhost} size="lg" />
            </a>
            <a
              href="https://www.facebook.com/"
              className={classes["footer__social-link"]}
              title="facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://www.youtube.com/"
              className={classes["footer__social-link"]}
              title="youtube"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <p className={classes["footer__copyright"]}>
        © Copyright, Aurora 2020. All Rights reserved.
      </p>
    </footer>
  );
};
