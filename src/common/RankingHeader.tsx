import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const RankingHeader = () => {
  return (
    <Wrapper>
      <HeaderTitle>랭킹</HeaderTitle>
      <Logo src={logo} />
    </Wrapper>
  );
};

export default RankingHeader;

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  background: white;
  z-index: 2;
`;

const Logo = styled.img`
  position: absolute;
  width: 90px;
  left: 30px;
  top: 30px;
`;

const HeaderTitle = styled.div`
  width: 100%;
  margin-top: 30px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;

  color: black;
`;
