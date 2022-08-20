import React, { useState } from "react";
import styled from "styled-components";
import nest from "../../assets/nest.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Banner = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async () => {
    const data = await axios.post("/api/v1/auth/email/login", {
      email,
      password,
    });
    console.log("data");
  };
  return (
    <Wrapper>
      <Title>
        똑똑똑! 누군가 나의 알을 두드리고 있어요! {"\n"}
        우리 함께 세상의 이야기를 들어봐요!
      </Title>
      <SubTitle>
        정치? 시사? {"\n"} {"\n"}
        어른들이 하는 이야기는 많이 들어봤는데 막상 읽으려고 시도하면 어렵게
        느껴지진 않으셨나요? {"\n"}
        Nedyu랑 공부하면서 쉽고 재미있게 세상의 이야기에 관심을 가져봅시다.
      </SubTitle>
      <Input
        value={email}
        onChange={() => setEmail(email)}
        placeholder="이메일 주소"
        style={{ bottom: "100px" }}
      />
      <Input
        value={password}
        onChange={() => setPassword(password)}
        placeholder="비밀번호"
        style={{ bottom: "50px" }}
      />
      <LoginButton onClick={onSubmit}>로그인</LoginButton>
      <Additional>다양한 뉴스 아티클을 확인하고 싶다면?</Additional>
      <SignUpButton
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </SignUpButton>
      <NestImg src={nest} />
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 424px;
  background: #ffd751;
`;

const NestImg = styled.img`
  position: absolute;
  right: 150px;
  bottom: 0px;
  width: 377px;
  height: 311.17px;
`;

const Title = styled.div`
  position: absolute;
  bottom: 250px;
  left: 147px;
  font-weight: 600;
  font-size: 32px;
  line-height: 50px;
  color: white;
  white-space: pre-wrap;
`;

const SubTitle = styled.div`
  position: absolute;
  left: 147px;
  bottom: 160px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  white-space: pre-wrap;
  color: #303434;
`;

const Input = styled.input`
  position: absolute;
  left: 147px;
  bottom: 0px;
  width: 330px;
  height: 42px;
  padding-left: 14px;
  border: none;
  outline: none;

  background: #ffffff;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  position: absolute;
  bottom: 50px;
  left: 510px;
  width: 96px;
  height: 42px;
  background: #00110f;
  border-radius: 5px;
  line-height: 42px;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: white;
`;

const Additional = styled.span`
  position: absolute;
  left: 147px;
  bottom: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #656666;
`;

const SignUpButton = styled.div`
  position: absolute;
  left: 370px;
  bottom: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;