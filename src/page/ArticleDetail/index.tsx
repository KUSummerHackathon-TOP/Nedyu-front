import react, { useEffect, useState, useRef } from "react";
import Header from "../../common/header";
import styled from "styled-components";
import thumbnail from "../../assets/img/thumbnail.jpeg";
import ArticleHeader from "../../common/articleHeader";
import userDTStore from "../../store/userStore";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import eggChicken from "../../assets/img/egg_chicken.svg";
import eggChicken2 from "../../assets/img/egg_chicken2.svg";
import { detailArticleT } from "../../types/type";

const Loading = () => {
  const srcRef = useRef<string>(eggChicken);
  const [src, setSrc] = useState(srcRef.current);
  const params = useParams();
  const id = params.id;
  const accessToken = window.localStorage.getItem("token");

  const loadArticle = () => {
    axios
      .get(`/api/v1/article/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadArticle();
    srcRef.current = src;
  }, [src]);

  useEffect(() => {
    const toogleImg = setInterval(() => {
      if (srcRef.current === eggChicken) {
        srcRef.current = eggChicken2;
      } else srcRef.current = eggChicken;
      setSrc(srcRef.current);
      console.log("toggle");
    }, 500);

    return () => clearInterval(toogleImg);
  }, []);
  return (
    <Wrapper1>
      <Title>Nedyu가 내 생각을 전송하고 있어요!</Title>
      <Character src={src} />
      <Span>Levy takes Whitbread novel prize</Span>
    </Wrapper1>
  );
};

const Wrapper1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //display: flex;
  //ustify-content: center;
  background: #ffd751;
`;

const Title = styled.div`
  margin-top: 10%;
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #00110f;
`;

const Character = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -30%);
`;

const Span = styled.div`
  position: absolute;
  bottom: 5%;
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #303434;
`;

interface Mockdata {
  id: string;
  title: string;
  company: string;
  date: string;
  thumbnail: string;
  content: string;
}

const ArticleDetail = () => {
  const [scroll, setScroll] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let params: any = useParams();
  const navigate = useNavigate();
  const [summary, setSummary] = useState<string>("");
  const { user } = userDTStore();
  const accessToken = window.localStorage.getItem("token");

  const [articleInfo, setArticleInfo] = useState<detailArticleT>();

  const loadArticle = async () => {
    axios
      .get(`/api/v1/article/${params.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        // console.log("res", res.data);
        setArticleInfo(res.data);
      })
      .catch((e) => {
        console.log("e", e);
      });
  };
  useEffect(() => {
    loadArticle();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 320) {
      setScroll(true);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };

  const summarySubmit = (id: number, content: string) => {
    let score: number = 80;
    console.log(id, content);
    console.log(user);
    const token = window.localStorage.getItem("token");

    axios
      .post(
        "/api/v1/article/evaluate/",
        {
          article_id: id,
          summary: content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("Score", res);

        score = res.data.score;
      })
      .catch((err) => {
        console.log(err);
      });
    if (score !== undefined) {
      setIsLoading(true);
      setTimeout(() => {
        navigate(`/result/${id}`, {
          state: {
            score: score,
          },
        });
      }, 2000);
    } else setIsLoading(true);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        articleInfo && (
          <Wrapper>
            <Header />
            <ArticleHeader isShow={scroll} title={articleInfo?.title} />
            <ArticleContent>
              <HeadLine
                isShow={!scroll}
                url={`data:image/png;base64, ${articleInfo.thumbnail}`}
              >
                {/*<div className="idd">{params.id}</div>*/}
                <div className="company">{articleInfo?.companyName}</div>
                <div className="title">{articleInfo?.title}</div>
              </HeadLine>
              <div id="cont" className="content">
                {articleInfo?.content}
              </div>
            </ArticleContent>
            <SendSummary>
              <div className="introdce">
                뉴스가 우리에게 무엇을 말하고 있나요? 우리 함께 글을 요약해
                봅시다!
              </div>
              <div className="summaryWrapper">
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="summarySubmit"
                  rows={10}
                  placeholder="나만의 생각을 표현해봐!"
                ></textarea>
                <SubmitBtn
                  onClick={() => summarySubmit(Number(params.id), summary)}
                >
                  <div className="subimt">생각 전송</div>
                </SubmitBtn>
              </div>
            </SendSummary>
          </Wrapper>
        )
      )}
    </>
  );
};

export default ArticleDetail;
const SubmitBtn = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 18px 22.5px;
  gap: 8px;
  background: #ffd751;
  border-radius: 999px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
  .submit {
    width: 95px;
    height: 28px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;

    /* 1 */

    color: #00110f;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SendSummary = styled.div`
  position: relative;
  display: flex;
  margin-top: 120px;
  margin-bottom: 120px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 914px;
  .introdce {
    display: flex;
    justify-content: flex-start;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
  }

  .summaryWrapper {
    width: 100%;
    height: 400px;
    margin-top: 24px;
    background: #ffffe2;
    border-radius: 30px;
  }
  .summarySubmit {
    border: none;
    outline: none;
    margin-top: 30px;
    margin-left: 5%;
    display: flex;
    width: 90%;
    height: 70%;
    resize: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    box-sizing: border-box;
    background: #ffffe2;
  }
`;

const ArticleContent = styled.div`
  width: 1440px;

  padding-top: 65px;

  .content {
    padding: 120px 263px 0px 263px;
    width: 941px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33.6px;

    &:: selection {
      background-color: #ffffe2;
    }
  }
`;

const HeadLine = styled.div<{ url?: string; isShow: boolean }>`
  width: 1440px;
  height: 320px;
  left: 0px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  opacity: 0;

  ${({ isShow }) => isShow && "opacity: 1"};

  .idd {
    color: white;
    padding: 120px 263px 0px 263px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }

  .company {
    color: white;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  .title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    /* identical to box height */

    color: white;
    text-align: center;
  }

  .date {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: white;
  }

  .content {
  }
`;
