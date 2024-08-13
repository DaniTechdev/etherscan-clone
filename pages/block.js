import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ethers } from "ethers";

//INTERNAL IMPORT

import Style from "../styles/table.module.css";
import { ETHERSCAN } from "../Context/Ether";
import { FaFilter, FaUserAltSlash } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import StyleTransaction from "../styles/block.module.css";

const block = () => {
  const { provider } = useContext(ETHERSCAN);
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

      console.log("gasLimit,gasUsed", gasLimit, gasUsed);

      const difficulty = ethers.utils.formatEther(getBlock._difficulty);
      setEthDifficulty(difficulty);

      //TRANSACTION
      setTransact(getBlock.transactions);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    getBlockDetails();
  }, []);
  return (
    <div className={StyleTransaction.block}>
      <div className={Style.box}>
        <div className={StyleTransaction.box_header}>
          <h3>Block Number</h3>
          <p>{blockNumber}</p>
        </div>

        <div className={StyleTransaction.blockTable}>
          <div className={StyleTransaction.blockBtn}>
            <button onClick={() => openTab()}>Block Details</button>
            <button onClick={() => openTab()}>Block Transactions</button>
          </div>

          {blockNo ? (
            <div>
              <div className={StyleTransaction.dataRow}>
                <p>Number</p>
                <p>{blockData.number}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>TimeStamp</p>
                <p>{blockData.timeStamp}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Miner</p>
                <Link href={{ pathname: "/account/", query: blockData.miner }}>
                  <p className={StyleTransaction.color}>{blockData.miner}</p>
                </Link>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Hash</p>
                <p>{blockData.hash}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>ParentHash</p>
                <p>
                  {blockData.parentHash ? blockData.parentHash : "No data "}
                </p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Nounce</p>
                <p>{blockData.nounce}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Extra Data</p>
                <p>{blockData.extraData}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Difficulty</p>
                <p>{blockData.difficulty ? blockData.difficulty : "No data"}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Gas Limit</p>
                <p>{ethGasLimit}</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Gas Limite</p>
                <p>{ethGasUsed} ETH</p>
              </div>

              <div className={StyleTransaction.dataRow}>
                <p>Gas Limit</p>
                <p>{ethDifficulty} ETH</p>
              </div>
            </div>
          ) : (
            <div className={StyleTransaction.dataTable}>
              <div className={StyleTransaction.column}>
                <div className={Style.column}>
                  <div className={Style.tableTitle}>
                    <p>All Transactions in the block is {transact.length}</p>
                  </div>
                  <div className={Style.tableInfo}>
                    {transact.map((el, i) => (
                      <div className={Style.transHash} key={i + 1}>
                        <span>{i + 1}</span>
                        <Link
                          href={{
                            pathname: "/transaction/",
                            query: blockData.hash,
                          }}
                        >
                          <p className={StyleTransaction.color}>{el}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default block;
