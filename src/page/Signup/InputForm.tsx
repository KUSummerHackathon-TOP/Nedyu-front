import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  isValidate?: boolean;
  errorMessage?: string;
}

const InputForm = ({
  value,
  placeholder,
  errorMessage,
  isValidate,
  setValue,
}: Props) => {
  const [errorMsg, setErrorMsg] = useState(errorMessage);
  useEffect(() => {
    if (value === "") {
      setErrorMsg("필수 입력 항목입니다!");
      return;
    }
    if (isValidate === true || isValidate === undefined) {
      setErrorMsg("");
      return;
    }
    setErrorMsg(errorMessage);
  }, [value]);

  useEffect(() => {
    if (isValidate === true || isValidate === undefined) return;
    setErrorMsg(errorMessage);
  }, [isValidate]);
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
  width: 550px;
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
