import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ethers } from "ethers";
import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";

//INTERNAL IMPORT
import { ETHERSCAN } from "../Context/Ether";
import Style from "../styles/index.module.css";
import etherLogo from "../public/eth.png";

const index = () => {
  const router = useRouter();
  const { data, yourBlockTrans, transaction } = useContext(ETHERSCAN);

  //USESTATE SECTION

  const [userAccount, setUserAccount] = useState("");

  console.log(yourBlockTrans, "yourBlockTrans");

  //CONVERT ETHER
  const convertIntoEther = (amount) => {
    const ETH = ethers.utils.formatEther(amount, "ether");
    return ETH;
  };

  //INPUT ADDRESSS
  const accountAddresss = (event) => {
    event.preventDefault();
    let address = document.getElementById("accountAddress").value.trim(); //trim to remove space
    setUserAccount(address);
    router.push(`/account?${address}`);
    address = "";
  };

  return (
    <div>
      <div className={Style.header}>
        <form className={Style.accountAddress}>
          <input
            type="text"
            placeholder="Ether Account Address"
            id="accountAddress"
            // onChange={(e) => (
            //   setUserAccount(e.target.value.trim()),
            //   router.push(
            //     `/account?${e.target.value.trim()}`,
            //     (e.target.value = "")
            //   )
            // )}
          />
          <Link
            href={{ pathname: "/account", query: userAccount }}
            onClick={(event) => accountAddresss(event)}
          >
            <SiMinutemailer />
          </Link>
        </form>
      </div>

      {/* //MAIN SECTON OF HOME PAGE */}
      <div className={Style.container}>
        <div className={Style.container_box}>
          <h3>Latest Blocks</h3>
          <div className={Style.container_block}>
            {yourBlockTrans.map((el, i) => (
              <div className={Style.oneBlock} key={i + 1}>
                <div className={Style.block}>
                  <div className={Style.info}>
                    <p className={Style.bk}>BK</p>
                    <Link
                      className={Style.container_link}
                      href={{ pathname: "/block", query: el.number }}
                    >
                      {el.number}
                    </Link>
                  </div>
                  <p>{el.timestamp}</p>
                </div>
                <div>
                  <div className={Style.miner}>
                    <p>
                      <samp>
                        Miner: &nbsp; &nbsp;
                        <Link
                          className={Style.link}
                          href={{
                            pathname: "/account",
                            query: el.miner,
                          }}
                        >
                          <p> {el.miner.slice(0, 35)}</p>
                        </Link>
                      </samp>
                    </p>
                    <span>
                      <Link href={{ pathname: "/block/", query: el.number }}>
                        <span className={Style.container_link}>
                          {" "}
                          {el.transactions.length}
                        </span>
                      </Link>
                      &nbsp; TNS in 3Sec
                    </span>
                  </div>

                  <div className={Style.reward}>
                    <p>
                      {convertIntoEther(el.baseFeePerGas)}
                      <span>ETH </span>
                    </p>
                    <Image
                      src={etherLogo}
                      className={Style.eth}
                      alt="Ether logo"
                      width={10}
                      height={10}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.container_box}>
          <h3>Latest Transaction</h3>
          <div className={Style.container_block}>
            {transaction.map((el, i) => (
              <div className={Style.oneBlock} key={i + 1}>
                <div className={Style.info}>
                  <div>
                    <p className={Style.bx}>TS</p>
                  </div>
                  <Link
                    className={Style.container_link}
                    href={{ pathname: "/transaction", query: el }}
                  >
                    Hash:&nbsp;{el.slice(0, 45)}...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
