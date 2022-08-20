import React from "react";
import styled from "styled-components";

const UserInfo = () => {
  return (
    <Wrapper>
      <Content>오늘은 어떤 뉴스를 읽을까요? </Content>
      <UserName>Nedyu12</UserName>
      <UserEmail>NN@gmail.com</UserEmail>
      <UserHistory>
        <span className="name">Nedyu12</span>
        <span className="solved">87</span>
        <span className="exp">4423</span>
      </UserHistory>
    </Wrapper>
  );
};

export default UserInfo;

const Wrapper = styled.div``;

const Content = styled.div`
  position: absolute;
  top: 140px;
  left: 400px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #00110f;
`;

const UserName = styled.div`
  position: absolute;
  top: 180px;
  left: 400px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #00110f;
  margin-bottom: 10px;
`;

const UserEmail = styled.div`
  position: absolute;
  top: 220px;
  left: 400px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #656666;
`;

const UserHistory = styled.div`
  position: absolute;
  top: 300px;
  left: calc(50% - 340px);
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
