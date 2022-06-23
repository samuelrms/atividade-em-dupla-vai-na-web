import React from "react";
import {
  ContactContent,
  ContainerHome,
  ContentCards,
  ContentInfo,
  ContentRecipes,
  InfoDescription,
  InputSubscribe,
  SubscribeContent,
} from "./styled";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubTitle from "./../../components/SubTitle/SubTitle";
import { text } from "../../components/mooks/text";
import Line from "./../../components/Line";
import Img from "../../components/Img";
import Text from "./../../components/Text/Text";
import Description from "./../../components/Description/Description";
import Button from "../../components/Button";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <ContentRecipes>
        <SubTitle
          margin="0 0 31.5px"
          color="#373737"
          children={text.recipes.title}
        />
        <Line
          margin="0 auto 104.5px auto"
          width="45px"
          height="3px"
          background="#373737"
        />
      </ContentRecipes>
      <ContentCards>Aguardando Solução</ContentCards>
      <ContentInfo>
        <Img
          src={text.info.imageInfo}
          alt={text.info.imageInfoAlt}
          width="50%"
        />
        <InfoDescription>
          <SubTitle>{text.info.title}</SubTitle>
          <Line />
          <Text
            textAlign="justify"
            width="60%"
            children={text.info.desciption}
          />
        </InfoDescription>
      </ContentInfo>
      <SubscribeContent>
        <SubTitle children={text.contact.title} />
        <Description children={text.contact.subTitle} />
        <InputSubscribe placeholder={text.contact.labelInput} />
        <Button children={text.contact.submit} />
      </SubscribeContent>
      <ContactContent></ContactContent>
      <Footer />
    </ContainerHome>
  );
};

export default Home;
