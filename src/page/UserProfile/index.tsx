import React from "react";
import styled from "styled-components";
import Header from "../../common/header";
import UserInfo from "./UserInfo";
import ArticleSlider from "./ArticleSlider";

const UserProfile = () => {
  return (
    <>
      <Header />
      <UserInfo />
      <ArticleSlider />
    </>
  );
};

export default UserProfile;
