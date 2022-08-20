import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {
  content: string;
  isSearchButtonShow: boolean;
  isRankingButtonShow?: boolean;
  articleId?: string;
}

const BottomBar = ({
  content,
  isSearchButtonShow,
  isRankingButtonShow,
  articleId,
}: Props) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {content}
      {isSearchButtonShow && (
        <SearchArticleButton>뉴스 찾기</SearchArticleButton>
      )}
      {isRankingButtonShow && (
        <RankingButton onClick={() => navigate(`/ranking/${articleId}`)}>
          랭킹 확인
        </RankingButton>
      )}
    </Wrapper>
  );
};

export default BottomBar;

const Wrapper = styled.div`
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

const RankingButton = styled.div`
  position: fixed;
  bottom: 18px;
  right: 186px;
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
