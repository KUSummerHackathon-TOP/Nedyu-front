import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import bar_chart from "../assets/bar_chart.svg";
import account_circle from "../assets/account_circle.svg";
import { useNavigate } from "react-router-dom";
const RankingHeader = () => {
  const navigate = useNavigate();
  const onHome = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <HeaderTitle>랭킹</HeaderTitle>
      <Logo src={logo} onClick={onHome} />
      <Bar src={bar_chart} />
      <Account src={account_circle} />
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
const Bar = styled.img`
  position: absolute;
  right: 25%;
  top: 43px;
`;
const Account = styled.img`
  position: absolute;
  right: 20%;
  top: 43px;
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
