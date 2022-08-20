import styled from "styled-components";
import { useState, useEffect } from "react";
interface ArticleHeaderProps {
  isShow: boolean;
  title: string;
}
const useScroll = () => {
  const [scroll, setScroll] = useState({ y: 0 });
  const onScroll = () => {
    setScroll({ y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll); // scorll할 때 onScroll 이벤트 핸들러 지정
    return () => window.removeEventListener("scroll", onScroll); // clean up
  }, []);
  return scroll;
};

const ArticleHeader = ({ isShow, title }: ArticleHeaderProps) => {
  const root = document.getElementById("cont");
  const rootHeight = root ? root.offsetHeight : 0;

  const { y } = useScroll();
  return (
    <ArticleHeaderContainer isShow={isShow} progress={(y / rootHeight) * 100}>
      <div className="progress-bar"></div>
      <div className="basic-background"></div>
      <div className="article-title">{title}</div>
    </ArticleHeaderContainer>
  );
};

const ArticleHeaderContainer = styled.div<{
  isShow: boolean;
  progress: number;
}>`
  position: fixed;
  width: 1440px;
  height: 70px;
  left: 0px;
  top: 0px;
  margin-top: 80px;
  background: white;
  .basic-background {
    background: white;
    z-index: 1;
  }
  .progress-bar {
    background: #ffd751;
    width: ${({ progress }) => progress}%;
    z-index: 5;
    height: 100%;
  }
  opacity: 0;

  ${({ isShow }) => isShow && "opacity: 1"};

  .article-title {
    position: absolute;
    width: 559px;
    height: 39px;
    left: 441px;
    top: 15px;
    z-index: 10;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;

    /* 2 */

    color: #303434;
  }
`;

export default ArticleHeader;
