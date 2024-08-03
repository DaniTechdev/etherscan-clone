// import React, { useState, useEffect, useContext } from "react";
// import Image from "next/image";
// import axios from "axios";
// import Link from "next/link";

// //INTERNAL IMPORT

// import Style from "../styles/Navbar.module.css";
// import etherLogo from "../public/eth.png";
// import logo from "../public/logo.png";
// import logoTop from "../public/footerLogo.png";

// const NavBar = () => {
//   return <div className={Style.na}></div>;
// };

// export default NavBar;

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

// INTERNAL IMPORT

import Style from "../styles/Navbar.module.css";
import etherLogo from "../public/eth.png";
import logo from "../public/logo.png";
import logoTop from "../public/footerLogo.png";

const NavBar = () => {
  const [userAccount, setUserAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [count, setCount] = useState("");
  const [openModel, setOpenModel] = useState(true);
  const [price, setPrice] = useState([]);
  const [etherSupply, setEtherSupply] = useState([]);

  const [updatedPrice, setUpdatedPrice] = useState("");

  //GET ETHER PRICE UPDATE
  const getEtherPrice = () => {
    try {
      const API_ETHER_KEY = "77TBH8R48THPJSKYQAXXWE8B1QJPEXI51P";

      axios
        .get(
          `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_ETHER_KEY}`
        )
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEtherPrice();
  }, []);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.left}>
          <Link href="/">
            <div>
              <h1 className={Style.desktop}>Ether Finance</h1>
              <h1 className={Style.mobile}>
                <Image src={logoTop} alt="logo" width={50} height={50} />
              </h1>
            </div>
          </Link>
        </div>

        {/* ////RIGHT SIDE OF HEADER */}
        <div className={Style.right}>Heyyy</div>
      </div>
    </div>
  );
};

export default NavBar;
