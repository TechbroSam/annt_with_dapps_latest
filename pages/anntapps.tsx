import React from "react";

import "../styles/main.css";
import "../styles/bootstrap.min.css";

const Anntapps = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <div>
        <div className="container py-5">
          <div className="row text-center text-white">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-4 color--text-comu-base">
                <strong>anntAPPS</strong>
              </h1>
              <p className="color--text-comu-base lead mb-0">
                Pioneering crypto and blockchain technology in Nigeria, one Dapp
                at a time.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-xl-3 col-sm-6 mb-5 anntappcard">
              <a href="/draw" target="_blank">
                <div className="bg-white rounded-3 shadow-mm py-5 px-4">
                  <img
                    src="img/lottery_lg-01.png"
                    alt=""
                    width="200"
                    className="img-fluid mb-3"
                  />
                  <h4 className="mb-0 color--text-comu-base"> LOTTERY</h4>
                </div>
              </a>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5 anntappcard">
              <div className="bg-white rounded shadow-mm py-5 px-4">
                <img
                  src="img/crowdfund-01.png"
                  alt=""
                  width="200"
                  className="img-fluid mb-3"
                />
                <h4 className="mb-0 color--white">CROWDFUNDING</h4>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5 anntappcard">
              <div className="bg-white rounded shadow-mm py-5 px-4">
                <img
                  src="img/voting-01.png"
                  alt=""
                  width="200"
                  className="img-fluid mb-3"
                />
                <h4 className="mb-0 color--text-comu-base">VOTING</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-mm py-5 px-4">
                <img
                  src="img/dexedin-01.png"
                  alt=""
                  width="200"
                  className="img-fluid mb-3"
                />
                <h4 className="mb-0 color--text-comu-base">DEXEDIN</h4>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-mm py-5 px-4">
                <img
                  src="img/dexbrary-01.png"
                  alt=""
                  width="200"
                  className="img-fluid mb-3"
                />
                <h4 className="mb-0 color--white">DEXBRARY</h4>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-mm py-5 px-4">
                <img
                  src="img/tindex-01.png"
                  alt=""
                  width="200"
                  className="img-fluid mb-3"
                />
                <h4 className="mb-0 color--text-comu-base">DEXOCIAL</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-top--1xlarge padding-top--4xlarge padding-top--zero--tablet">
        <div className="wrapper--inner margin--center margin-top--small--mobile">
          <div className="width--80--desktop-wide width--80--desktop width-100--tablet margin--center">
            <h2 className="color--white font-weight--bold font--1xlarge text--center margin-bottom--1xlarge">
              Connect with ANNT
            </h2>
            <ul className="list--reset list--inline margin--center text--center font--2xlarge margin-bottom--4xlarge">
              <li className="margin-right--large">
                <a
                  href="https://twitter.com/Annt2363"
                  target="_blank"
                  className="color--text-comu-base"
                >
                  {" "}
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li className="margin-right--large">
                <a
                  href="https://medium.com/@anntoken23"
                  target="_blank"
                  className="color--text-comu-base"
                >
                  {" "}
                  <ion-icon name="logo-medium"></ion-icon>
                </a>
              </li>
              <li className="margin-right--large">
                <a
                  href="https://www.instagram.com/anntoken23/"
                  target="_blank"
                  className="color--text-comu-base"
                >
                  {" "}
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li className="margin-right--large">
                <a
                  href="https://www.facebook.com/profile.php?id=100089909078977"
                  target="_blank"
                  className="color--text-comu-base"
                >
                  {" "}
                  <ion-icon name="logo-facebook"> </ion-icon>
                </a>
              </li>
              <li className="margin-right--zero">
                <a
                  href="mailto:info@annt23.com"
                  target="_blank"
                  className="color--text-comu-base"
                >
                  {" "}
                  <ion-icon name="mail-sharp"> </ion-icon>
                </a>
              </li>
            </ul>
            <div className="color--white margin--center text--center">
              &copy; Copyright 2022{" "}
              <strong>
                <span>ANNT</span>
              </strong>
              . All rights reserved
            </div>
            <div className="margin--center text--center margin-vertical--4xlarge">
              {" "}
              <a
                href="https://www.team.finance/view-coin/0xf951ead486490bD64193fD2ea475697a9Fd5d582?name=A%20New%20Nigeria%20Token&symbol=ANNT"
                target="_blank"
              >
                <img src="img/LiquidityBadgeWhite.svg" />
              </a>{" "}
            </div>
            <div className="margin--center text--center margin-vertical--4xlarge">
              <img src="img/annt_logonew.svg" width="120px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anntapps;
