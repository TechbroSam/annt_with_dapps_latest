import React, { useState } from "react";

interface NavbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<NavbarProps> = ({ open, setOpen }) => {
  return (
    <div
      className={`pb-4 pl-2 absolute z-50 top-0 left-0 h-fit w-full drop-shadow-md md:hidden bg-nav 
      transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md h-20">
        {" "}
        {/*logo container*/}
        <img className="w-28" src="img/annt_logonew.svg" alt="" />
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4 ulnav"
          href="#about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4 ulnav"
          href="#motive"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Motive
        </a>
        <a
          className="text-xl font-normal my-4 ulnav"
          href="#vision"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Vision
        </a>
        <a
          className="text-xl font-normal my-4 ulnav"
          href="#tokenomics"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Tokenomics
        </a>
        <a
          className="text-xl font-normal my-4 ulnav"
          href="#community"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Community
        </a>
        <a
          className="text-xl font-bold my-4 ulnav"
          href="/anntapps"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          AnntAPPS
        </a>
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0xf951ead486490bD64193fD2ea475697a9Fd5d582"
          target="_blank"
          className="my-4"
        >
          <button
            className="flex justify-center w-[33%] items-center border border-white
            rounded-3xl relative p-2 px-3 text-center whitespace-nowrap hover:bg-emerald-700"
          >
            <span className="text-white font-bold">Buy&nbsp;Now</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="flex drop-shadow-md h-20 items-center py-1 justify-between
    px-5 md:py-11 md:px-[5%] top-0 cursor-pointer sticky z-50 bg-nav md:bg-nav bg-opacity-30 w-full"
    >
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center w-full">
        <img className="md:w-32 w-28" src="img/annt_logonew.svg" alt="" />
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          {!open && (
            <span
              className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out`}
            />
          )}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex w-full space-x-2">
          <div className="flex justify-between items-center">
            <a href="#about">
              <ul className="ulnav mx-4 md:text-xs lg:text-base">About</ul>
            </a>
            <a href="#motive">
              <ul className="ulnav mx-4 md:text-xs lg:text-base">Motive</ul>
            </a>
            <a href="#vision">
              <ul className="ulnav mx-4 md:text-xs lg:text-base">Vision</ul>
            </a>
            <a href="#tokenomics">
              <ul className="ulnav mx-4 md:text-xs lg:text-base">Tokenomics</ul>
            </a>
            <a href="#community">
              <ul className="ulnav mx-4 md:text-xs lg:text-base">Community</ul>
            </a>
            <a href="/anntapps" target="_blank">
              <ul className="ulnav mx-4 md:text-xs lg:text-base font-bold">
                AnntAPPS
              </ul>
            </a>
          </div>
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0xf951ead486490bD64193fD2ea475697a9Fd5d582"
            target="_blank"
          >
            <button
              className="flex justify-center w-full items-center border border-white
            rounded-3xl p-2 px-3 relative text-center whitespace-nowrap hover:bg-emerald-700"
            >
              <span className="text-white font-bold">Buy&nbsp;Now</span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
