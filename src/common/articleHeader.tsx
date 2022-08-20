import styled from "styled-components";

interface ArticleHeaderProps {
  isShow: boolean;
  title: string;
}

const ArticleHeader = ({ isShow, title }: ArticleHeaderProps) => {
  return (
    <ArticleHeaderContainer isShow={isShow}>
      <div className="article-title">{title}</div>
    </ArticleHeaderContainer>
  );
};

const ArticleHeaderContainer = styled.div<{ isShow: boolean }>`
  position: fixed;
  width: 1440px;
  height: 101px;
  left: 0px;
  top: 0px;

  margin-top: 65px;

  background: #ffd751;
  opacity: 0;

  ${({ isShow }) => isShow && "opacity: 1"};

  .article-title {
    position: absolute;
    width: 559px;
    height: 39px;
    left: 441px;
    top: 31px;

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
