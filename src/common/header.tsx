import React, { useState } from "react";
import styled from "styled-components";
import logo_black from "../assets/img/logo_black.svg";
import bar_chart from "../assets/img/bar_chart.svg";
import account_circle from "../assets/img/account_circle.svg";
import smile from "../assets/img/smile.svg";
import userDTStore from "../store/userStore";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  //const { user } = userDTStore();
  const userToken = window.localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <>
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
            if (userToken) {
              if (showDropdown) setShowDropdown(false);
              else setShowDropdown(true);
            } else {
              navigate("/signin");
            }
          }}
          src={userToken ? smile : account_circle}
        />
      </Wrapper>
      {showDropdown && <DropDown close={() => setShowDropdown(false)} />}
    </>
  );
};

export default Header;

const DropDown = ({ close }: { close: () => void }) => {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile");
  };
  const signOut = () => {
    window.localStorage.clear();
    navigate("/");
    close();
  };
  return (
    <DropDownWrapper>
      <DropDownOption onClick={goToProfile}>마이페이지</DropDownOption>
      <Divider />
      <DropDownOption style={{ color: "#F35000" }} onClick={signOut}>
        로그아웃
      </DropDownOption>
    </DropDownWrapper>
  );
};

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

const DropDownWrapper = styled.div`
  position: absolute;
  right: 150px;
  top: 80px;
  width: 150px;
  height: 80px;
  border: 1px solid black;
  z-index: 100;
  background: #ffffff;
`;

const DropDownOption = styled.div`
  width: 150px;
  height: 40px;
  margin-left: 10px;
  line-height: 40px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #00110f;
  cursor: pointer;
`;

const Divider = styled.div`
  positon: absolute;
  top: 40px;
  width: 150px;
  height: 0px;
  border-bottom: 1px solid black;
`;
