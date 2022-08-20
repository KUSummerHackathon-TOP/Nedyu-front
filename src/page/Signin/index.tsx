import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import userDTStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";
const Signin = () => {
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
  const onSignup = () => {
    navigate("/signup");
  };
  return (
    <Wrapper>
      <Box>
        <div className="Logo">Nedyu</div>
        <Input
          className="formbox"
          value={email}
          placeholder="이메일 주소"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="formbox"
          value={password}
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={onSubmit}>
          <div className="submit-btn">로그인</div>
        </Button>
        <div className="footer">
          <div>다양한 뉴스 아티클을 확인하고 싶다면?</div>
          <div onClick={onSignup}>회원가입</div>
        </div>
      </Box>
    </Wrapper>
  );
};

export default Signin;

const Box = styled.div`
  margin-top: 180px;
  width: 358px;
  height: 286px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .Logo {
    margin-bottom: 41px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    /* identical to box height */

    text-align: center;

    /* 6 */

    color: #ffffff;
  }
  .footer {
    margin-top: 10px;
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  background-color: #ffd751;
  width: 100%;
  height: 100%;
`;
const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 13px 20px 13px 20px;
  gap: 8px;
  height: 46px;
  margin-bottom: 10px;
  .formbox {
    width: 100%;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;

  gap: 8px;
  height: 42px;
  margin-top: 32px;
  .submit-btn {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 19px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    /* 6 */

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
