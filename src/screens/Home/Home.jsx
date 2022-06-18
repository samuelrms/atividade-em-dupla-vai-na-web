import React from "react";
import Title from "../../components/Title";
import { ContainerHome } from "./styled";
import { text } from "../../components/mooks/text";
import { colors } from "../../styles/colors";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <Title
        children={text.titlePage}
        color={colors.primaryColors.text.title}
      />
      <Footer />
    </ContainerHome>
  );
};

export default Home;
