import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "../styles/table.module.css";
import Transaction from "./Transactions";
import Internal from "./Internal";
import ERC20Token from "./ERC20Token";
import ERC21Token from "./ERC21Token";
import ERC1155Token from "./ERC1155Token";
import MindedByBlock from "./MinedByBlock";
import BlockRange from "./BlockRange";
const Table = ({
  accountHistory,
  totalTransaction,
  internalByAddress,
  ERC20,
  ERC21,
  ERC115,
  accountData,
  blockMindedByAddress,
  blockRangeTransaction,
}) => {
  const [historyAccount, setHistoryAccount] = useState(true);
  const [addressInternalTransaction, setAddressInternalTransaction] =
    useState(false);
  const [openERC20, setOpenERC20] = useState(false);
  const [addressByMinedBlock, setAddressByMinedBlock] = useState(false);
  const [TransactionRangeBlock, setTransactionRangeBlock] = useState(false);
  const [openERC21, setOpenERC21] = useState(false);
  const [openERC1155, setopenERC1155] = useState(false);

  const tabs = (e) => {
    const buttonText = e.target.innerText;
    if (buttonText === "Transaction") {
      setHistoryAccount(true);
      setAddressInternalTransaction(false);
      setAddressByMinedBlock(false);
      setopenERC1155(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setTransactionRangeBlock(false);
    } else if (buttonText === "Internal") {
      setHistoryAccount(false);
      setAddressInternalTransaction(true);
      setAddressByMinedBlock(false);
      setopenERC1155(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setTransactionRangeBlock(false);
    } else if (buttonText === "Trans") {
      setHistoryAccount(false);
      setAddressInternalTransaction(false);
      setAddressByMinedBlock(false);
      setopenERC1155(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setTransactionRangeBlock(true);
    } else if (buttonText === "Mined") {
      setHistoryAccount(false);
      setAddressInternalTransaction(false);
      setAddressByMinedBlock(true);
      setopenERC1155(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setTransactionRangeBlock(false);
    } else if (buttonText === "ERC-20") {
      setHistoryAccount(false);
      setAddressInternalTransaction(false);
      setAddressByMinedBlock(false);
      setopenERC1155(false);
      setOpenERC20(true);
      setOpenERC21(false);
      setTransactionRangeBlock(false);
    } else if (buttonText === "ERC-21") {
      setHistoryAccount(false);
      setAddressInternalTransaction(false);
      setAddressByMinedBlock(false);
      setopenERC1155(false);
      setOpenERC20(false);
      setOpenERC21(true);
      setTransactionRangeBlock(false);
    } else if (buttonText === "ERC-1155") {
      setHistoryAccount(false);
      setAddressInternalTransaction(false);
      setAddressByMinedBlock(false);
      setopenERC1155(true);
      setOpenERC20(false);
      setOpenERC21(false);
      setTransactionRangeBlock(false);
    }
  };

  return (
    <div className={Style.table}>
      <div className={Style.table_head}>
        <button className={Style.btn} onClick={(e) => tabs(e)}>
          Transaction
        </button>
        <button className={Style.btn} onClick={(e) => tabs(e)}>
          Internal
        </button>
        <button className={Style.btn} onClick={(e) => tabs(e)}>
          Trans
        </button>
        <button className={Style.btn} onClick={(e) => tabs(e)}>
          Mined
        </button>
        <button className={Style.btn} onClick={(e) => tabs(e)}>
          ERC-20
        </button>
        <button className={Style.btn} onClick={(e) => tabs(e)}>
          ERC-21
        </button>
        <button className={Style.btn} onClick={(e) => tabs(e)}>
          ERC-1155
        </button>
      </div>

      <div className={Style.numberOfTran}>
        <FaFilter />
        <p>
          Latest 10 from a total of <span>{totalTransaction}</span>
        </p>
      </div>

      {historyAccount ? (
        <Transaction handleClick={accountData} accountHistor={accountHistory} />
      ) : (
        ""
      )}

      {addressInternalTransaction ? (
        <Internal
          internalByAddress={internalByAddress}
          handleClick={accountData}
        />
      ) : (
        ""
      )}

      {openERC20 ? <ERC20Token ERC20={ERC20} /> : ""}

      {addressByMinedBlock ? (
        <MindedByBlock
          blockMindedByAddress={blockMindedByAddress}
          handleClick={accountData}
        />
      ) : (
        ""
      )}

      {TransactionRangeBlock ? (
        <BlockRange
          blockRangeTransaction={blockRangeTransaction}
          handleClick={accountData}
        />
      ) : (
        ""
      )}

      {openERC21 ? <ERC21Token ERC21={ERC21} handleClick={accountData} /> : ""}

      {openERC1155 ? (
        <ERC1155Token ERC115={ERC115} handleClick={accountData} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Table;
