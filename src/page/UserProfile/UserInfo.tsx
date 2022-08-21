import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArticleSlider from "../Main/ArticleSlider";
import axios from "axios";
import userDTStore from "../../store/userStore";

interface Props {
  name: string;
  setName: (name: string) => void;
}

const UserInfo = ({ name, setName }: Props) => {
  const { user } = userDTStore();
  //const [name, setName] = useState<string>();
  const [exp, setExp] = useState<number>();
  const [probNum, setProbNum] = useState<number>();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axios
      .get("/api/v1/users/getUserInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data) {
          console.log("res.data", res.data);
          setExp(res.data.exp);
          setProbNum(res.data.prob_num);
          setName(res.data.firstName + " " + res.data.lastName);
        }
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  return (
    <Wrapper>
      <Content>오늘은 어떤 뉴스를 읽을까요? </Content>
      <UserName>{name} </UserName>
      <UserEmail>{user?.email && user?.email}</UserEmail>
      <UserHistory>
        <span className="name">{name}</span>
        <span className="solved">{probNum}</span>
        <span className="exp">{exp?.toFixed()}</span>
      </UserHistory>
    </Wrapper>
  );
};

export default UserInfo;

const Wrapper = styled.div`
  position: absolute;
  top: 200px;
`;

const Content = styled.div`
  margin-top: 0px;
  margin-left: 400px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #00110f;
`;

const UserName = styled.div`
  margin-top: 20px;
  margin-left: 400px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #00110f;
  margin-bottom: 10px;
`;

const UserEmail = styled.div`
  margin-top: 10px;
  margin-left: 400px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #656666;
`;

const UserHistory = styled.div`
  margin-top: 50px;
  margin-left: 50%;
  width: 681px;
  height: 89px;
  background: #ffffe2;
  border-radius: 30px;

  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 89px;
  color: #00110f;

  .name {
    margin-left: 5%;
  }

  .solved {
    margin-left: 200px;
  }

  .exp {
    margin-left: 200px;
  }
`;
