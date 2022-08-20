import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import userDTStore from "../../store/userStore";
const Login = () => {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, setUserInfo } = userDTStore();

  const submitLogin = (mail: string, password: string) => {
    const requestBody = {
      email: mail,
      password: password,
    };

    axios
      .post("/api/v1/auth/email/login", requestBody)
      .then((res) => {
        setUserInfo({
          id: res.user.id,
          email: res.user.email,
          firstName: res.user.firstName,
          lastName: res.user.lastName,
          createdAt: res.user.createdAt,
          updatedAt: res.user.updatedAt,
          token: res.token,
        });
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Input value={mail} onChange={(e) => setMail(e.target.value)} />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={() => submitLogin(mail, password)}>로그인</Button>
    </>
  );
};

export default Login;

const Input = styled.input`
  display: block;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
`;
