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
      setTransaction(blockTransaction.transactions);

      //TOP TEN BLOCKS
      //   const topTenBlock = await provider.getBlock(getCurrentBlock - 10);
      //(2010-10 = 2000)

      const previousBlock = getCurrentBlock - 10;
      const listTenBlock = [];

      //to the top 1o block number
      for (let i = getCurrentBlock; i > previousBlock; i--) {
        listTenBlock.push([i]);
      }

      //   console.log("listTenBlock", listTenBlock);

      //GET BLOCK DETAILS
      const getBlockDetails = listTenBlock.flat();
      //   console.log("getBlockDetailsFlat", getBlockDetails);
      setTopTenBlock(getBlockDetails);

      getBlockDetails.map(async (el) => {
        const singleBlockData = await provider.getBlock(el);

        tenBlockWithDetails.push(singleBlockData);
        // console.log("singleBlockData", singleBlockData);
      });
    } catch (error) {
      console.log("something went wrong while fetching data", error);
    }
  };

  useEffect(() => {
    accountDetails();
  }, []);

  //   console.log(" current block number", currentBlock);
  //   console.log("block transactions", transaction);

  return <ETHERSCAN.Provider value={{ data }}>{children}</ETHERSCAN.Provider>;
};
