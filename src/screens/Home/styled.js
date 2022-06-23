import styled from "styled-components";
import Container from "../../components/Container";
import Content from "./../../components/Content";

export const ContainerHome = styled(Container)`
  background: #f2f4f1;
`;

export const ContentRecipes = styled(Content)`
  text-align: center;
  margin: 245px 0 0;
`;

export const ContentCards = styled(Content)``;

export const ContentInfo = styled(Content)`
  margin-top: 294px;
  display: flex;
  align-items: center;
  background: #fff;
`;

export const InfoDescription = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubscribeContent = styled(Content)`
  background: #dfe4de;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSubscribe = styled.input`
  border: none;
  width: 33%;
  height: 80px;
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const ContactContent = styled(Content)``;
