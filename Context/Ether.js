import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const apiKey = "34c891b9e72a4a9c8bb249804b23ab13";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${apiKey}`,
  "mainnet"
);

// https://mainnet.infura.io/v3/34c891b9e72a4a9c8bb249804b23ab13

export const ETHERSCAN = React.createContext();

export const EtherProvider = ({ children }) => {
  const data = "EtherScan clone";
  const tenBlockWithDetails = [];

  const [yourBlockTrans, setYourBlockTrans] = useState(tenBlockWithDetails);
  const [currentBlock, setCurrentBlock] = useState([]);
  const [topTenBlock, setTopTenBlock] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [gasPrice, setGasPrice] = useState("");

  const accountDetails = async () => {
    try {
      const getCurrentBlock = await provider.getBlockNumber();
      setCurrentBlock(getCurrentBlock);

      //SINGLE BLOCK TRANSACTION
      const blockTransaction = await provider.getBlock(getCurrentBlock);
      setYourBlockTrans(blockTransaction);
    } catch (error) {
      console.log("something went wrong while fetching data", error);
    }
  };

  useEffect(() => {
    accountDetails();
  }, []);

  console.log(" current block number", currentBlock);
  console.log("block transaction", yourBlockTrans);

  return <ETHERSCAN.Provider value={{ data }}>{children}</ETHERSCAN.Provider>;
};
