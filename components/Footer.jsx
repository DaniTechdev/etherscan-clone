import React from "react";
import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style}>
        <Image src={footerLogo} alt="logo" width={100} height={100} />
      </div>

      <div className={Style.footer_box}>
        <div className={Style.footer_input}>
          <input type="email" placeholder="Email" />
          <RiSendPlaneFill />
        </div>
      </div>

      <div className={Style.footer_box}>
        <div className={Style.social}>
          <TiSocialFacebook />
          <TiSocialInstagram />
          <TiSocialLinkedin />
          <TiSocialTwitter />
          <TiSocialYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
