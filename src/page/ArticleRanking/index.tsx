import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RankingHeader from "../../common/RankingHeader";
import { articleRankerT } from "../../types/type";
import RankingItem from "./RankingItem";
import BottomBar from "../../common/BottomBar";
import axios from "axios";
import userDTStore from "../../store/userStore";
// const MockData: articleRankerT[] = [
//   { name: "Nedyu1", score: 98 },
//   { name: "Nedyu2", score: 97 },
//   { name: "Nedyu3", score: 96 },
//   { name: "Nedyu4", score: 95 },
//   { name: "Nedyu5", score: 94 },
//   { name: "Nedyu6", score: 93 },
//   { name: "Nedyu7", score: 92 },
//   { name: "Nedyu8", score: 91 },
//   { name: "Nedyu9", score: 90 },
// ];

const ArticleRanking = () => {
  const params = useParams();
  const id = Number(params.id);
  const [articleid, setArticleid] = useState(id);
  const { user } = userDTStore();
  const accessToken = window.localStorage.getItem("token");
  const [ranker, setRanker] = useState([
    { name: "Nedyu1", score: 98 },
    { name: "Nedyu2", score: 97 },
    { name: "Nedyu3", score: 96 },
    { name: "Nedyu4", score: 95 },
    { name: "Nedyu5", score: 94 },
    { name: "Nedyu6", score: 93 },
    { name: "Nedyu7", score: 92 },
    { name: "Nedyu8", score: 91 },
    { name: "Nedyu9", score: 90 },
  ]);
  const getRankings = () => {
    axios
      .get(`/api/v1/article/rank/${articleid}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setRanker(res.data);
      })
      .catch((err) => {
        console.log("e", err);
      });
  };

  useEffect(() => {
    getRankings();
  }, [articleid]);
  return (
    <>
      <RankingHeader />
      <RankerItemWrapper>
        <Title>방금 내가 읽은 뉴스, Nedyu에서 가장 요약을 잘한 사람들!</Title>
        {ranker.map((ranker: articleRankerT, idx) => {
          return <RankingItem ranker={ranker} rank={idx + 1} />;
        })}
      </RankerItemWrapper>
      <BottomBar
        content="다음에 어떤 기사를 요약해 볼까요?"
        isSearchButtonShow={true}
      />
    </>
  );
};

export default ArticleRanking;

const RankerItemWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: calc(50% - 400px);
  padding-bottom: 200px;
`;

const Title = styled.div`
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #00110f;
  text-align: center;
`;
