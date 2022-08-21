import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "@mantine/carousel";
import thumbnail from "../../assets/img/thumbnail.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import userDTStore from "../../store/userStore";
import { newsT } from "../../types/type";

const ArticleSlider = () => {
  console.log("articleslider");
  const navigate = useNavigate();
  const { user } = userDTStore();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const accessToken = user?.token;
  const [newslist, setNewslist] = useState<newsT[]>([]);

  const load_articles = async () => {
    await axios
      .get("/api/v1/article/article-lists", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setNewslist(res.data);
      })
      .catch((e) => {
        console.log("e", e);
      });
  };
  useEffect(() => {
    load_articles();
    console.log("loading articles...");
  }, []);
  const onClickArticle = (id: number) => {
    const userToken = window.localStorage.getItem("token");
    if (userToken) navigate(`/articledetail/${id}`);
    else navigate("/signin");
  };
  return (
    <Wrapper>
      {newslist.length > 0 && (
        <Carousel
          withIndicators
          //sx={{ maxWidth: "100%" }}
          slideSize="33%"
          height={400}
          slideGap="xs"
          loop
          align="start"
          slidesToScroll={3}
          controlsOffset="xl"
          style={{ marginTop: "64px", marginLeft: "100px" }}
        >
          {newslist?.map((article, idx) => {
            if (idx > 8) return;
            return (
              <>
                <Carousel.Slide>
                  <ArticleItem
                    onClick={() => {
                      onClickArticle(article.id);
                    }}
                    url={`data:image/png;base64, ${article.thumbnail}`}
                  >
                    <div className="overlay" />
                    <span className="title">{article.title}</span>
                    <span className="company">{article.companyName}</span>
                    <span className="content">{article.content}</span>
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
  padding-bottom: 100px;
  width: 100vw;
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
