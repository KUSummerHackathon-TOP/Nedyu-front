import React from "react";
import styled from "styled-components";
import logo_black from "../assets/logo_black.svg";
import bar_chart from "../assets/bar_chart.svg";
import account_circle from "../assets/account_circle.svg";

const Header = () => {
  return (
    <Wrapper>
      <Logo src={logo_black} />
      <Bar src={bar_chart} />
      <Account src={account_circle} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 2;
`;

const Logo = styled.img`
  position: absolute;
  top: 18px;
  left: calc(50% - 65px);
  width: 137px;
  height: 49px;
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
