import React from "react";
import styled from "styled-components";
import HeaderSearch from "../../common/header";
import Explanation from "./Explanation";
import ArticleSlider from "./ArticleSlider";

const Main = () => {
  return (
    <Wrapper>
      <HeaderSearch />
      <Explanation />
      <ArticleSlider />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
`;
