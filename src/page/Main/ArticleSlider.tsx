import React from "react";
import styled from "styled-components";
import { Carousel } from "@mantine/carousel";
import { articleT } from "../../types/type";
import thumbnail from "../../assets/thumbnail.jpeg";
import { useNavigate } from "react-router-dom";

const MockData: articleT[] = [
  {
    id: "1",
    title: "Levy takes Whitebread novel prize",
    company: "BBC News",
    date: "2005.01.05",
    thumbnail: thumbnail,
    content:
      "Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award.She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty.",
  },
  {
    id: "1",
    title: "Levy takes Whitebread novel prize",
    company: "BBC News",
    date: "2005.01.05",
    thumbnail: thumbnail,
    content: "",
  },
  {
    id: "1",
    title: "Levy takes Whitebread novel prize",
    company: "BBC News",
    date: "2005.01.05",
    thumbnail: thumbnail,
    content: "",
  },
  {
    id: "1",
    title: "Levy takes Whitebread novel prize",
    company: "BBC News",
    date: "2005.01.05",
    thumbnail: thumbnail,
    content: "",
  },
];

const ArticleSlider = () => {
  const navigate = useNavigate();

  const onClickArticle = (id: string) => {
    navigate(`/articledetail/${id}`);
  };
  return (
    <Carousel
      withIndicators
      sx={{ maxWidth: "100%" }}
      slideSize="30%"
      //slideGap="md"
      loop
      align="start"
      mx="auto"
      slidesToScroll={3}
      controlsOffset="xl"
      style={{ marginTop: "64px", marginLeft: "100px" }}
    >
      {MockData.map((aritcle: articleT) => {
        return (
          <>
            <Carousel.Slide>
              <ArticleItem
                onClick={() => {
                  onClickArticle(aritcle.id);
                }}
                url={aritcle.thumbnail}
              >
                <div className="overlay" />
                <span className="title">{aritcle.title}</span>
                <span className="company">{aritcle.company}</span>
                <span className="date">{aritcle.date}</span>
                <span className="content">{aritcle.content}</span>
              </ArticleItem>
            </Carousel.Slide>
          </>
        );
      })}
    </Carousel>
  );
};

export default ArticleSlider;

const ArticleItem = styled.div<{ url?: string }>`
  width: 330px;
  height: 328px;
  border-radius: 30px;
  color: white;
  background-image: url(${({ url }) => url});
  background-size: cover;

  .overlay {
    position: absolute;
    width: 330px;
    height: 328px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .title {
    position: absolute;
    left: 24px;
    top: 147px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }

  .company {
    position: absolute;
    left: 24px;
    top: 213px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }

  .date {
    position: absolute;
    left: 24px;
    top: 273px; 
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }

  .content {
    position: absolute;
    top: 105px;
    left: 24px; 
    width: 282px;
    visibility: hidden;
  }

  &: hover{
    .overlay{
        background-color: rgba(0, 0, 0, 0.7);
    }
    .title{
        visibility: hidden;
    }

    .company{
        visibility: hidden;
    }
    .date{
        visibility: hidden;
    }
    
    .content {
        visibility: visible;
    }
  }

  .
`;
