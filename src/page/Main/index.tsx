import React from "react";
import styled from "styled-components";
import HeaderSearch from "../../common/header";
import Banner from "./Banner";
import ArticleSlider from "./ArticleSlider";

const Main = () => {
  return (
    <Wrapper>
      <HeaderSearch />
      <Banner />
      <ArticleSlider />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
`;
