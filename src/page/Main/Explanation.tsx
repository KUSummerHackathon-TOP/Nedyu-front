import React from "react";
import styled from "styled-components";
import nest from "../../assets/nest.svg";

const Explanation = () => {
  return (
    <Wrapper>
      <NestImg src={nest} />
    </Wrapper>
  );
};

export default Explanation;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 424px;
  background: #ffd751;
`;

const NestImg = styled.img`
  position: absolute;
  right: 200px;
  bottom: 0px;
  width: 400px;
  height: 300px;
`;
