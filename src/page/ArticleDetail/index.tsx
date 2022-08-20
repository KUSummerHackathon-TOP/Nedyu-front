import react, { useEffect, useState, useRef } from "react";
import Header from "../../common/Header";
import styled from "styled-components";
import thumbnail from "../../assets/thumbnail.jpeg";
import ArticleHeader from "../../common/articleHeader";
import userDTStore from "../../store/userStore";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import eggChicken from "../../assets/egg_chicken.svg";
import eggChicken2 from "../../assets/egg_chicken2.svg";

const Loading = () => {
  const srcRef = useRef<string>(eggChicken);
  const [src, setSrc] = useState(srcRef.current);

  useEffect(() => {
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
const Article: Mockdata = {
  id: "1",
  title: "Levy takes Whitebread novel prize",
  company: "BBC News",
  date: "2005.01.05",
  thumbnail: thumbnail,
  content:
    "Levy takes Whitbread novel prize Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award. She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty. Geraldine McCaughrean has picked up the children's fiction award for the third time for Not the End of the World. All the category winners go through to compete for the Whitbread Book of the Year title, which carries with it a £25,000 prize. A panel of judges including Sir Trevor McDonald, actor Hugh Grant and writer Joanne Harris will meet up on 25 January to decide the overall winner, with the announcement being made later that evening. Bookmaker William Hill has placed London-based Levy's novel as the 6/4 favourite to win. Small Island, Levy's fourth novel, is set in post-war England and centres on a landlady and her lodgers. One is a Jamaican who joined British troops to fight Hitler but finds life difficult out of uniform when he settles in London. The judges, who included authors Jenny Colgan and Amanda Craig, were full of praise for her writing. \"What could have been a didactic or preachy prospect turns out to hilarious, moving humane and eye-popping. It's hard to think of anybody not enjoying it,\" wrote the judges. The first novel section was won by Susan Fletcher for Eve Green, beating the favourite Jonathan Strange and Mr Norrell by Susanna Clarke. Fletcher has recently graduated from graduated from the University of East Anglia creative writing course. Waterstone's fiction writer buyer Suzie Doore said: \"It is great to see Susan Fletcher win in the first novel category. As a relatively unknown author this award will give her exposure to a wider and mass audience that she may not have reached and is a perfect example of the influence of the Whitbread. \"Fresh out of university she is certainly one to watch.\" In the biography category it was John Guy's The Life of Mary Queen of Scots that was picked as winner. The judges called it \"an impressive and readable piece of scholarship, which cannot fail but leave the reader moved and intrigued by this most tragic and likeable of queens\". Guy has published many histories, including Tudor England. He is a fellow at Clare College, Cambridge and became a honorary research professor of the University of St Andrews in 2003. Michael Symmons Roberts' fourth collection of poems scooped the poetry award. His works mixes mysticism, erotica and philosophy through life, death and resurrection. As well as writing poetry, Symmons Roberts also makes documentary films. Children's winner McCaughrean, who went into magazine publishing after studying teaching, previously won the Whitbread Prize in 1987 with A Little Lower than Angels and in 1994 with Gold Dust. She has previously been the winner of the Blue Peter Book of the YearLevy takes Whitbread novel prize Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award. She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty. Geraldine McCaughrean has picked up the children's fiction award for the third time for Not the End of the World. All the category winners go through to compete for the Whitbread Book of the Year title, which carries with it a £25,000 prize. A panel of judges including Sir Trevor McDonald, actor Hugh Grant and writer Joanne Harris will meet up on 25 January to decide the overall winner, with the announcement being made later that evening. Bookmaker William Hill has placed London-based Levy's novel as the 6/4 favourite to win. Small Island, Levy's fourth novel, is set in post-war England and centres on a landlady and her lodgers. One is a Jamaican who joined British troops to fight Hitler but finds life difficult out of uniform when he settles in London. The judges, who included authors Jenny Colgan and Amanda Craig, were full of praise for her writing. \"What could have been a didactic or preachy prospect turns out to hilarious, moving humane and eye-popping. It's hard to think of anybody not enjoying it,\" wrote the judges. The first novel section was won by Susan Fletcher for Eve Green, beating the favourite Jonathan Strange and Mr Norrell by Susanna Clarke. Fletcher has recently graduated from graduated from the University of East Anglia creative writing course. Waterstone's fiction writer buyer Suzie Doore said: \"It is great to see Susan Fletcher win in the first novel category. As a relatively unknown author this award will give her exposure to a wider and mass audience that she may not have reached and is a perfect example of the influence of the Whitbread. \"Fresh out of university she is certainly one to watch.\" In the biography category it was John Guy's The Life of Mary Queen of Scots that was picked as winner. The judges called it \"an impressive and readable piece of scholarship, which cannot fail but leave the reader moved and intrigued by this most tragic and likeable of queens\". Guy has published many histories, including Tudor England. He is a fellow at Clare College, Cambridge and became a honorary research professor of the University of St Andrews in 2003. Michael Symmons Roberts' fourth collection of poems scooped the poetry award. His works mixes mysticism, erotica and philosophy through life, death and resurrection. As well as writing poetry, Symmons Roberts also makes documentary films. Children's winner McCaughrean, who went into magazine publishing after studying teaching, previously won the Whitbread Prize in 1987 with A Little Lower than Angels and in 1994 with Gold Dust. She has previously been the winner of the Blue Peter Book of the YearLevy takes Whitbread novel prize Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award. She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty. Geraldine McCaughrean has picked up the children's fiction award for the third time for Not the End of the World. All the category winners go through to compete for the Whitbread Book of the Year title, which carries with it a £25,000 prize. A panel of judges including Sir Trevor McDonald, actor Hugh Grant and writer Joanne Harris will meet up on 25 January to decide the overall winner, with the announcement being made later that evening. Bookmaker William Hill has placed London-based Levy's novel as the 6/4 favourite to win. Small Island, Levy's fourth novel, is set in post-war England and centres on a landlady and her lodgers. One is a Jamaican who joined British troops to fight Hitler but finds life difficult out of uniform when he settles in London. The judges, who included authors Jenny Colgan and Amanda Craig, were full of praise for her writing. \"What could have been a didactic or preachy prospect turns out to hilarious, moving humane and eye-popping. It's hard to think of anybody not enjoying it,\" wrote the judges. The first novel section was won by Susan Fletcher for Eve Green, beating the favourite Jonathan Strange and Mr Norrell by Susanna Clarke. Fletcher has recently graduated from graduated from the University of East Anglia creative writing course. Waterstone's fiction writer buyer Suzie Doore said: \"It is great to see Susan Fletcher win in the first novel category. As a relatively unknown author this award will give her exposure to a wider and mass audience that she may not have reached and is a perfect example of the influence of the Whitbread. \"Fresh out of university she is certainly one to watch.\" In the biography category it was John Guy's The Life of Mary Queen of Scots that was picked as winner. The judges called it \"an impressive and readable piece of scholarship, which cannot fail but leave the reader moved and intrigued by this most tragic and likeable of queens\". Guy has published many histories, including Tudor England. He is a fellow at Clare College, Cambridge and became a honorary research professor of the University of St Andrews in 2003. Michael Symmons Roberts' fourth collection of poems scooped the poetry award. His works mixes mysticism, erotica and philosophy through life, death and resurrection. As well as writing poetry, Symmons Roberts also makes documentary films. Children's winner McCaughrean, who went into magazine publishing after studying teaching, previously won the Whitbread Prize in 1987 with A Little Lower than Angels and in 1994 with Gold Dust. She has previously been the winner of the Blue Peter Book of the YearLevy takes Whitbread novel prize Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award. She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty. Geraldine McCaughrean has picked up the children's fiction award for the third time for Not the End of the World. All the category winners go through to compete for the Whitbread Book of the Year title, which carries with it a £25,000 prize. A panel of judges including Sir Trevor McDonald, actor Hugh Grant and writer Joanne Harris will meet up on 25 January to decide the overall winner, with the announcement being made later that evening. Bookmaker William Hill has placed London-based Levy's novel as the 6/4 favourite to win. Small Island, Levy's fourth novel, is set in post-war England and centres on a landlady and her lodgers. One is a Jamaican who joined British troops to fight Hitler but finds life difficult out of uniform when he settles in London. The judges, who included authors Jenny Colgan and Amanda Craig, were full of praise for her writing. \"What could have been a didactic or preachy prospect turns out to hilarious, moving humane and eye-popping. It's hard to think of anybody not enjoying it,\" wrote the judges. The first novel section was won by Susan Fletcher for Eve Green, beating the favourite Jonathan Strange and Mr Norrell by Susanna Clarke. Fletcher has recently graduated from graduated from the University of East Anglia creative writing course. Waterstone's fiction writer buyer Suzie Doore said: \"It is great to see Susan Fletcher win in the first novel category. As a relatively unknown author this award will give her exposure to a wider and mass audience that she may not have reached and is a perfect example of the influence of the Whitbread. \"Fresh out of university she is certainly one to watch.\" In the biography category it was John Guy's The Life of Mary Queen of Scots that was picked as winner. The judges called it \"an impressive and readable piece of scholarship, which cannot fail but leave the reader moved and intrigued by this most tragic and likeable of queens\". Guy has published many histories, including Tudor England. He is a fellow at Clare College, Cambridge and became a honorary research professor of the University of St Andrews in 2003. Michael Symmons Roberts' fourth collection of poems scooped the poetry award. His works mixes mysticism, erotica and philosophy through life, death and resurrection. As well as writing poetry, Symmons Roberts also makes documentary films. Children's winner McCaughrean, who went into magazine publishing after studying teaching, previously won the Whitbread Prize in 1987 with A Little Lower than Angels and in 1994 with Gold Dust. She has previously been the winner of the Blue Peter Book of the YearLevy takes Whitbread novel prize Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award. She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty. Geraldine McCaughrean has picked up the children's fiction award for the third time for Not the End of the World. All the category winners go through to compete for the Whitbread Book of the Year title, which carries with it a £25,000 prize. A panel of judges including Sir Trevor McDonald, actor Hugh Grant and writer Joanne Harris will meet up on 25 January to decide the overall winner, with the announcement being made later that evening. Bookmaker William Hill has placed London-based Levy's novel as the 6/4 favourite to win. Small Island, Levy's fourth novel, is set in post-war England and centres on a landlady and her lodgers. One is a Jamaican who joined British troops to fight Hitler but finds life difficult out of uniform when he settles in London. The judges, who included authors Jenny Colgan and Amanda Craig, were full of praise for her writing. \"What could have been a didactic or preachy prospect turns out to hilarious, moving humane and eye-popping. It's hard to think of anybody not enjoying it,\" wrote the judges. The first novel section was won by Susan Fletcher for Eve Green, beating the favourite Jonathan Strange and Mr Norrell by Susanna Clarke. Fletcher has recently graduated from graduated from the University of East Anglia creative writing course. Waterstone's fiction writer buyer Suzie Doore said: \"It is great to see Susan Fletcher win in the first novel category. As a relatively unknown author this award will give her exposure to a wider and mass audience that she may not have reached and is a perfect example of the influence of the Whitbread. \"Fresh out of university she is certainly one to watch.\" In the biography category it was John Guy's The Life of Mary Queen of Scots that was picked as winner. The judges called it \"an impressive and readable piece of scholarship, which cannot fail but leave the reader moved and intrigued by this most tragic and likeable of queens\". Guy has published many histories, including Tudor England. He is a fellow at Clare College, Cambridge and became a honorary research professor of the University of St Andrews in 2003. Michael Symmons Roberts' fourth collection of poems scooped the poetry award. His works mixes mysticism, erotica and philosophy through life, death and resurrection. As well as writing poetry, Symmons Roberts also makes documentary films. Children's winner McCaughrean, who went into magazine publishing after studying teaching, previously won the Whitbread Prize in 1987 with A Little Lower than Angels and in 1994 with Gold Dust. She has previously been the winner of the Blue Peter Book of the Year",
};

const ArticleDetail = () => {
  const [scroll, setScroll] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let params: any = useParams();
  const navigate = useNavigate();
  const [summary, setSummary] = useState<string>("");
  const { user } = userDTStore();

  useEffect(() => {
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
    // ! type 변경
    let score: number = 80;
    console.log(id, content);
    console.log(user);

    axios
      .post(
        "/api/v1/article/evaluate/",
        {
          article_id: id,
          summary: content,
        },
        {
          headers: {
            Authorization: user.token,
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
        <Wrapper>
          <Header />
          <ArticleHeader isShow={scroll} title={Article.title} />
          <ArticleContent>
            <HeadLine isShow={!scroll} url={Article.thumbnail}>
              <div className="idd">{params.id}</div>
              <div className="company">{Article.company}</div>
              <div className="title">{Article.title}</div>
              <div className="date">{Article.date}</div>
            </HeadLine>
            <div id="cont" className="content">
              {Article.content}
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
    line-height: 28px;

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
