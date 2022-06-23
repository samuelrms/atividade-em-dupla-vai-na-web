import React from "react";
import { HeaderContainer, MenuList, Navegation } from "./styled";
import { text } from "../mooks/text";
import RC from "../../assets/desktop/RC.svg";
import Button from "../Button";
import Img from "./../Img";
import Title from "../Title";
import Container from "../Container";

const Header = () => {
  return (
    <Container background="#FFFFFF" padding="0 0 35px">
      <HeaderContainer>
        <Navegation>
          <Img
            width="68px"
            height="61px"
            margin="0 0 0 63px"
            src={RC}
            alt="Logo da pagina"
          />
          <MenuList>
            {text.navegation.map((children) => (
              <Button
                width="14vw"
                background="none"
                height="61px"
                hoverBoder=" 5px solid #373737"
              >
                {children}
              </Button>
            ))}
          </MenuList>
        </Navegation>
        <Title
          margin="275px auto auto"
          width="auto"
          fontWeight="600"
          children={text.titlePage}
          fontSize="9.375rem"
          color="#373737"
        />
      </HeaderContainer>
    </Container>
  );
};

export default Header;
