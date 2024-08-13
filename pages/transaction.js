import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import { useRouter } from "next/router";

//INTERNALIMPORT
import StyleTransaction from "../styles/block.module.css";
import { ETHERSCAN } from "../Context/Ether";

const transaction = () => {
  const { provider } = useContext(ETHERSCAN);
  const router = useRouter();

  const { query } = router;
  const hash = Object.keys(query)[0];

  const transDetails = [];
  const [transactionData, setTransactionData] = useState(transDetails);

  //FORMAT VALUE
  const [ethGasLimit, setEthGasLimit] = useState("");
  const [ethDifficulty, setEthDifficulty] = useState("");
  const [VALUE, setVALUE] = useState("");

  const getDataOfTransaction = async () => {
    try {
      const transactionDetails = await provider.getTransaction(hash);
      setTransactionData(transactionDetails);

      console.log("transactionDetails", transactionDetails);
    } catch (error) {
      console.log("Something is wrong from the transaction page");
    }
  };

  useState(() => {
    getDataOfTransaction();
  }, []);

  return <div>transaction</div>;
};

export default transaction;
