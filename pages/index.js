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
  const { data } = useContext(ETHERSCAN);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default index;
