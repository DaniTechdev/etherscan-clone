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
import ERC1155 from "./ERC1155Token";
import MindedByBlock from "./MinedByBlock";
import BlockRange from "./BlockRange";
const Table = ({
  accountHistory,
  totalTransaction,
  internalByAddress,
  ERC20,
  ERC21,
  ERC115,
  accountDatac,
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
          Tans
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
    </div>
  );
};

export default Table;
