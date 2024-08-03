import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

//INTERNAL IMPORT

import Style from "../styles/Navbar.module.css";
import etherLogo from "../public/eth.png";
import logo from "../public/logo.png";
import logoTop from "../public/footerLogo.png";

const NavBar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.left}>
          <Link href="/">
            <div>
              <h1 className={Style.desktop}>Ether Finance</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
