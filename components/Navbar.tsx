import React, { useState } from "react";
import "../styles/main.css";
import "../styles/bootstrap.min.css";

{
  /*import { Link } from 'react-scroll';*/
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="grid pt-10 items-center">
      <div className="header">
        <div className="wrapper--inner margin--center text--center--mobile padding--zero--mobile">
          <div className="display--flex justify--space-between align-items--center flex--wrap">
            <div className="width--100--mobile position--relative link--white">
              <img src="img/annt_logonew.svg" className="header__logo" />
            </div>
            <div className="header__right margin-top--large--mobile font--small width--100--mobile position--relative">
              <ul className="list--reset">
                <li className="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a
                    href="#about"
                    className="link--underline--none font--medium link--white--hover color--text-green1-base"
                  >
                    About
                  </a>
                </li>
                <li className="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a
                    href="#motive"
                    className="link--underline--none font--medium link--white--hover color--text-green1-base"
                  >
                    Motive
                  </a>
                </li>
                <li className="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a
                    href="#vision"
                    className="link--underline--none font--medium link--white--hover color--text-green1-base"
                  >
                    Vision
                  </a>
                </li>
                <li className="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a
                    href="#tokenomics"
                    className="link--underline--none font--medium link--white--hover color--text-green1-base"
                  >
                    Tokenomics
                  </a>
                </li>
                <li className="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a
                    href="#community"
                    className="link--underline--none font--medium link--white--hover color--text-green1-base"
                  >
                    Community
                  </a>
                </li>
                <li className="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a
                    href="/anntapps"
                    target="_blank"
                    className="link--underline--none font--medium link--white--hover color--text-green1-base"
                  >
                    <strong>anntAPPS</strong>
                  </a>
                </li>
                <div className="padding-horizontal--large--mobile display--inline-block display--block--mobile margin-left--large margin-left--large--tablet margin-top--zero--tablet margin-top--large--mobile">
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=0xf951ead486490bD64193fD2ea475697a9Fd5d582"
                    target="_blank"
                    className="buy-pancake button--small display--inline-block button--white--outline link--underline--none button--pill margin-right--large"
                  >
                    <span className="font--small font-weight--bold">
                      Buy Now
                    </span>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
