import React from "react";
import { HeaderContainer, MenuList, Navegation } from "./styled";
import { text } from "../mooks/text";
import RC from "../../assets/desktop/RC.svg";
import Button from "../Button";
import Img from "./../Img";
import Title from "../Title";
import Container from "../Container";
import { colors } from "./../../styles/colors";

const Header = () => {
  return (
    <Container background={colors.background.header} padding="0 0 35px">
      <HeaderContainer>
        <Navegation>
          <Img
            width="68px"
            height="61px"
            margin="0 0 0 63px"
            src={RC}
            alt={text.altImageLogo}
          />
          <MenuList>
            {text.navegation.map((children, index) => (
              <Button
                key={index}
                width="14vw"
                background="none"
                height="61px"
                hoverBoder={colors.background.hoverButton}
              >
                {children}
              </Button>
            ))}
          </MenuList>
        </Navegation>
        <Title
          letterSpacing="4.2px"
          margin="275px auto auto"
          width="auto"
          fontWeight="200"
          children={text.titlePage}
          fontSize="9.375rem"
          color={colors.primaryColors.text}
        />
      </HeaderContainer>
    </Container>
  );
};

export default Header;
