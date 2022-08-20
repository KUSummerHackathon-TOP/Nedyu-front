import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import ArticleDetail from "./page/ArticleDetail";
import Result from "./page/Result";
import ArticleRanking from "./page/ArticleRanking";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/articledetail/:id" element={<ArticleDetail />} />
          <Route path="/result/:id" element={<Result />} />
          <Route path="/ranking/:id" element={<ArticleRanking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
