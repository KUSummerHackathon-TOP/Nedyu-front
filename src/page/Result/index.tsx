import React, { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "styled-components";
import chicken from "../../assets/chicken.svg";

const Result = () => {
  const [bottomBarContent, setBottomBarContent] = useState<string>(
    "내 생각에 기사에서 누구나 꿈을 이룰 수 있다고 말하고 싶은 것 같아!"
  );
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setBottomBarContent(
        "와우 뉴스를 완벽하게 이해했군요! 다음에 어떤 기사를 요약해 볼까요?"
      );
      setShowButton(true);
    }, 3000);
  }, []);

  return (
    <>
      <TopBar>Levy takes Whitbread novel prize</TopBar>
      <SubTitle>네듀가 분석한 뉴스 요약문과 내 생각의 일치도는?</SubTitle>
      <QuestionMark>?</QuestionMark>
      <ScoreWrapperTop />
      <ScoreWrapperBottom />
      <Score>96%</Score>
      <ChickenCharacter src={chicken} />
      <BottomBar>
        {bottomBarContent}
        {showButton && <SearchArticleButton>뉴스 찾기</SearchArticleButton>}
      </BottomBar>
    </>
  );
};

export default Result;

const TopBar = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  height: 100px;
  width: 100%;
  background: #ffd751;
  justify-content: center;
  align-items: center;
  z-index: 5;

  font-style: normal;
  font-size: 28px;
  font-weight: 700;
`;

const BottomBar = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  height: 100px;
  width: 100%;
  background: #ffd751;
  justify-content: center;
  align-items: center;
  z-index: 5;

  font-style: normal;
  font-size: 28px;
  font-weight: 700;
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

const SearchArticleButton = styled.div`
  position: fixed;
  bottom: 18px;
  right: 30px;
  width: 140px;
  height: 64px;
  border-radius: 64px;
  background: #ffffff;
  text-align: center;
  cursor: pointer;

  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 64px;
  color: #00110f;
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
