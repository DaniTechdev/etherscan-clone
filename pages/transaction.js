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

  console.log("transactionData", transactionData);

  //FORMAT VALUE
  const [ethGasLimit, setEthGasLimit] = useState("");
  const [gasPrice, setGasPrice] = useState("");
  const [VALUE, setVALUE] = useState("");

  const getDataOfTransaction = async () => {
    try {
      const transactionDetails = await provider.getTransaction(hash);
      setTransactionData(transactionDetails);
      transDetails.push(transactionDetails);

      console.log("transactionDetails", transactionDetails);

      //CONVERT ETHER
      const gasLimitPrice = ethers.utils.formatUnits(
        transactionDetails.gasLimit
      );
      setEthGasLimit(gasLimitPrice);

      const gasPriceCon = ethers.utils.formatUnits(transactionDetails.gasPrice);
      setGasPrice(gasPriceCon);

      const etherValue = ethers.utils.formatUnits(transactionDetails.value);
      setVALUE(etherValue);

      // console.log("transactionDetails", transactionDetails);
    } catch (error) {
      console.log("Something is wrong from the transaction page");
    }
  };

  useState(() => {
    getDataOfTransaction();
  }, []);

  return (
    <div className={StyleTransaction.block}>
      <div className={StyleTransaction.box}>
        <div className={StyleTransaction.box_header}>
          <h3>Transaction Hash</h3>
          <p>{hash}</p>
        </div>

        <div className={StyleTransaction.blockTable}>
          <div>
            <div className={StyleTransaction.dataRow}>
              <p>Numbers</p>
              <Link
                href={{
                  pathname: "/block/",
                  query: transactionData.blockNumber,
                }}
              >
                <p className={StyleTransaction.color}>
                  {transactionData.blockNumber}
                </p>
              </Link>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>From</p>
              <Link
                href={{ pathname: "/account/", query: transactionData.from }}
              >
                <p className={StyleTransaction.color}>{transactionData.from}</p>
              </Link>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>To</p>
              <Link href={{ pathname: "/account/", query: transactionData.to }}>
                <p className={StyleTransaction.color}>{transactionData.to}</p>
              </Link>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Hash</p>
              <p>{transactionData.hash ? transactionData.hash : "No hash"}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Nounce</p>
              <p>
                {transactionData.nounce ? transactionData.nounce : "No Nounce"}
              </p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Transaction Index</p>
              <p>
                {transactionData.transactionIndex
                  ? transactionData.transactionIndex
                  : "No Transaction Index"}
              </p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>R </p>
              <p>{transactionData.r ? transactionData.r : "No R "}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p> S</p>
              <p>{transactionData.s ? transactionData.s : "No S "}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Gas Limit </p>
              <p>{ethGasLimit}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Gas Price </p>
              <p>{gasPrice}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Type </p>
              <p>{transactionData.type}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>V </p>
              <p>{transactionData.v}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Value </p>
              <p>{VALUE}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Chain Id </p>
              <p>{transactionData.chainId}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Confirmations </p>
              <p>{transactionData.confirmations}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>Created </p>
              <p>
                {transactionData.creates ? transactionData.creates : "No data"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transaction;
