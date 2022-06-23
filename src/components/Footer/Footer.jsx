import React from "react";
import Description from "../Description/Description";
import { text } from "../mooks/text";
import { FooterContainer } from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Description fontSize="14px" children={text.footer.content} />
    </FooterContainer>
  );
};

export default Footer;
