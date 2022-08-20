import React, { useState } from "react";
import styled from "styled-components";
import InputForm from "./InputForm";

const Singup = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  return (
    <Wrapper>
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
      />
    </Wrapper>
  );
};

export default Singup;

const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
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
