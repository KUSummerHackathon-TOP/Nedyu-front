import React from "react";
import styled from "styled-components";
import Header from "../../common/Header";
import Banner from "./Banner";
import ArticleSlider from "./ArticleSlider";

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <ArticleSlider />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
`;
