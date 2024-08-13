import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ethers } from "ethers";

//INTERNAL IMPORT

import Style from "../styles/table.module.css";
import { Etherscan } from "../Context/Ether";
import { FaFilter, FaUserAltSlash } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import StyleTransaction from "../styles/block.module.css";

const block = () => {
  const { provider } = useContext(Etherscan);
  const router = useRouter();
  const { query } = router;

  //since the block number will come in form of string from the query, we have to convert
  //it to number in order to use the number and make the api call
  const blockNumber = Number(Object.keys(query)[0]);

  //BLOCK DATA
  const dataBlock = [];
  const [blockData, setBlockData] = useState([]);
  const [transact, setTransact] = useState([]);

  //FORMAT VALUE
  const [ethGasLimit, setEthGasLimit] = useState("");
  const [ethDifficulty, setEthDifficulty] = useState("");
  const [ethGasUsed, setethGasUsed] = useState("");

  //ACTIVE STATE
  const [blockNo, setBlockNo] = useState(true);
  const [transactionTab, setTransactionTab] = useState(false);

  const openTab = () => {
    if (blockNo) {
      setBlockNo(false);
      setTransactionTab(true);
    } else if (transactionTab) {
      setBlockNo(true);
    }
  };

  const getBlockDetails = async () => {
    try {
      const getBlock = await provider.getBlock(blockNumber);
      dataBlock.push(getBlock);
      setBlockData(getBlock);

      const gasLimit = ethers.utils.formatEther(getBlock.gasLimit);

      setEthGasLimit(gasLimit);

      const gasUsed = ethers.utils.formatEther(getBlock.gasUsed);
      setethGasUsed(gasUsed);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  return <div>block</div>;
};

export default block;
