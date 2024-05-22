import React from "react";
import Typed from "react-typed";
import Head from "next/head";
import Navbar from "@/components/Navbar1";
import Image from "next/image";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="color--white -z-0 md:mt-10 mt-12">
        <div className="">
          <div id="home" className="divider-bottom--none">
            <div className="wrapper--inner margin--center">
              <div className="margin-bottom--zero--tablet display--flex flex--wrap justify--space-between width--100--desktop-wide position--relative">
                <div className="width--80--desktop-wide width--80--desktop width--80--tablet width--100--mobile padding-vertical--6xlarge padding-top--3xlarge--tablet padding-top--zero--mobile margin-top--zero--tablet padding-horizontal--large--zero margin-bottom--large margin--center padding-bottom--large--mobile margin-bottom--small--mobile padding-bottom--large">
                  <div  className="position--relative text--center">
                    <div id="home"
                      style={{ textShadow: "2px 2px 4px #545454c4" }}
                      className="text-white font-bold text-center text-2xl md:text-4xl lg:text-6xl"
                    >
                      ANNT - A New Nigeria Token
                    </div>
                    <h1 className="font-bold md:text-base text-[9px] margin-bottom--large margin-bottom--1xlarge color--text-white-light margin-top--1xlarge">
                      No force on earth can stop{" "}
                      <span className="auto-type text-[10px] md:text-lg">
                        <Typed
                          strings={["an IDEA", "NIGERIANS", "a NIGERIA"]}
                          typeSpeed={200}
                          backSpeed={100}
                          loop
                        />
                      </span>{" "}
                      whose time has come!
                    </h1>
                    <div className="font--medium color--text-green1-base line-height--16 text--center--tablet width--65--desktop-wide width-65--desktop width--100--tablet margin--center font-weight--small font--medium--mobile margin-bottom--2xlarge">
                      <p>
                        <strong>ANNT</strong> is an experimental deflationary
                        token to explore the unlimited potential of blockchain
                        technology, and decentralisation in a{" "}
                        <strong>functional</strong> Nigeria.
                      </p>
                    </div>
                    <div>
                      <p id="text-to-copy" className="contadd">
                        0xf951ead486490bD64193fD2ea475697a9Fd5d582
                      </p>
                      <div className="text-center padding-horizontal--1xlarge--mobile display--inline-block margin-left--zero margin-left--large--tablet margin-top--zero--tablet margin-top--medium--mobile">
                        <button
                          type="button"
                          className="buy-pancake flex copy-btn margin-left--zero button--small1 button--white--outline link--underline--none button--pill"
                          onClick={() =>
                            navigator.clipboard.writeText(
                              "0xf951ead486490bD64193fD2ea475697a9Fd5d582"
                            )
                          }
                        >
                          <Image
                            src="img/ico-copy.svg"
                            width="16"
                            height="16"
                            alt=""
                          />
                          <span className="">Copy to Clipboard</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper--inner margin--center margin-top--small--mobile">
            <div className="position--relative z-index--10 margin--center text--center margin-bottom--1xlarge">
              <div className="margin-bottom--1xlarge--tablet color--about-bg">
                <p
                  className="color--text-white-base margin-top--large"
                  style={{
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  Want to learn more about ANNT?{" "}
                  <a
                    href="annt_whitepaper.pdf"
                    target="_blank"
                    className="link--underline color--text-white-base font-weight--bold"
                  >
                    <strong>Read Whitepaper</strong>
                  </a>
                </p>
              </div>
            </div>

            <div className="position--relative z-index--10 margin--center text--center margin-bottom--1xlarge">
              <div className="margin-bottom--1xlarge--tablet color--motive-bg">
                <p
                  className="color--text-black-base"
                  style={{
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  Liquidity Pool locked for
                  <strong> 8 years</strong>. Don&apos;t believe us?{" "}
                  <a
                    href="https://www.team.finance/view-coin/0xf951ead486490bD64193fD2ea475697a9Fd5d582?name=A%20New%20Nigeria%20Token&symbol=ANNT"
                    target="_blank"
                    className="link--underline color--text-black-base font-weight--bold"
                  >
                    <strong>Click me</strong>
                  </a>
                </p>
              </div>
            </div>

            <div className="position--relative z-index--10 margin--center text--center margin-bottom--2xlarge">
              <div className="margin-bottom--1xlarge--tablet color--about-bg">
                <p
                  className="color--text-white-base"
                  style={{
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  Doxxed? Yes please! We believe in transparency. To see the
                  founder and sole dev&apos;s (for now) info,{" "}
                  <a
                    href="https://www.linkedin.com/in/samuelobior/"
                    target="_blank"
                    className="link--underline color--text-white-base font-weight--bold"
                  >
                    <strong>Click here</strong>
                  </a>
                </p>
              </div>
            </div>

            <div
              className="padding-bottom--large margin-bottom--zero--tablet padding-bottom--zero--tablet"
              style={{ marginTop: 64 }}
            >
              <div
                id="about"
                className="width--100--desktop-wide width--100--desktop-wide text--center position--relative z-index--10 margin-bottom--zero--tablet"
                style={{ marginBottom: 24 }}
              >
                <h2
                  className="font-weight--bold font--3xlarge color--text-white-bright position--relative z-index--10"
                  style={{ marginTop: 0, paddingTop: 24 }}
                >
                  About
                </h2>
              </div>
              <div
                className="text--center--tablet text--center--mobile line-height--16 color--about-bg padding--5xlarge box--rounded--2xlarge margin-bottom--1xlarge--tablet margin--center text--center position--relative z-index--10"
                style={{
                  paddingTop: 32,
                  paddingBottom: 32,
                  paddingLeft: 24,
                  paddingRight: 24,
                }}
              >
                <div
                  className=" color--text-white-base display--inline-block--tablet display--inline-block--mobile display--inline-block margin-top--large position--relative z-index--10 text--left"
                  style={{ marginTop: 0 }}
                >
                  <p>
                    Welcome to <strong>ANNT - A New Nigeria Token</strong>, a
                    Nigerian themed crypto project!
                    <br />
                    Our project is inspired by the{" "}
                    <strong>coconut head generation</strong> and the current
                    wave of the
                    <br />
                    inevitable revolution in the country, as the upcoming
                    election promises a youth-motivated, fresh
                    <br />
                    government. One that will break away from the old order and
                    pave the way for a new era of growth and
                    <br />
                    prosperity.
                    <br />
                    Our project is an experimental deflationary token on the
                    Binance Smart Chain, designed to promote
                    <br />
                    financial inclusion and decentralisation in Nigeria. With a
                    total supply of <strong>63 million ANNT</strong> and a
                    <br />
                    minimum total supply of <strong>23 million</strong>, our
                    token symbolises the hope and potential of
                    <br />
                    Nigeria as it celebrates its 63rd year of independence, in a
                    revolutionary year in the history of our
                    <br />
                    dear country.
                    <br />
                    At the core of our project is a belief in the power of
                    blockchain technology to democratise finance and
                    <br />
                    create a more equitable and transparent economy. We believe
                    that by harnessing the power of
                    <br />
                    decentralisation, we can build a future where everyone has
                    access to the same opportunities, regardless
                    <br />
                    of their background or social status.
                    <br />
                    As the journey progresses, our team will consist of diverse
                    group of individuals from different
                    <br />
                    backgrounds, united by a shared passion for blockchain
                    technology and a desire to make a positive impact
                    <br /> in Nigeria.
                    <br />
                    We are committed to building a community around our project
                    and welcome all those who share our vision
                    <br />
                    to join us on this journey.
                    <br />
                    If you have any questions or would like to learn more about
                    our project, please do not hesitate to
                    <br />
                    reach out to us. We look forward to working with you to
                    build a brighter future for Nigeria.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="padding-bottom--large margin-bottom--zero--tablet padding-bottom--zero--tablet"
              style={{ marginTop: 64 }}
            >
              <div
                id="motive"
                className="width--100--desktop-wide width--100--desktop-wide text--center position--relative z-index--10 mb-6"
                style={{ marginTop: 24 }}
              >
                <h2
                  className="font-weight--bold font--3xlarge color--text-white-light position--relative z-index--10"
                  style={{ marginTop: 32, paddingTop: 64 }}
                >
                  Motive
                </h2>
              </div>

              <div
                className="text--center--tablet text--center--mobile line-height--16 color--motive-bg padding--5xlarge box--rounded--2xlarge margin-bottom--1xlarge--tablet margin--center text--center position--relative z-index--10"
                style={{
                  paddingTop: 32,
                  paddingBottom: 32,
                  paddingLeft: 24,
                  paddingRight: 24,
                }}
              >
                <div
                  className="color--text-black-base display--inline-block--tablet display--inline-block--mobile display--inline-block color--text-white-base margin-top--large position--relative z-index--10 text--left"
                  style={{ marginTop: 0 }}
                >
                  <p>
                    Our project, ANNT (A New Nigeria Token) is driven by a clear
                    and ambitious motive - to empower the
                    <br />
                    citizens of Nigeria by providing them with access to a
                    decentralised and transparent economy through the
                    <br />
                    use of blockchain technology.
                    <br />
                    We believe that the current financial system in Nigeria is
                    in dire need of disruption, as it is riddled
                    <br />
                    with inefficiencies, lack of transparency, corruption with
                    impunity and exclusion of large segments of
                    <br />
                    the population.
                    <br />
                    Our goal is to provide a viable alternative that addresses
                    these issues and enables greater financial
                    <br />
                    inclusion for all Nigerians.
                    <br />
                    To that effect, we have chosen Binance Smart Chain, a
                    high-performance blockchain network that allows
                    <br />
                    for fast and low-cost transactions, which is key to the
                    future goals of this project
                    <br />
                    With ANNT, we aim to promote the use of cryptocurrency in
                    Nigeria and encourage the adoption of
                    <br />
                    blockchain technology for various use cases. Imaagine
                    tracking our typical road construction contracts
                    <br />
                    on the blockchain.
                    <br />
                    Our project is not just about creating a new token, it is
                    about creating a new future for Nigeria. We
                    <br />
                    believe that with ANNT, we can help to build a more
                    equitable, transparent, and decentralised economy
                    <br />
                    that benefits every Nigerian.
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div
              className="padding-bottom--large margin-bottom--zero--tablet bg--slant--investors padding-bottom--zero--tablet"
              style={{ marginTop: 64 }}
            >
              <div
                id="vision"
                className="width--100--desktop-wide width--100--desktop-wide text--center position--relative z-index--10 margin-bottom--3xlarge margin-bottom--zero--tablet"
                style={{ marginBottom: 24 }}
              >
                <h2
                  className="font-weight--bold font--3xlarge color--text-white-bright position--relative z-index--10"
                  style={{ marginTop: 32, paddingTop: 64 }}
                >
                  Vision
                </h2>
              </div>

              <div
                className="text--center--tablet text--center--mobile line-height--16 color--about-bg padding--5xlarge box--rounded--2xlarge margin-bottom--1xlarge--tablet margin--center text--center position--relative z-index--10"
                style={{
                  paddingTop: 32,
                  paddingBottom: 32,
                  paddingLeft: 24,
                  paddingRight: 24,
                }}
              >
                <div
                  className=" color--text-white-base display--inline-block--tablet display--inline-block--mobile display--inline-block margin-top--large position--relative z-index--10 text--left"
                  style={{ marginTop: 0 }}
                >
                  <p>
                    At ANNT, our vision is to create a new, decentralised
                    economy in Nigeria that is inclusive, transparent,
                    <br />
                    and empowering for all citizens, especially those that have
                    been at the receiving end of the ineptitudes
                    <br />
                    of successive government, since independence.
                    <br />
                    We envision a future where citizens of Nigeria have access
                    to a decentralised and transparent economy
                    <br />
                    through the use of blockchain technology. ANNT will be at
                    the forefront of this change, providing a<br />
                    secure, fast, and low-cost means of storing and transferring
                    value.
                    <br />
                    We also see ANNT as a catalyst for economic growth and
                    development in Nigeria, by facilitating the
                    <br />
                    creation of new businesses and industries built on
                    blockchain technology. We believe that the adoption
                    <br />
                    of ANNT and blockchain technology will lead to the creation
                    of new job opportunities and the growth of
                    <br />
                    the Nigerian economy.
                    <br />
                    In addition, we see ANNT as a powerful tool for promoting
                    social and economic justice in Nigeria. By
                    <br />
                    providing citizens with a new means of storing and
                    transferring value, we believe that ANNT can help to
                    <br />
                    reduce poverty and inequality and promote greater financial
                    inclusion for all.
                    <br />
                    Overall, our vision for ANNT is to empower the citizens of
                    Nigeria to take control of their financial
                    <br />
                    future and build a more prosperous life for themselves and a
                    future for their unborn generation.
                    <br />
                    Ultimately, to end the vicious circle of poverty, one family
                    at a time. We are committed to making this
                    <br />
                    vision a reality, and we look forward to working with you to
                    achieve it.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="tokenomics"
              className="width--100--desktop-wide width--100--desktop-wide text--center position--relative z-index--10 margin-bottom--3xlarge margin-bottom--zero--tablet"
              style={{ marginBottom: 24 }}
            >
              <h2
                className="font-weight--bold font--3xlarge color--text-white-bright position--relative z-index--10"
                style={{ marginTop: 32, paddingTop: 64 }}
              >
                Tokenomics
              </h2>
            </div>
            <div className="display--flex flex--wrap justify--space-between text--center width--80--desktop-wide width--90--desktop width--100--tablet margin--center padding-vertical--large flex-direction--column--tablet">
              <div className="width--20--desktop-wide width--20--desktop width--100--tablet margin-bottom--2xlarge--tablet">
                <h3 className="margin-bottom--small font-weight--bold color--text-greentoks ">
                  Total Supply
                </h3>
                <h2 className="font--7xlarge font-weight--heavy color--text-white-bright font--6xlarge--tablet">
                  63m
                </h2>
              </div>
              <div className="width--20--desktop-wide width--20--desktop width--100--tablet margin-bottom--2xlarge--tablet">
                <h3 className="margin-bottom--small font-weight--bold color--text-greentoks ">
                  Min Total Supply
                </h3>
                <h2 className="font--7xlarge font-weight--heavy color--text-white-bright font--6xlarge--tablet">
                  23m
                </h2>
              </div>
              <div className="width--20--desktop-wide width--20--desktop width--100--tablet margin-bottom--2xlarge--tablet">
                <h3 className="margin-bottom--small font-weight--bold color--text-greentoks">
                  Max Transaction
                </h3>
                <h2 className="font--7xlarge font-weight--heavy color--text-white-bright font--6xlarge--tablet">
                  50k
                </h2>
              </div>
              <div className="width--20--desktop-wide width--20--desktop width--100--tablet">
                <h3 className="margin-bottom--small font-weight--bold color--text-greentoks ">
                  Total Fees
                </h3>
                <h2 className="font--7xlarge font-weight--heavy color--text-white-bright font--6xlarge--tablet">
                  4%
                </h2>
              </div>
            </div>
            <div className="display--flex flex--wrap justify--space-between text--center width--80--desktop-wide width--90--desktop width--100--tablet margin--center padding-vertical--large flex-direction--column--tablet">
              <div className="width--20--desktop-wide width--20--desktop width--100--tablet margin-bottom--2xlarge--tablet">
                <h3 className="margin-bottom--small font-weight--bold color--text-greentoks ">
                  Liquidity Fee
                </h3>
                <h2 className="font--7xlarge font-weight--heavy color--text-white-bright font--6xlarge--tablet">
                  1%
                </h2>
              </div>
              <div className="width--20--desktop-wide width--20--desktop width--100--tablet margin-bottom--2xlarge--tablet">
                <h3 className="margin-bottom--small font-weight--bold color--text-greentoks ">
                  Auto-Burn Fee
                </h3>
                <h2 className="font--7xlarge font-weight--heavy color--text-white-bright font--6xlarge--tablet">
                  1%
                </h2>
              </div>
              <div className="width--20--desktop-wide width--20--desktop width--100--tablet margin-bottom--2xlarge--tablet">
                <h3 className="margin-bottom--small font-weight--bold color--text-greentoks ">
                  Development
                </h3>
                <h2 className="font--7xlarge font-weight--heavy color--text-white-bright font--6xlarge--tablet">
                  1%{" "}
                </h2>
              </div>
              <div className="width--20--desktop-wide width--20--desktop width--100--tablet margin-bottom--2xlarge--tablet">
                <h3 className="margin-bottom--small font-weight--bold color--text-greentoks ">
                  Charity
                </h3>
                <h2 className="font--7xlarge font-weight--heavy color--text-white-bright font--6xlarge--tablet">
                  1%{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div id="community" className="bg--slant--news">
          <div className="wrapper--inner margin--center position--relative z-index--10">
            <div className="padding--5xlarge padding-horizontal--zero">
              <div
                id="tokenomics"
                className="width--100--desktop-wide width--100--desktop-wide text--center position--relative z-index--10 margin-bottom--3xlarge margin-bottom--zero--tablet"
                style={{ marginBottom: 24 }}
              >
                <h2
                  className="font-weight--bold font--3xlarge position--relative z-index--10"
                  style={{ marginTop: 16, paddingTop: 32, color: "#23533e" }}
                >
                  Community
                </h2>
              </div>

              <div
                className="text--center--tablet line-height--16 padding--5xlarge box--rounded--2xlarge margin-bottom--1xlarge--tablet margin--center text--center position--relative z-index--10"
                style={{
                  paddingTop: 16,
                  paddingBottom: 16,
                  paddingLeft: 24,
                  paddingRight: 24,
                }}
              >
                <div className="text--left color--text-black-base display--inline-block--tablet display--inline-block--mobile display--inline-block">
                  <p>
                    At ANNT, we believe that a community-driven approach is
                    essential for the success and long-term growth
                    <br />
                    of our project. We are committed to building a strong and
                    active community around ANNT and welcome all
                    <br />
                    individuals, regardless of their background or experience,
                    to get involved and share their ideas and
                    <br />
                    suggestions with us. At intervals, we will also be running
                    crypto education in tandem.
                    <br />
                    We understand that the success of our project is dependent
                    on the engagement and support of our
                    <br />
                    community. That is why we are dedicated to fostering an
                    open, transparent and inclusive environment where
                    <br />
                    all members can participate and contribute to the growth and
                    development of the ANNT ecosystem.
                    <br />
                    One of the ways we plan to involve the community is by using
                    a portion of our charity fee to support those in
                    <br />
                    need, especially community members. We believe that by
                    giving back to the community, we can create a
                    <br />
                    positive impact and promote social and economic justice.
                    <br />
                    As the project grows, we are committed to finding new use
                    cases for ANNT that will drive its value and
                    <br />
                    utility.
                    <br />
                    On attaining the minimum total supply, we will work closely
                    with the community to identify new
                    <br />
                    opportunities and develop innovative solutions that will
                    benefit all members of the ecosystem and
                    <br />
                    effectively, the value of ANNT.
                    <br />
                    We believe that by working together, we can truly create a
                    decentralized economy that is inclusive,
                    <br />
                    transparent, and empowering for all citizens of Nigeria. We
                    are excited to embark on this journey and
                    <br />
                    look forward to building a strong and vibrant community
                    around ANNT.
                    <br />
                    Please do not hesitate to reach out to us with any questions
                    or ideas you may have. We welcome all
                    <br />
                    members of the community to get involved and contribute to
                    the growth and success of the ANNT project.
                    <br />
                    Also, if you would like to be on the team in due time, do
                    not hesitate to email us your CV (Must be Nigerian).
                    <br /> Recruitment announcement will be on our website when
                    due. Thank you.
                  </p>
                </div>

                <div className="z-index--100 position--relative text--center">
                  <h1 className="margin-bottom--large font--2xlarge--tablet font--xsmall--mobile font--display text--center--tablet margin-bottom--1xlarge color--text-comu-base margin-top--5xlarge">
                    This is a community different from{" "}
                    <span className="auto-type1">
                      <Typed
                        strings={["BALA BLU", "BLU BLU", "BULA BA"]}
                        typeSpeed={200}
                        backSpeed={100}
                        loop
                      />
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center margin-top--1xlarge padding-top--4xlarge padding-top--zero--tablet">
          <div className="wrapper--inner margin--center">
            <div className="width--80--desktop-wide width--80--desktop width-100--tablet margin--center mt-16 md:mt-0">
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
                  <a
                    href="https://www.instagram.com/anntoken23/"
                    target="_blank"
                  >
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
      </div>
      <Head>
        <title>ANNT | A New Nigeria Token</title>
      </Head>
    </div>
  );
};

export default Home;
