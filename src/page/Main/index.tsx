import React from "react";
import styled from "styled-components";
import { Carousel } from "@mantine/carousel";
import { HeaderSearch } from "../../common/header";
const Main = () => {
  return (
    <Wrapper>
      <HeaderSearch />
      <Carousel
        withIndicators
        //sx={{ maxWidth: 300 }}
        slideSize="25%"
        slideGap="md"
        loop
        align="start"
        mx="auto"
        slidesToScroll={4}
      >
        <Carousel.Slide>
          <ArticleItem>
            <span className="title">Levy takes Whitebread novel prize</span>
          </ArticleItem>
        </Carousel.Slide>
        <Carousel.Slide>
          <ArticleItem>News 2</ArticleItem>
        </Carousel.Slide>
        <Carousel.Slide>
          <ArticleItem>News 3</ArticleItem>
        </Carousel.Slide>
        <Carousel.Slide>
          <ArticleItem>News 4</ArticleItem>
        </Carousel.Slide>
      </Carousel>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
`;

const ArticleItem = styled.div<{ url?: string }>`
  width: 330px;
  height: 328px;
  background: black;
  border-radius: 30px;
  color: white;

  .title {
    position: absolute;
    left: 24px;
    top: 147px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: white;
  }
`;
