import React from "react";
import Image from "next/image";
import { FaFilter } from "react-icons/fa";
import { AilFillEye } from "react-icons/ai";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "../styles/table.module.css";

const MinedByBlock = ({ blockMindedByAddress, handleClick }) => {
  console.log("blockMindedByAddress", blockMindedByAddress);

  return (
    <div>
      {blockMindedByAddress.length == 0 ? (
        <div className={Style.sorry}>
          <p>Sorry There is no Data available</p>
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Block Number</p>
            </div>
            <div className={Style.tableInfo}>
              {blockMindedByAddress.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p className={Style.toLink}>
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
              <p>Block Reward</p>
            </div>
            <div className={Style.tableInfo}>
              {blockMindedByAddress.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.blockReward.slice(0, 10)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>TimeStamp </p>
            </div>
            <div className={Style.tableInfo}>
              {blockMindedByAddress.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.timeStamp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MinedByBlock;
