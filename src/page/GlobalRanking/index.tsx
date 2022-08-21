import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RankingHeader from "../../common/RankingHeader";
import RankingItem from "./RankingItem";
import BottomBar from "../../common/BottomBar";
import userDTStore from "../../store/userStore";
import { globalRankerT } from "../../types/type";
import axios from "axios";

const GlobalRanking = () => {
  const { user } = userDTStore();
  const [rankers, setRankers] = useState<globalRankerT[]>();
  const getRankings = () => {
    const token = window.localStorage.getItem("token");
    axios
      .get("/api/v1/users/topkuser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("res", res);
        setRankers(res.data);
      })
      .catch((e) => {
        console.log("e", e);
      });
  };

  useEffect(() => {
    getRankings();
  }, []);
  return (
    <>
      <RankingHeader />
      <RankerItemWrapper>
        <Title>와우! Nedyu에서 누가 가장 열심히 공부했을까요?</Title>
        <Property style={{ left: "60px" }}>사용자</Property>
        <Property style={{ left: "460px" }}>푼 문제</Property>
        <Property style={{ left: "700px" }}>경험치</Property>
        {rankers?.map((ranker: globalRankerT, idx) => {
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

export default GlobalRanking;

const Title = styled.div`
  width: 100%;
  margin-bottom: 100px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #00110f;
  text-align: center;
`;

const RankerItemWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: calc(50% - 400px);
  padding-bottom: 200px;
`;

const Property = styled.div`
  position: absolute;
  top: 80px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  text-align: center;

  color: #00110f;
`;
