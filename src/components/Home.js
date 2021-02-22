import React from "react";
import logo from "../images/desktop/logo.svg";
import introImage from "../images/desktop/image-hero.jpg";
import vrImage from "../images/desktop/image-interactive.jpg";
import earthImgae from "../images/desktop/image-deep-earth.jpg";
import arcadeImage from "../images/desktop/image-night-arcade.jpg";
import soccerImage from "../images/desktop/image-soccer-team.jpg";
import gridImage from "../images/desktop/image-grid.jpg";
import aboveImage from "../images/desktop/image-from-above.jpg";
import pocketImage from "../images/desktop/image-pocket-borealis.jpg";
import curiosityImage from "../images/desktop/image-curiosity.jpg";
import fisheyeImage from "../images/desktop/image-fisheye.jpg";
import facebookIcon from "../images/desktop/icon-facebook.svg";
import instagramIcon from "../images/desktop/icon-instagram.svg";
import pinterestIcon from "../images/desktop/icon-pinterest.svg";
import twitterIcon from "../images/desktop/icon-twitter.svg";
function Home() {
  return (
    <div className="container">
      <header className="header">
        <img src={introImage} alt="header-image" className="header__img" />
        <div className="header__head">
          <img src={logo} alt="logo" className="logo" />
          <nav className="header__nav">
            <ul>
              <li>About</li>
              <li>careers</li>
              <li>Event</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </nav>
        </div>
        <p className="header__p">IMMERSIVE EXPERIENCES THAT DELIVER</p>
      </header>
      <section className="vrSection">
        <img src={vrImage} alt="vrSection-image" className="vrSection__img" />
        <div className="vrSection__overlayDiv">
          <h3 className="vrSection__overlayHeading">
            THE LEADER IN INTERACTIVE VR
          </h3>
          <p>
            Founded in 2011, loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section className="creationSection">
        <div className="creationSection__heading">
          <h3 className="creationSection__headingText">OUR CREATIONS</h3>
          <button className="creationSection__btn">SEE ALL</button>
        </div>
        <div className="creations">
          <div className="creation">
            <img
              src={earthImgae}
              alt="creationImage"
              className="creationImage"
            />
            <span className="creation__text">
              DEEP <br /> EARTH
            </span>
          </div>
          <div className="creation">
            <img
              src={arcadeImage}
              alt="creationImage"
              className="creationImage"
            />
            <span className="creation__text">
              NIGHT <br />
              ARCADE
            </span>
          </div>
          <div className="creation">
            <img
              src={soccerImage}
              alt="creationImage"
              className="creationImage"
            />
            <span className="creation__text">
              SOCCER <br />
              TEAM VR
            </span>
          </div>
          <div className="creation">
            <img
              src={gridImage}
              alt="creationImage"
              className="creationImage"
            />
            <span className="creation__text">
              THE <br />
              GRID
            </span>
          </div>
          <div className="creation">
            <img
              src={aboveImage}
              alt="creationImage"
              className="creationImage"
            />
            <span className="creation__text">
              FROM UP <br /> ABOVE VR
            </span>
          </div>
          <div className="creation">
            <img
              src={pocketImage}
              alt="creationImage"
              className="creationImage"
            />
            <span className="creation__text">
              POCKET <br />
              BOREALS
            </span>
          </div>
          <div className="creation">
            <img
              src={curiosityImage}
              alt="creationImage"
              className="creationImage"
            />
            <span className="creation__text">
              THE <br />
              CURIOSITY
            </span>
          </div>
          <div className="creation">
            <img
              src={fisheyeImage}
              alt="creationImage"
              className="creationImage"
            />
            <span className="creation__text">
              MAKE IT <br />
              FISHEYE
            </span>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__head">
          <img src={logo} alt="logo" className="logo" />
          <a href="#" target="_blank">
            <img src={facebookIcon} className="icon" />
          </a>
          <a href="#" target="_blank">
            <img src={twitterIcon} className="icon" />
          </a>
          <a href="#" target="_blank">
            <img src={pinterestIcon} className="icon" />
          </a>
          <a href="#" target="_blank">
            <img src={instagramIcon} className="icon" />
          </a>
        </div>
        <div className="footer__foot">
          <ul>
            <li>
              <a href="#" target="_blank">
                About
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Careerss
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Events
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Products
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Support
              </a>
            </li>
          </ul>
          <span className="footer__copyright">
            2021 loopstudios. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
