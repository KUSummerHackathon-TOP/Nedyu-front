import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  isValidate?: () => void;
  errorMessage?: string;
}

const InputForm = ({ value, placeholder, setValue }: Props) => {
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    if (value === "") {
      setErrorMsg("필수 입력 항목입니다!");
      return;
    }
    setErrorMsg("");
    console.log("value", value);
  }, [value]);
  return (
    <Wrapper>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        borderColor={errorMsg !== "" ? "#F35000" : "#FFD751"}
      />
      {errorMsg !== "" && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </Wrapper>
  );
};

export default InputForm;

const Wrapper = styled.div`
  margin-bottom: 32px;
`;

const Input = styled.input<{ borderColor: string }>`
  width: 680px;
  border: none;
  outline: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${({ borderColor }) => borderColor};

  &::placeholder {
    color: #a0a3a3;
  }
`;

const ErrorMsg = styled.div`
  margin-top: 20px;
  color: #f35000;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
`;
