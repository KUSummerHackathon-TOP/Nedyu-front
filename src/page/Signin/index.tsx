import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import userDTStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, setUserInfo } = userDTStore();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
  }, [user]);
  const onSubmit = async () => {
    try {
      const res = await axios.post("/api/v1/auth/admin/email/login", {
        email,
        password,
      });
      console.log(res);

      setUserInfo({
        id: res.data.user.id,
        email: res.data.user.email,
        firstName: res.data.user.firstName,
        lastName: res.data.user.lastName,
        createdAt: res.data.user.createdAt,
        updatedAt: res.data.user.updatedAt,
        token: res.data.token,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onSubmit}>로그인</Button>
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
