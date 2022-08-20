import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RankingHeader from "../../common/rankingHeader";

const ArticleRanking = () => {
  const params = useParams();
  const id = params.id;
  return (
    <>
      <RankingHeader />
    </>
  );
};

export default ArticleRanking;
