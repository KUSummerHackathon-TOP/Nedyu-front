import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import ArticleDetail from "./page/ArticleDetail";
import Result from "./page/Result";
import ArticleRanking from "./page/ArticleRanking";
import UserProfile from "./page/UserProfile";
import GlobalRanking from "./page/GlobalRanking";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/articledetail/:id" element={<ArticleDetail />} />
          <Route path="/result/:id" element={<Result />} />
          <Route path="/ranking/:id" element={<ArticleRanking />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/ranking" element={<GlobalRanking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
