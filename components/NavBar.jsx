import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import { TbChartArrowsVertical } from "react-icons/tb";
import user from "../public/avatar.png";

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

  const openUserInfo = () => {
    if (openModel) {
      setOpenModel(false);
    } else if (!openModel) {
      setOpenModel(true);
    }
  };

  const [updatedPriceDate, setUpdatedPriceDate] = useState("");
  // console.log("userAccount", userAccount);

  //GET ETHER PRICE UPDATE
  const getEtherPrice = () => {
    try {
      const API_ETHER_KEY = "77TBH8R48THPJSKYQAXXWE8B1QJPEXI51P";

      //api request for Ether updatd price
      axios
        .get(
          `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_ETHER_KEY}`
        )
        .then((response) => {
          setPrice(response.data.result);
          // console.log(response);

          // console.log(response.data.result);

          //convert the timestamp into readable format since its in string form
          const timestamp = Number(response.data.result.ethusd_timestamp);
          // console.log(timestamp);

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

      //api request for ether supply

      axios
        .get(
          `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${API_ETHER_KEY}`
        )
        .then((response) => {
          // console.log(response.data.result);
          setEtherSupply(response.data.result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("price", price);

  // console.log(price.ethusd);
  // console.log(updatedPriceDate);
  // checkIfAccountExist();
  const checkIfAccountExist = async () => {
    //when one installs matamask, metamast inject the object window.ethereum in the browser to show it has been installed
    try {
      if (!window.ethereum) return console.log("Install MetaMast");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // console.log(accounts, "accounts");

      if (accounts.length) {
        setUserAccount(accounts[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //connectWallet
  const connectWallet = async () => {
    //when one installs matamask, metamast inject the object window.ethereum in the browser to show it has been installed
    try {
      if (!window.ethereum) return console.log("Install MetaMast");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts, "accounts");

      if (accounts.length) {
        setUserAccount(accounts[0]);
      } else {
        console.log("Sorry you do not have account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfAccountExist();
    getEtherPrice();
  }, []);

  return (
    <div>
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
          <div className={Style.right}>
            {userAccount.length ? (
              <div className={Style.connected}>
                <button onClick={() => openUserInfo()}>
                  Acc:{userAccount.slice(0, 10)}
                </button>
                {openModel ? (
                  <div className={Style.userModal}>
                    <div className={Style.user_box}>
                      <div className={Style.closeBtn}>
                        <MdOutlineClose onClick={() => openUserInfo()} />
                      </div>
                      <Image src={user} alt="user" width={50} height={50} />
                      <p>Acc: &nbsp; {userAccount.slice(0, 10)}... </p>
                      <p>Balance: &nbsp; {balance} ETH </p>
                      <p>Total Transact: &nbsp; count ETH </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <button onClick={() => connectWallet()}>Connect Wallet</button>
            )}
          </div>
        </div>
      </div>

      <div className={Style.price}>
        <div className={Style.price_box}>
          <div className={Style.etherPrice}>
            <div>
              <Image src={etherLogo} alt="ether logo" width={30} height={30} />
            </div>
            <div>
              <h4> ETHER PRICE</h4>
              <p>$ 2344444</p>
              <p>BTC 60400</p>
              <p>UPDATED PRICE</p>
            </div>
          </div>

          <div className={Style.supplyEther}>
            <div>
              <TbChartArrowsVertical className={Style.supplyIcon} />
            </div>

            <div>
              <h4>TOTAL ETHER SUPPLY</h4>
              <p>$ 2344444</p>
              <p>BTC 60400</p>
              <p>UPDATED PRICE</p>
            </div>
          </div>
        </div>

        <div className={Style.price_box}>
          <div className={Style.tokenBox_logo}>
            <Image src={logo} alt="logo" width={200} height={200} />
          </div>

          <div className={Style.logoWidth}>
            <p>ERC20 </p>
            <p>ERC21 </p>
            <p>ERC1155 </p>
            <p>CONTRACT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
