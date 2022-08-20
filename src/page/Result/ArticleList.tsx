import React, { useState } from "react";
import styled from "styled-components";
import close from "../../assets/close.svg";
import { articleT } from "../../types/type";
import left_gray from "../../assets/left_gray.svg";
import left_white from "../../assets/left_white.svg";
import right_gray from "../../assets/right_gray.svg";
import right_white from "../../assets/right_white.svg";

interface Props {
  articleList: articleT[];
  closeList: () => void;
}
const ArticleList = ({ articleList, closeList }: Props) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  return (
    <Wrapper>
      <CloseBtn
        src={close}
        onClick={() => {
          closeList();
          console.log("click");
        }}
      />
      <Company>
        {articleList[currentIdx].companyName
          ? articleList[currentIdx].companyName
          : "BBC News"}
      </Company>
      <Title>{articleList[currentIdx].title}</Title>
      <Explain>
        Nedyu가 해당 주제와 관련된{" "}
        <span style={{ color: "#F35000" }}>또 다른 입장</span>의 뉴스도 추천해
        드릴게요!
      </Explain>
      <LeftButton
        src={currentIdx === 0 ? left_gray : left_white}
        onClick={() => {
          if (currentIdx > 0) setCurrentIdx((currentIdx) => currentIdx - 1);
        }}
      />
      <RightButton
        src={currentIdx === articleList.length - 1 ? right_gray : right_white}
        onClick={() => {
          if (currentIdx < articleList.length - 1)
            setCurrentIdx((currentIdx) => currentIdx + 1);
        }}
      />
    </Wrapper>
  );
};

export default ArticleList;

const Wrapper = styled.div`
  position: fixed;
  top: 81px;
  width: 100%;
  height: 220px;
  background: #ffd751;
  z-index: 10;
`;

const CloseBtn = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Title = styled.div`
  position: absolute;
  width: 100%;
  top: 80px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  color: #ffffff;
`;

const Company = styled.div`
  position: absolute;
  width: 100%;
  top: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`;

const Explain = styled.div`
  position: absolute;
  width: 100%;
  top: 170px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`;

const LeftButton = styled.img`
  position: absolute;
  left: 20px;
  top: calc(50% - 30px);
`;

const RightButton = styled.img`
  position: absolute;
  right 20px;
  top: calc(50% - 30px);
`;
