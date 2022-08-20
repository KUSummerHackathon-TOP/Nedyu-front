import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const RankingHeader = () => {
  return (
    <Wrapper>
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
`;

const Logo = styled.img`
  position: absolute;
  left: 30px;
  top: 30px;
`;
