import styled from "styled-components";
import headerBackground from "../../assets/desktop/headerbackground.png";

export const HeaderContainer = styled.header`
  margin: 36px 34px 0;
  display: flex;
  flex-direction: column;
  background: url(${headerBackground}) 100% 100% no-repeat;
  height: 1000px;
  ul {
    list-style: none;
  }
`;

export const Navegation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 45px;
`;

export const MenuList = styled.ul`
  margin: 0 54px 0 0;
  display: flex;
`;
