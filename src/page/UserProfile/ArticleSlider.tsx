import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Carousel } from "@mantine/carousel";
import { articleT, newsT } from "../../types/type";
import thumbnail from "../../assets/thumbnail.jpeg";
import { useNavigate } from "react-router-dom";
import userDTStore from "../../store/userStore";
import useArticleStore from "../../store/articleStore";
import axios from "axios";

const ArticleSlider = () => {
  const navigate = useNavigate();
  const { user } = userDTStore();
  const [articleList, setArticleList] = useState<[]>([]);
  const name = user?.firstName + " " + user?.lastName;

  const onClickArticle = (id: string) => {
    navigate(`/articledetail/${id}`);
  };

  const loadData = async () => {
    const token = window.localStorage.getItem("token");
    await axios
      .get("/api/v1/article/sumsol", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("res", res.data);
        setArticleList(res.data);
      })
      .catch((e) => {
        console.log("e", e);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log("articleList", articleList);
  }, [articleList]);
  return (
    <Wrapper>
      <Title>
        <span style={{ fontWeight: 700 }}>{name}</span>님이 요약한 뉴스들
      </Title>
      {articleList?.length > 0 && (
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
          {articleList?.map((aritcle: any) => {
            console.log("articel", aritcle);
            return (
              <>
                <Carousel.Slide>
                  <ArticleItem
                    onClick={() => {
                      onClickArticle(String(aritcle.article_id.id));
                    }}
                    url={`data:image/png;base64, ${aritcle.article_id.thumbnail}`}
                  >
                    <div className="overlay" />
                    <span className="title">{aritcle.article_id.title}</span>
                    <span className="company">
                      {aritcle.article_id.companyName}
                    </span>
                    <span className="content">
                      {aritcle.article_id.content}
                    </span>
                  </ArticleItem>
                </Carousel.Slide>
              </>
            );
          })}
        </Carousel>
      )}
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
