import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import ArticleDetail from "./page/ArticleDetail";
import Result from "./page/Result";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newsdetail/:id" element={<ArticleDetail />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
