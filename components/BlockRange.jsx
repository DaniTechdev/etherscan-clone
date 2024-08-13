import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "../styles/table.module.css";

const BlockRange = ({ blockRangeTransaction, handleClick }) => {
  return (
    <div>
      {blockRangeTransaction.length == 0 ? (
        <div className={Style.sorry}>
          <p>Sorry There is no Data available</p>
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p> Hash</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <AiFillEye />
                  <p>{el.hash.slice(0, 35)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Block</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
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
              {blockRangeTransaction.map((el, i) => (
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
              {blockRangeTransaction.map((el, i) => (
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
              {blockRangeTransaction.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p className={Style.toLink}>
                    <Link href={{ pathname: "/account/", query: el.to }}>
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
              {blockRangeTransaction.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.value.slice(0, 5)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas Used</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.gasUsed}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gsas</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.gas}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Input</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.input ? el.input : "No data"}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Type</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Traceid</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.traceId}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>isError</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.isError}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Contract Address</p>
            </div>
            <div className={Style.tableInfo}>
              {blockRangeTransaction.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>
                    {el.contractAddress ? el.contractAddress : "No Address"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockRange;
