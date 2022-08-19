import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import ArticleDetail from "./page/ArticleDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newsdetail" element={<ArticleDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
