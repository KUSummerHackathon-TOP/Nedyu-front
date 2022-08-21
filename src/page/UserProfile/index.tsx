import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../common/header";
import UserInfo from "./UserInfo";
import ArticleSlider from "./ArticleSlider";

const UserProfile = () => {
  const [name, setName] = useState<string>("");
  return (
    <>
      <Header />
      <UserInfo name={name} setName={(name: string) => setName(name)} />
      <ArticleSlider name={name} />
    </>
  );
};

export default UserProfile;
