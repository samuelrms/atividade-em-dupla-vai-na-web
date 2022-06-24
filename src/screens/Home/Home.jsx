import React from "react";
import {
  Cards,
  ContactContent,
  ContainerHome,
  ContentCards,
  ContentInfo,
  ContentRecipes,
  InfoDescription,
  InputSubscribe,
  NavigatorFooter,
  SocialNetworks,
  SubscribeContent,
} from "./styled";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubTitle from "./../../components/SubTitle/SubTitle";
import { text } from "../../components/mooks/text";
import Line from "./../../components/Line";
import Img from "../../components/Img";
import Text from "./../../components/Text/Text";
import Button from "../../components/Button";
import { colors } from "../../styles/colors";
import { images } from "../../components/mooks/images";

const Home = () => {
  const getTitleCard = text.recipes.contentCard.contentTitle;
  const getAltImages = text.recipes.contentCard.contentAltImages;

  return (
    <ContainerHome>
      <Header />
      <ContentRecipes>
        <SubTitle
          margin="0 0 31.5px"
          color={colors.primaryColors.text}
          children={text.recipes.title}
        />
        <Line
          margin="0 auto 104.5px auto"
          width="45px"
          height="3px"
          background={colors.primaryColors.line}
        />
      </ContentRecipes>
      <Cards>
        {text.recipes.contentCard.contentImages.map((data, index) => (
          <ContentCards key={index}>
            <Img
              height="250px"
              width="100%"
              src={data}
              alt={getAltImages[index]}
            />
            <Line
              margin="158px auto 34px"
              background={colors.primaryColors.line}
              width="51px"
              height="5px"
            />
            <SubTitle
              color={colors.primaryColors.text}
              margin="0 auto 156px"
              children={getTitleCard[index]}
            />
          </ContentCards>
        ))}
      </Cards>
      <ContentInfo>
        <Img
          src={text.info.imageInfo}
          alt={text.info.imageInfoAlt}
          width="50%"
          height="100%"
        />
        <InfoDescription>
          <SubTitle margin="140px 0 0">{text.info.title}</SubTitle>
          <Line
            margin="30px auto 54px"
            background={colors.primaryColors.line}
            width="51px"
            height="5px"
          />
          <Text
            textAlign="justify"
            width="60%"
            children={text.info.desciption}
            margin="0 auto 200px"
          />
        </InfoDescription>
      </ContentInfo>
      <SubscribeContent>
        <SubTitle
          letterSpacing="4.2px"
          fontSize="32px"
          margin="167px auto 0"
          children={text.contact.title}
        />
        <Text
          fontSize="32px"
          letterSpacing="2.05px"
          color={colors.primaryColors.text}
          children={text.contact.subTitle}
          margin="13px 0 42px"
        />
        <InputSubscribe
          type="email"
          placeholder={text.contact.labelInput}
          required
        />
        <Button
          width="240px"
          background="none"
          border={colors.background.hoverButton}
          bordeRadius="2px"
          height="61px"
          children={text.contact.submit}
        />
      </SubscribeContent>
      <ContactContent>
        <SocialNetworks>
          {images.redesSociais.map((data, index) => (
            <Img cursor="pointer" src={data} key={index} />
          ))}
        </SocialNetworks>
        <NavigatorFooter>
          {text.navegation.map((data, index) => (
            <Button
              children={data}
              key={index}
              width="14vw"
              background="none"
              height="61px"
              hoverBoder={colors.background.hoverButton}
            />
          ))}
        </NavigatorFooter>
      </ContactContent>
      <Footer />
    </ContainerHome>
  );
};

export default Home;
