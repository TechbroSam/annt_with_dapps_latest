import Head from "next/head";
import React, { useState } from "react";

const Anntapps = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <div>
        <div className="container mx-auto py-5">
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

        <div className="sm:container mx-auto md:mx-1 max-sm:w-8/12 max-md:w-2/12 mdcontainer">
          <div className="flex-1 md:flex text-center justify-center md:space-x-5 mx-auto">
            <div className="col-xl-3 col-sm-6 mb-5 anntappcard">
              <a href="/draw" target="_blank">
                <div className="shadow-mm py-5 px-4">
                  <img
                    src="img/lottery_lg-01.png"
                    alt=""
                    width="200"
                    className="img-fluid mb-3 liquidityimg"
                  />
                  <h4 className="mb-0 color--text-comu-base"> LOTTERY</h4>
                </div>
              </a>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="shadow-mm py-5 px-4">
                <img
                  src="img/crowdfund-01.png"
                  alt=""
                  width="200"
                  className="img-fluid mb-3 liquidityimg"
                />
                <h4 className="mb-0 color--white">CROWDFUNDING</h4>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="rounded shadow-mm py-5 px-4 text-center justify-center">
                <img
                  src="img/voting-01.png"
                  alt=""
                  width="200"
                  className="img-fluid mb-3 liquidityimg"
                />
                <h4 className="mb-0 color--text-comu-base">VOTING</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:container mx-auto max-sm:w-8/12 mdcontainer">
          <div className="flex-1 md:flex text-center justify-center md:space-x-5">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="rounded shadow-mm py-5 px-4">
                <img
                  src="img/dexedin-01.png"
                  alt=""
                  width="200"
                  className="img-fluid mb-3 liquidityimg "
                />
                <h4 className="mb-0 color--text-comu-base">DEXEDIN</h4>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="rounded shadow-mm py-5 px-4">
                <img
                  src="img/dexbrary-01.png"
                  alt=""
                  width="200"
                  className="img-fluid mb-3 liquidityimg"
                />
                <h4 className="mb-0 color--white">DEXBRARY</h4>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="rounded shadow-mm py-5 px-4">
                <img
                  src="img/tindex-01.png"
                  alt=""
                  width="200"
                  className="img-fluid mb-3 liquidityimg"
                />
                <h4 className="mb-0 color--text-comu-base">DEXOCIAL</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="color--white text--center margin-top--1xlarge padding-top--4xlarge padding-top--zero--tablet">
        <div className="wrapper--inner margin--center">
          <div className="width--80--desktop-wide width--80--desktop width-100--tablet margin--center">
            <h2 className="font-bold font--1xlarge color--text-white text--cente margin-bottom--1xlarge">
              Connect with ANNT
            </h2>
            <ul className="list--reset list--inline margin--center text--center font--2xlarge margin-bottom--4xlarge">
              <li className="margin-right--large">
                <a href="https://twitter.com/Annt2363" target="_blank">
                  {" "}
                  <img
                    src="img/twitter.svg"
                    alt="Twitter"
                    className="h-8 mx-auto mb-2"
                  />
                </a>
              </li>
              <li className="margin-right--large">
                <a href="https://medium.com/@anntoken23" target="_blank">
                  {" "}
                  <img
                    src="img/medium.svg"
                    alt="Twitter"
                    className="h-8 mx-auto mb-2"
                  />
                </a>
              </li>
              <li className="margin-right--large">
                <a href="https://www.instagram.com/anntoken23/" target="_blank">
                  {" "}
                  <img
                    src="img/instagram.svg"
                    alt="Twitter"
                    className="h-8 mx-auto mb-2"
                  />
                </a>
              </li>
              <li className="margin-right--large">
                <a
                  href="https://www.facebook.com/profile.php?id=100089909078977"
                  target="_blank"
                >
                  {" "}
                  <img
                    src="img/facebook.svg"
                    alt="Twitter"
                    className="h-8 mx-auto mb-2"
                  />
                </a>
              </li>
              <li className="margin-right--zero">
                <a href="mailto:info@annt23.com" target="_blank">
                  {" "}
                  <img
                    src="img/mail-32.png"
                    alt="Twitter"
                    className="h-8 mx-auto mb-2"
                  />
                </a>
              </li>
            </ul>

            <div className="margin--center text--center margin-vertical--1xlarge">
              {" "}
              <a
                href="https://bscscan.com/token/0xf951ead486490bd64193fd2ea475697a9fd5d582"
                target="_blank"
              >
                <img
                  className="liquidityimg"
                  src="img/bscscan-logo.svg"
                  width="120px"
                />
              </a>{" "}
            </div>
            <div className="margin--center text--center margin-vertical--1xlarge">
              {" "}
              <a
                href="https://www.team.finance/view-coin/0xf951ead486490bD64193fD2ea475697a9Fd5d582?name=A%20New%20Nigeria%20Token&symbol=ANNT"
                target="_blank"
              >
                <img
                  className="liquidityimg"
                  src="img/LiquidityBadgeWhite.svg"
                />
              </a>{" "}
            </div>
            <div className="margin--center text--center margin-vertical--1xlarge">
              &copy; Copyright 2022{" "}
              <strong>
                <span>ANNT</span>
              </strong>
              . All rights reserved
            </div>
            <div className="margin--center text--center margin-vertical--1xlarge margin-bottom--6xlarge">
              <img
                className="liquidityimg"
                src="img/annt_logonew.svg"
                width="120px"
              />
            </div>
          </div>
        </div>
      </div>
      <Head>
        <title>ANNT | A New Nigeria Token</title>
        <link rel="stylesheet" href="../styles/main.css" />
      </Head>
    </div>
  );
};

export default Anntapps;
