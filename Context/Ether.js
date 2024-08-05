import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const apiKey = "34c891b9e72a4a9c8bb249804b23ab13";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${apiKey}`
);

export const ETHERSCAN = React.createContext();

export const EtherProvider = ({ children }) => {
  const data = "EtherScan clone";
  const tenBlockWithDetails = [];

  const [yourBlockTrans, setYourBlockTrans] = useState(tenBlockWithDetails);

  return <ETHERSCAN.Provider value={{ data }}>{children}</ETHERSCAN.Provider>;
};
