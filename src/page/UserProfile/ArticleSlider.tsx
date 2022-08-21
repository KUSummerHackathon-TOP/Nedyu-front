import React from "react";
import styled from "styled-components";
import { Carousel } from "@mantine/carousel";
import { articleT } from "../../types/type";
import thumbnail from "../../assets/img/thumbnail.jpeg";
import { useNavigate } from "react-router-dom";
import userDTStore from "../../store/userStore";
// ! axios로 변경
const MockData: articleT[] = [
  {
    id: "1",
    title: "Levy takes Whitebread novel prize",
    companyName: "BBC News",
    thumbnail: thumbnail,
    articleShortContent:
      "Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award.She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty.",
  },
  {
    id: "1",
    title: "Levy takes Whitebread novel prize",
    companyName: "BBC News",
    thumbnail: thumbnail,
    articleShortContent: "",
  },
  {
    id: "1",
    title: "Levy takes Whitebread novel prize",
    companyName: "BBC News",
    thumbnail: thumbnail,
    articleShortContent: "",
  },
  {
    id: "1",
    title: "Levy takes Whitebread novel prize",
    companyName: "BBC News",
    thumbnail: thumbnail,
    articleShortContent: "",
  },
];

const ArticleSlider = () => {
  const navigate = useNavigate();
  const { user } = userDTStore();

  const name = user?.firstName + " " + user?.lastName;

  const onClickArticle = (id: string) => {
    navigate(`/articledetail/${id}`);
  };
  return (
    <Wrapper>
      <Title>
        <span style={{ fontWeight: 700 }}>{name}</span>님이 요약한 뉴스들
      </Title>
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
                  <span className="company">{aritcle.companyName}</span>
                  <span className="content">{aritcle.articleShortContent}</span>
                </ArticleItem>
              </Carousel.Slide>
            </>
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

export default ArticleSlider;

const Wrapper = styled.div`
  position: absolute;
  left: 120px;
  top: 600px;
  padding-bottom: 100px;
  width: 100vw;
`;

const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;

  color: #00110f;
  margin-bottom: 50px;
`;

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
