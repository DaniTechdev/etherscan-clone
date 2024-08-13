import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "../styles/table.module.css";

const Internal = ({ internalByAddress, handleClick }) => {
  return (
    <div className={Style.dataTable}>
      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Hash</p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <AiFillEye />
              <p>{el.hash.slice(0, 35)}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Block No</p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>
                <Link href={{ pathname: "/block/", query: el.blockNumber }}>
                  <p>{el.blockNumber}</p>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>TraceId </p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.traceId}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>TimeStamp </p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.timeStamp}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>From </p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.from.slice(0, 10)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>To </p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.to.slice(0, 10)}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Value </p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.value.slice(0, 10)}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Gas Used </p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.gasUsed}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>isError </p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.isError}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Gas </p>
        </div>
        <div className={Style.tableInfo}>
          {internalByAddress.map((el, i) => (
            <div className={Style.transHash} key={i + 1}>
              <p>{el.gas}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internal;
