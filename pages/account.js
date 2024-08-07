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

  const router = useRouter();
  const { query } = router;
  //get get the first element/key from the object, we will use Object.keys(query[0])
  const acc = Object.keys(query[0]);

  //USESTATE SSECTION
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [totalTransaction, setTotalTransaction] = useState("");
  const [name, setname] = useState("");
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  //API USESTATE
  const [accountHistory, setAccountHistory] = useState([]);
  const [internalByAddress, setInternalByAddress] = useState("");
  const [ERC20, setERC20] = useState([]);
  const [ERC21, setERC21] = useState([]);
  const [ERC115, setERC115] = useState([]);
  const [blockMindedByAddress, setBlockMindedByAddress] = useState([]);
  const [blockRangeTransaction, setBlockRangeTransaction] = useState([]);

  return <div>account</div>;
};

export default account;
