import React, { useState } from "react";
import styled from "styled-components";
import nest from "../../assets/nest.svg";
import axios from "axios";

const Explanation = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async () => {
    const data = await axios.put("/api/v1/auth/email/login", {
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
      <Input
        value={email}
        onChange={() => setEmail(email)}
        placeholder="이메일 주소"
        style={{ bottom: "130px" }}
      />
      <Input
        value={password}
        onChange={() => setPassword(password)}
        placeholder="비밀번호"
        style={{ bottom: "80px" }}
      />
      <LoginButton onClick={onSubmit}>로그인</LoginButton>
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
  right: 150px;
  bottom: 0px;
  width: 377px;
  height: 311.17px;
`;

const Title = styled.div`
  position: absolute;
  bottom: 250px;
  left: 50px;
  font-weight: 600;
  font-size: 32px;
  line-height: 50px;
  color: white;
  white-space: pre-wrap;
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
  bottom: 80px;
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
