import React from "react";
import styled from "styled-components";
import { Carousel } from "@mantine/carousel";
import { HeaderSearch } from "../../common/header";
const Main = () => {
  return (
    <>
      <HeaderSearch />
      <div>Main</div>
      <Carousel
        withIndicators
        //sx={{ maxWidth: 300 }}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        mx="auto"
        slidesToScroll={3}
      >
        <Carousel.Slide>
          <ArticleItem>News 1</ArticleItem>
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
    </>
  );
};

export default Main;

const ArticleItem = styled.div`
  width: 200px;
  height: 200px;
  background: black;
  color: white;
`;
