import React from "react";
import styled from "styled-components";
import { globalRankerT } from "../../types/type";

interface Props {
  rank: number;
  ranker: globalRankerT;
}

const RankingItem = ({ rank, ranker }: Props) => {
  return (
    <Wrapper rank={rank}>
      <div className="rank">{rank}</div>
      <div className="name">{ranker.name}</div>
      <div className="solved">{ranker.prob_num}</div>
      <div className="score">{ranker.score.toFixed()}</div>
    </Wrapper>
  );
};

export default RankingItem;

const Wrapper = styled.div<{ rank: number }>`
  position: relative;
  display: block;
  margin-top: 24px;
  width: 800px;
  height: 80px;
  background: ${({ rank }) => (rank <= 3 ? "#ffd751" : "#FFFFE2")};
  border-radius: 30px;
  line-height: 80px;

  .rank {
    display: inline-flex;
    margin-left: 40px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    color: ${({ rank }) => (rank <= 3 ? "#F35000" : "black")};
  }
  .name {
    display: inline-flex;
    margin-left: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
  }

  .solved {
    position: absolute;
    right: 300px;
    top: 25px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    font-size: 24px;
  }
  .score {
    position: absolute;
    right: 40px;
    top: 25px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    font-size: 24px;
  }
`;
