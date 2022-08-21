import React, { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "styled-components";
import chicken from "../../assets/img/chicken.svg";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import BottomBar from "../../common/BottomBar";
import ArticleList from "./ArticleList";
import useArticleStore from "../../store/articleStore";
import axios from "axios";
import userDTStore from "../../store/userStore";

const Result = () => {
  const id = useParams().id;
  const location: any = useLocation();
  const { score } = location.state;
  const { user } = userDTStore();
  const accessToken = window.localStorage.getItem("token");
  const { similarArticleList, setSimilarArticleList } = useArticleStore();
  const [bottomBarContent, setBottomBarContent] = useState<string>(
    "내 생각에 기사에서 누구나 꿈을 이룰 수 있다고 말하고 싶은 것 같아!"
  );
  const [showButton, setShowButton] = useState<boolean>(false);
  const [showArticleList, setShowArticleList] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setBottomBarContent("다음에 어떤 기사를 요약해 볼까요?");
      setShowButton(true);
    }, 3000);
    // similar topic news suggestion api call
    setTimeout(() => {
      axios
        .get("/api/v1/article/article-lists/7", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log("res", res);
          setSimilarArticleList(res.data);
        })
        .catch((e) => {
          console.log("e", e);
        });
    }, 8000);
  }, []);

  useEffect(() => {
    console.log("list", similarArticleList);
  }, [similarArticleList]);

  return (
    <>
      <TopBar>
        Levy takes Whitbread novel prize
        {!showArticleList && (
          <OpenArticleList onClick={() => setShowArticleList(true)}>
            추천받기
          </OpenArticleList>
        )}
      </TopBar>
      <SubTitle>네듀가 분석한 뉴스 요약문과 내 생각의 일치도는?</SubTitle>
      <QuestionMark>?</QuestionMark>
      <ScoreWrapperTop />
      <ScoreWrapperBottom />
      <Score>{score}%</Score>
      <ChickenCharacter src={chicken} />
      <BottomBar
        content={bottomBarContent}
        isSearchButtonShow={showButton}
        isRankingButtonShow={showButton}
        articleId={id}
      />
      {showArticleList && similarArticleList.length > 0 && (
        <ArticleList
          articleList={similarArticleList}
          closeList={() => setShowArticleList(false)}
        />
      )}
      {!showArticleList && <></>}
    </>
  );
};

export default Result;

const TopBar = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  height: 80px;
  width: 100%;
  background: #ffd751;
  justify-content: center;
  align-items: center;
  z-index: 5;

  font-style: normal;
  font-size: 28px;
  font-weight: 700;
  border-bottom: 1px solid black;
`;

const QuestionMark = styled.span`
  position: absolute;
  width: 50px;
  left: calc(50% - 25px);
  top: calc(50% - 48px);
  font-weight: 600;
  font-size: 96px;
  line-height: 96px;
`;

const ScoreWrapperTop = styled.div`
  position: fixed;
  left: calc(50% - 300px);
  bottom: 50%;
  width: 600px;
  height: 200px;
  background: #ffffe2;

  animation: topSlideIn 3s;

  @keyframes topSlideIn {
    from {
      bottom: 100%;
    }
    to {
      bottom: 50%;
    }
  }
`;

const ScoreWrapperBottom = styled.div`
  position: fixed;
  left: calc(50% - 300px);
  top: 50%;
  width: 600px;
  height: 200px;
  background: #ffffe2;

  animation: bottomSlideIn 3s;

  @keyframes bottomSlideIn {
    from {
      top: 100%;
    }
    to {
      top: 50%;
    }
  }
`;

const Score = styled.div`
  position: absolute;
  width: 200px;
  height: 96px;
  left: calc(50% - 100px);
  top: calc(50% - 48px);
  font-style: normal;
  font-weight: 600;
  font-size: 96px;
  line-height: 96px;
  color: #00110f;

  animation: appearWithDelay 3s;

  @keyframes appearWithDelay {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SubTitle = styled.div`
  position: fixed;
  top: 120px;
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #00110f;
  z-index: 3;
`;

const ChickenCharacter = styled.img`
  position: fixed;
  right: 60px;
  bottom: 100px;
  width: 110px;
  height: 110px;

  animation: characterAppear 5s;

  @keyframes characterAppear {
    0% {
      right: 100%;
    }
    50% {
      right: 60%;
    }
    100% {
      right: 60px;
    }
  }
`;

const OpenArticleList = styled.div`
  position: absolute;
  right: 400px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 80px;
  color: #ffffff;
  cursor: pointer;
`;
