import React, { useState } from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const checkIsSamePassword = () => {
    if (password === passwordConfirm) return true;
    else return false;
  };

  const onSubmit = () => {
    if (!fullFilled) return;
    axios
      .post("/api/v1/auth/admin/email/register", {
        email,
        password,
        firstName,
        lastName,
      })
      .then((res) => {
        console.log("res", res);
        if (res.status === 201) {
          console.log("회원가입 성공");
          navigate("/");
        }
      })
      .catch((e) => {
        console.log("e", e);
      });
  };

  const fullFilled =
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    password !== "" &&
    passwordConfirm !== "" &&
    checkIsSamePassword();

  return (
    <>
      <Header />
      <FormWrapper>
        <Field>이름</Field>
        <InputForm
          value={firstName}
          placeholder="First name"
          setValue={(value) => setFirstName(value)}
        />
        <InputForm
          value={lastName}
          placeholder="Last name"
          setValue={(value) => setLastName(value)}
        />
        <Field>이메일</Field>
        <InputForm
          value={email}
          placeholder="Email"
          setValue={(value) => setEmail(value)}
        />
        <Field>비밀번호</Field>
        <InputForm
          value={password}
          placeholder="Password"
          setValue={(value) => setPassword(value)}
        />
        <InputForm
          value={passwordConfirm}
          placeholder="Password Confirm"
          setValue={(value) => setPasswordConfirm(value)}
          isValidate={checkIsSamePassword()}
          errorMessage="비밀번호가 일치하지않습니다!"
        />
      </FormWrapper>
      <BottomBar>
        <SignInButton FullFilled={fullFilled} onClick={onSubmit}>
          가입하기
        </SignInButton>
      </BottomBar>
    </>
  );
};

export default Signup;

const FormWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: calc(50% - 275px);
  padding-bottom: 200px;
`;

const Field = styled.div`
  margin-bottom: 40px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #00110f;
`;

const BottomBar = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 100px;
  background: #ffd751;
`;

const SignInButton = styled.div<{ FullFilled: boolean }>`
  position: absolute;
  right: 30px;
  bottom: 18px;
  width: 134px;
  height: 64px;
  border-radius: 64px;
  background: #ffffff;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 64px;
  text-align: center;
  color: ${({ FullFilled }) => (FullFilled ? "black" : "#d6d6d6")};

  ${({ FullFilled }) => (FullFilled ? "cursor: pointer" : "cursor: default")};
`;
