import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ethers } from "ethers";

//INTERNAL IMPORT

import { ETHERSCAN } from "../Context/Ether";
import Style from "../styles/account.module.css";
import etherLogo from "../public/eth.png";
import loader from "../public/loding.gif";
import Table from "../components/Table";

const account = () => {
  const { provider } = useContext(ETHERSCAN);

  //USESTATE SSECTION
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [totalTransaction, setTotalTransaction] = useState("");
  const [name, setname] = useState("");
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  //API USESTATE
  const [accountHistory, setAccountHistory] = useState([]);
  const [internalByAddress, setInternalByAddress] = useState("");
  const [ERC20, setERC20] = useState([]);
  const [ERC21, setERC21] = useState([]);
  const [ERC115, setERC115] = useState([]);
  const [blockMindedByAddress, setBlockMindedByAddress] = useState([]);
  const [blockRangeTransaction, setBlockRangeTransaction] = useState([]);

  const router = useRouter();
  const { query } = router;
  // console.log(query, "query");

  // const acc = query.add;
  // console.log("acc", acc);

  //get get the first element/key from the object, we will use Object.keys(query[0])
  const acc = Object.keys(query)[0];
  // console.log("acc", acc);
  // console.log("blockRangeTransaction", blockRangeTransaction);
  // console.log("blockMindedByAddress", blockMindedByAddress);

  const accountData = async () => {
    setAccount(acc);

    try {
      setAccount(acc);

      if (open) {
        setOpen(false);
        setLoading(true);
      }

      //ACCOUNT NAME

      // const ESN = await provider.lookupAddrss(acc);
      // if (ESN === null) {
      //   setname(ESN);
      //   setLoading(false);
      // } else {
      //   setname(ESN);
      //   setLoading(false);
      // }

      //GET ACCOUNT BALANCE
      const accountBalance = await provider.getBalance(acc);
      const showBalance = ethers.utils.formatUnits(accountBalance);
      setBalance(showBalance);
      //API ETHERSCAN

      const API_KEY = "IAD2FPVYSNGQJRBXXGMIBEY76TEEU5MMY8";

      // ADDRESS TRANSACTION HSITORY
      await axios
        .get(
          `https://api.etherscan.io/api?module=account&action=txlist&address=${acc}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`
        )
        .then((response) => {
          // console.log("result by addresss click", response.data.result);

          setAccountHistory(response.data.result);
        });

      //TRANSACTION HISOTRY BY INTERNAL HASH
      await fetch(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${acc}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`
        // `https://api.etherscan.io/api?module=account&action=txlistinternal&address=${acc}&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=${API_KEY}`
        // `https://api.etherscan.io/api?module=account&action=txlistinternal&txhash=${acc}&apikey=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          const innerData = data.result;
          setInternalByAddress(innerData);
          // console.log("TRANSACTION HISOTRY BY INTERNAL HASH", innerData);
        });

      //ETHERSCAN API ERC20 TOKEN
      axios
        .get(
          `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=${acc}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${API_KEY}`
        )
        .then((response) => {
          const tokenERC20 = response.data.result;
          setERC20(tokenERC20);
          console.log("tokenERC20 history", tokenERC20);
        });

      //ETHERSCAN API MINDED BLOCK BY ADDRESS
      axios
        .get(
          `https://api.etherscan.io/api?module=account&action=getminedblocks&address=${acc}&blocktype=blocks&page=1&offset=10&apikey=${API_KEY}`
        )
        .then((response) => {
          const blockMinedByAddrr = response.data.result;
          setBlockMindedByAddress(blockMinedByAddrr);
          console.log("blockMineByAddrr", blockMinedByAddrr);
        });
      // get(
      //   `https://api.etherscan.io/api?module=account&action=getminedblocks&address=${acc}&blocktype=blocks&page=1&offset=10&apikey=${API_KEY}`
      // );

      //

      //ETHERSCAN API BLOCK RANGE
      axios
        .get(
          `https://api.etherscan.io/api?module=account&action=txlistinternal&startblock=13481773&endblock=13491773&page=1&offset=10&sort=asc&apikey=${API_KEY}`
        )
        .then((response) => {
          const transactionByBlockRange = response.data.result;
          setBlockRangeTransaction(transactionByBlockRange);
          console.log("transsactionByBlockRange", transactionByBlockRange);
        });

      //ETHERSSCAN API ERC21 TOKEN
      // axios
      //   .get(
      //     `https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=0x06012c8cf97bead5deae237070f9587f8e7a266d&address=${acc}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${API_KEY}`
      //   )
      //   .then((response) => {
      //     const tokenERC21 = response.data.result;
      //     setERC21(tokenERC21);
      //     console.log("tokenER21", tokenERC21);
      //   });

      //ETHERSSCAN API ERC1155 TOKEN

      // axios
      //   .get(
      //     `https://api.etherscan.io/api?module=account&action=token1155tx&contractaddress=0x76be3b62873462d2142405439777e971754e8e77&address=${acc}&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`
      //   )
      //   .then((response) => {
      //     const tokenERC1155 = response.data.result;
      //     setERC115(tokenERC1155);
      //     console.log("tokenERC1155", tokenERC1155);
      //   });

      setLoading(false);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  // useEffect(() => {
  //   accountData();
  // }, []);
  return (
    <div className={Style.accountDIV}>
      {open ? (
        <div className={Style.btnContainer}>
          <h1>Welcome To Ether Finance</h1>
          <button className={Style.openBtn} onClick={() => accountData()}>
            Click Me
          </button>
        </div>
      ) : (
        <div>
          {loading ? (
            <div className={Style.loading}>
              <Image src={loader} alt="loading" width={100} height={100} />
            </div>
          ) : (
            ""
          )}

          {!loading ? (
            <div className={Style.container}>
              <div className={Style.box}>
                <div className={Style.account}>
                  <Image src={etherLogo} alt="logo" width={20} height={30} />
                  <p>
                    Addrss: <span>{acc}</span>
                  </p>
                </div>
                <div className={Style.owner}>
                  <p onClick={() => accountData()}>Owner</p>
                  {name || "Hello Brother"}
                </div>
              </div>

              <div className={Style.overviewBox}>
                <div className={Style.overview}>
                  <div className={Style.overviewTitle}>
                    <p>Overview</p>
                    <p className={Style.miner}>
                      {name || "miner"}: &nbssp; {account?.slice(0, 10)}...
                    </p>
                  </div>

                  <div className={Style.accountBalance}>
                    <p className={Style.color}>Balance</p>
                    <p>{balance} ETH</p>
                  </div>

                  <div className={Style.accountValue}>
                    <p className={Style.color}>Balance</p>
                    <p>$ {balance * 2435}</p>
                  </div>
                </div>

                <div className={Style.branding}>
                  <h2>
                    Welcome <br />
                    Ether Finance Tracker
                  </h2>

                  <p>
                    Hey, welcome to ether Finance tracker, find out your
                    ethereum {name || account?.slice(0, 10)} &nbssp; financial
                    status
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {!loading ? (
            <Table
              accountHistory={accountHistory}
              totalTransaction={totalTransaction}
              internalByAddress={internalByAddress}
              ERC20={ERC20}
              ERC21={ERC21}
              ERC115={ERC115}
              accountDatac={accountData}
              blockMindedByAddress={blockMindedByAddress}
              blockRangeTransaction={blockRangeTransaction}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default account;
