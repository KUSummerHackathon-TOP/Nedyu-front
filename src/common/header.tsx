import React from "react";
import styled from "styled-components";
import logo_black from "../assets/logo_black.svg";
import bar_chart from "../assets/bar_chart.svg";
import account_circle from "../assets/account_circle.svg";
import userDTStore from "../store/userStore";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = userDTStore();
  const navigate = useNavigate();
  const goLogin = () => {
    console.log("click");
    if (user?.token !== undefined) {
      navigate("/profile");
    } else {
      navigate("/signin");
    }
  };
  return (
    <Wrapper>
      <Logo
        src={logo_black}
        onClick={() => {
          navigate("/");
        }}
      />
      <Bar
        src={bar_chart}
        onClick={() => {
          navigate("/ranking");
        }}
      />
      <Account
        onClick={() => {
          goLogin();
        }}
        src={account_circle}
      />
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

  cursor: pointer;
`;

const Bar = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 25%;
  top: 43px;
  cursor: pointer;
`;
const Account = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 20%;
  top: 43px;
  z-index: 10;
  cursor: pointer;
`;
