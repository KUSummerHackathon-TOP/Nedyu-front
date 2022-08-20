import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <Input value={mail} onChange={(e) => setMail(e.target.value)} />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button>로그인</Button>
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
