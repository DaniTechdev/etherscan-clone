import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "../styles/table.module.css";
const ERC1155Token = ({ ERC115, handleClick }) => {
  return (
    <div>
      {ERC115.length == 0 ? (
        <div className={Style.sorry}>
          <h1>Sorry no data ERC115</h1>
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p> Hash</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC115.map((el, i) => (
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
              {ERC115.map((el, i) => (
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
              {ERC115.map((el, i) => (
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
              {ERC115.map((el, i) => (
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
              {ERC115.map((el, i) => (
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
              {ERC115.map((el, i) => (
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
              {ERC115.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.gasUsed}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Token Name</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC115.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.tokenName}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Token Symbol</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC115.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.tokenSymbol}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Token Decimal</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC115.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.tokenDecimal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Confirmation</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC115.map((el, i) => (
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
              {ERC115.map((el, i) => (
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
              {ERC115.map((el, i) => (
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
              {ERC115.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.gasUsed}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Input</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC115.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.input}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Index</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC115.map((el, i) => (
                <div className={Style.transHash} key={i + 1}>
                  <p>{el.transactionIndex}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Contract Address</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC115.map((el, i) => (
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

export default ERC1155Token;
