import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const onClickSubmit = async () => {
    //회원가입 api 호출
    if (password !== passwordConfirm) {
      console.log("비밀번호 불일치");
      //예외처리
    }
    try {
      const requestBody = {
        email,
        password,
        firstName,
        lastName,
      };
      console.log("requestBody", requestBody);
      const data = await axios.post("/api/v1/auth/email/register", requestBody);
      console.log("data", data);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <>
      <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <Input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Input
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        placeholder="Password Confirm"
      />
      <Button onClick={onClickSubmit}>회원가입</Button>
    </>
  );
};

export default SignUp;

const Input = styled.input`
  display: block;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
`;
