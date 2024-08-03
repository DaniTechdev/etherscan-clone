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

  const [updatedPriceDate, setUpdatedPriceDate] = useState("");

  //GET ETHER PRICE UPDATE
  const getEtherPrice = () => {
    try {
      const API_ETHER_KEY = "77TBH8R48THPJSKYQAXXWE8B1QJPEXI51P";

      axios
        .get(
          `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_ETHER_KEY}`
        )
        .then((response) => {
          setPrice(response.data.result);
          console.log(response);

          console.log(response.data.result);

          //convert the timestamp into readable format since its in string form
          const timestamp = Number(response.data.result.ethusd_timestamp);
          console.log(timestamp);

          const date = new Date(timestamp);

          setUpdatedPriceDate(
            "UpDate:" +
              date.getHours() +
              ":" +
              date.getMinutes() +
              ":" +
              date.getSeconds()
          );
        });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("price", price);

  // console.log(price.ethusd);
  // console.log(updatedPriceDate);
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
