import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";

const Anntapps = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <div className="pb-40">
        <div className="container mx-auto pb-20">
          <div className="mx-auto text-center">
            <h1 className="text-[#23533e] text-4xl font-semi-bold">
              <strong>anntAPPS</strong>
            </h1>
            <p className="text-[#23533e] text-sm pt-1">
              Pioneering crypto and blockchain technology in Nigeria, one Dapp
              at a time.
            </p>
          </div>
        </div>

        <div className="container mx-auto p-1 flex flex-wrap items-center md:gap-2 lg:gap-2 justify-center">
          <a href="/draw" target="_blank">
            <div className="img-fluid md:w-80 sm:max-w-xs shadow-lg py-5 px-4 text-center justify-center anntappcard rounded-lg">
              <Image
                src="/img/lottery_lg-01.png"
                alt=""
                className="img-fluid w-60 liquidityimg"
                width="240"
                height="0"
              />
              <h4 className=" text-white text-lg font-bold antialiased md:subpixel-antialiased mt-3">
                LOTTERY
              </h4>
            </div>
          </a>
          <div className="md:w-80 sm:max-w-xs shadow-lg py-5 px-4 text-center justify-center rounded-lg">
            <Image
              src="/img/crowdfund-01.png"
              alt=""
              className="img-fluid w-60 liquidityimg"
              width="240"
              height="0"
            />
            <h4 className="text-white text-lg font-bold antialiased md:subpixel-antialiased mt-3">
              CROWDFUNDING
            </h4>
          </div>

          <div className="md:w-80 sm:max-w-xs shadow-lg py-5 px-4 text-center justify-center rounded-lg">
            <Image
              src="/img/voting-01.png"
              alt=""
              className="img-fluid w-60 liquidityimg"
              width="240"
              height="0"
            />
            <h4 className="text-white text-lg font-bold antialiased md:subpixel-antialiased mt-3">
              VOTING
            </h4>
          </div>

          <div className="md:w-80 sm:max-w-xs shadow-lg py-5 px-4 text-center justify-center rounded-lg">
            <Image
              src="/img/dexedin-01.png"
              alt=""
              className="img-fluid w-60 liquidityimg "
              width="240"
              height="0"
            />
            <h4 className="text-white text-lg font-bold antialiased md:subpixel-antialiased mt-3">
              DEXEDIN
            </h4>
          </div>

          <div className="md:w-80 sm:max-w-xs shadow-lg py-5 px-4 text-center justify-center rounded-lg">
            <Image
              src="/img/dexbrary-01.png"
              alt=""
              className="img-fluid w-60 liquidityimg"
              width="240"
              height="0"
            />
            <h4 className="text-white text-lg font-bold antialiased md:subpixel-antialiased mt-3">
              DEXBRARY
            </h4>
          </div>

          <div className="md:w-80 sm:max-w-xs shadow-lg py-5 px-4 text-center justify-center rounded-lg">
            <Image
              src="/img/tindex-01.png"
              alt=""
              className="img-fluid w-60 liquidityimg"
              width="240"
              height="0"
            />
            <h4 className="text-white text-lg font-bold antialiased md:subpixel-antialiased mt-3">
              XOCIAL
            </h4>
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
                  <Image
                    src="img/twitter.svg"
                    alt="Twitter"
                    className="h-8 mx-auto mb-2"
                    width="32"
                    height="0"
                  />
                </a>
              </li>
              <li className="margin-right--large">
                <a href="https://medium.com/@anntoken23" target="_blank">
                  {" "}
                  <Image
                    src="img/medium.svg"
                    alt="Medium"
                    className="h-8 mx-auto mb-2"
                    width="32"
                    height="0"
                  />
                </a>
              </li>
              <li className="margin-right--large">
                <a href="https://www.instagram.com/anntoken23/" target="_blank">
                  {" "}
                  <Image
                    src="img/instagram.svg"
                    alt="Instagram"
                    className="h-8 mx-auto mb-2"
                    width="32"
                    height="0"
                  />
                </a>
              </li>
              <li className="margin-right--large">
                <a
                  href="https://www.facebook.com/profile.php?id=100089909078977"
                  target="_blank"
                >
                  {" "}
                  <Image
                    src="img/facebook.svg"
                    alt="Facebook"
                    className="h-8 mx-auto mb-2"
                    width="32"
                    height="0"
                  />
                </a>
              </li>
              <li className="margin-right--zero">
                <a href="mailto:info@annt23.com" target="_blank">
                  {" "}
                  <Image
                    src="/img/mail-32.png"
                    alt="Mail"
                    className="h-8 mx-auto mb-2"
                    width="32"
                    height="0"
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
                <Image
                  className="liquidityimg"
                  src="img/bscscan-logo.svg"
                  width="120"
                  height="0"
                  alt=""
                />
              </a>{" "}
            </div>
            <div className="margin--center text--center margin-vertical--1xlarge">
              {" "}
              <a
                href="https://www.team.finance/view-coin/0xf951ead486490bD64193fD2ea475697a9Fd5d582?name=A%20New%20Nigeria%20Token&symbol=ANNT"
                target="_blank"
              >
                <Image
                  className="liquidityimg"
                  src="img/LiquidityBadgeWhite.svg"
                  width="240"
                  height="0"
                  alt=""
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
              <Image
                className="liquidityimg"
                src="img/annt_logonew.svg"
                width="120"
                height="0"
                alt=""
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
