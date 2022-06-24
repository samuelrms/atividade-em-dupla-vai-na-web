import styled from "styled-components";
import Container from "../../components/Container";
import Content from "./../../components/Content";
import { colors } from "./../../styles/colors";

export const ContainerHome = styled(Container)`
  background: ${colors.background.recipes};
`;

export const ContentRecipes = styled(Content)`
  text-align: center;
  margin: 245px 0 0;
`;

export const ContentCards = styled(Content)`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${colors.background.header};
  box-shadow: ${colors.background.shadow};
  :hover {
    cursor: pointer;
  }
`;

export const Cards = styled(Content)`
  padding: 0 98px;
  display: flex;
  justify-content: space-between;
`;

export const ContentInfo = styled(Content)`
  margin-top: 294px;
  display: flex;
  align-items: center;
  background: ${colors.background.header};
`;

export const InfoDescription = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubscribeContent = styled(Content)`
  background: ${colors.background.subscribe};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 211px;
`;

export const InputSubscribe = styled.input`
  border: none;
  width: 45%;
  height: 80px;
  padding: 0 50px;
  margin-bottom: 40px;
  border-radius: 2px;
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const ContactContent = styled(Content)`
  padding: 140px 98px 137px;
  display: flex;
  justify-content: space-between;
`;

export const SocialNetworks = styled(Content)`
  width: 35%;
  display: flex;
  justify-content: space-evenly;
`;

export const NavigatorFooter = styled.nav``;
