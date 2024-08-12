import React from "react";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "../styles/table.module.css";

const Transactions = ({ accountHistory, handleClick }) => {
  console.log("accountHistory", accountHistory);

  return (
    <div className={Style.dataTable}>
      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Txn Hash</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <AiFillEye />
              <p>{el.hash.slice(0, 35)}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Method</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>Transfer</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Block</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p className={Style.toLink}>
                <Link href={{ pathname: "/block/", query: el.blockNumber }}>
                  <p onClick={handleClick}>{el.blockNumber}</p>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>TimeStamp</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p className={Style}>{el.timeStamp}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>From</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p className={Style.toLink}>{el.from.slice(0, 10)}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>To</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p className={Style.toLink}>
                <Link href={{ pathname: "/block/", query: el.to }}>
                  <p onClick={handleClick}>{el.to.slice(0, 10)}...</p>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Value</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.value.slice(0, 5)}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Gas Price</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.gasPrice}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>BlockHash</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.blockHash.slice(0, 10)}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Confirmation</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.confirmations}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Cummulatiive</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.cumulativeGasUsed}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Gas</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.gas}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Gas Used</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.gasUsed}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Nouce</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.nonce}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Index</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.transactionIndex}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Status</p>
        </div>
        <div className={Style.tableInfo}>
          {accountHistory.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.txreceipt_status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
