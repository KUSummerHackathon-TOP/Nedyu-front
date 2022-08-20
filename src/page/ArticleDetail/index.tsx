import react, { useEffect, useState } from "react";
import HeaderSearch from "../../common/header";
import styled from "styled-components";
import thumbnail from "../../assets/thumbnail.jpeg";
import ArticleHeader from "../../common/articleHeader";
interface Mockdata {
  id: number;
  title: string;
  company: string;
  date: string;
  thumbnail: string;
  content: string;
}
const Article: Mockdata = {
  id: 1,
  title: "Levy takes Whitebread novel prize",
  company: "BBC News",
  date: "2005.01.05",
  thumbnail: thumbnail,
  content:
    "Levy takes Whitbread novel prize Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award. She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty. Geraldine McCaughrean has picked up the children's fiction award for the third time for Not the End of the World. All the category winners go through to compete for the Whitbread Book of the Year title, which carries with it a £25,000 prize. A panel of judges including Sir Trevor McDonald, actor Hugh Grant and writer Joanne Harris will meet up on 25 January to decide the overall winner, with the announcement being made later that evening. Bookmaker William Hill has placed London-based Levy's novel as the 6/4 favourite to win. Small Island, Levy's fourth novel, is set in post-war England and centres on a landlady and her lodgers. One is a Jamaican who joined British troops to fight Hitler but finds life difficult out of uniform when he settles in London. The judges, who included authors Jenny Colgan and Amanda Craig, were full of praise for her writing. \"What could have been a didactic or preachy prospect turns out to hilarious, moving humane and eye-popping. It's hard to think of anybody not enjoying it,\" wrote the judges. The first novel section was won by Susan Fletcher for Eve Green, beating the favourite Jonathan Strange and Mr Norrell by Susanna Clarke. Fletcher has recently graduated from graduated from the University of East Anglia creative writing course. Waterstone's fiction writer buyer Suzie Doore said: \"It is great to see Susan Fletcher win in the first novel category. As a relatively unknown author this award will give her exposure to a wider and mass audience that she may not have reached and is a perfect example of the influence of the Whitbread. \"Fresh out of university she is certainly one to watch.\" In the biography category it was John Guy's The Life of Mary Queen of Scots that was picked as winner. The judges called it \"an impressive and readable piece of scholarship, which cannot fail but leave the reader moved and intrigued by this most tragic and likeable of queens\". Guy has published many histories, including Tudor England. He is a fellow at Clare College, Cambridge and became a honorary research professor of the University of St Andrews in 2003. Michael Symmons Roberts' fourth collection of poems scooped the poetry award. His works mixes mysticism, erotica and philosophy through life, death and resurrection. As well as writing poetry, Symmons Roberts also makes documentary films. Children's winner McCaughrean, who went into magazine publishing after studying teaching, previously won the Whitbread Prize in 1987 with A Little Lower than Angels and in 1994 with Gold Dust. She has previously been the winner of the Blue Peter Book of the YearLevy takes Whitbread novel prize Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award. She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty. Geraldine McCaughrean has picked up the children's fiction award for the third time for Not the End of the World. All the category winners go through to compete for the Whitbread Book of the Year title, which carries with it a £25,000 prize. A panel of judges including Sir Trevor McDonald, actor Hugh Grant and writer Joanne Harris will meet up on 25 January to decide the overall winner, with the announcement being made later that evening. Bookmaker William Hill has placed London-based Levy's novel as the 6/4 favourite to win. Small Island, Levy's fourth novel, is set in post-war England and centres on a landlady and her lodgers. One is a Jamaican who joined British troops to fight Hitler but finds life difficult out of uniform when he settles in London. The judges, who included authors Jenny Colgan and Amanda Craig, were full of praise for her writing. \"What could have been a didactic or preachy prospect turns out to hilarious, moving humane and eye-popping. It's hard to think of anybody not enjoying it,\" wrote the judges. The first novel section was won by Susan Fletcher for Eve Green, beating the favourite Jonathan Strange and Mr Norrell by Susanna Clarke. Fletcher has recently graduated from graduated from the University of East Anglia creative writing course. Waterstone's fiction writer buyer Suzie Doore said: \"It is great to see Susan Fletcher win in the first novel category. As a relatively unknown author this award will give her exposure to a wider and mass audience that she may not have reached and is a perfect example of the influence of the Whitbread. \"Fresh out of university she is certainly one to watch.\" In the biography category it was John Guy's The Life of Mary Queen of Scots that was picked as winner. The judges called it \"an impressive and readable piece of scholarship, which cannot fail but leave the reader moved and intrigued by this most tragic and likeable of queens\". Guy has published many histories, including Tudor England. He is a fellow at Clare College, Cambridge and became a honorary research professor of the University of St Andrews in 2003. Michael Symmons Roberts' fourth collection of poems scooped the poetry award. His works mixes mysticism, erotica and philosophy through life, death and resurrection. As well as writing poetry, Symmons Roberts also makes documentary films. Children's winner McCaughrean, who went into magazine publishing after studying teaching, previously won the Whitbread Prize in 1987 with A Little Lower than Angels and in 1994 with Gold Dust. She has previously been the winner of the Blue Peter Book of the YearLevy takes Whitbread novel prize Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award. She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty. Geraldine McCaughrean has picked up the children's fiction award for the third time for Not the End of the World. All the category winners go through to compete for the Whitbread Book of the Year title, which carries with it a £25,000 prize. A panel of judges including Sir Trevor McDonald, actor Hugh Grant and writer Joanne Harris will meet up on 25 January to decide the overall winner, with the announcement being made later that evening. Bookmaker William Hill has placed London-based Levy's novel as the 6/4 favourite to win. Small Island, Levy's fourth novel, is set in post-war England and centres on a landlady and her lodgers. One is a Jamaican who joined British troops to fight Hitler but finds life difficult out of uniform when he settles in London. The judges, who included authors Jenny Colgan and Amanda Craig, were full of praise for her writing. \"What could have been a didactic or preachy prospect turns out to hilarious, moving humane and eye-popping. It's hard to think of anybody not enjoying it,\" wrote the judges. The first novel section was won by Susan Fletcher for Eve Green, beating the favourite Jonathan Strange and Mr Norrell by Susanna Clarke. Fletcher has recently graduated from graduated from the University of East Anglia creative writing course. Waterstone's fiction writer buyer Suzie Doore said: \"It is great to see Susan Fletcher win in the first novel category. As a relatively unknown author this award will give her exposure to a wider and mass audience that she may not have reached and is a perfect example of the influence of the Whitbread. \"Fresh out of university she is certainly one to watch.\" In the biography category it was John Guy's The Life of Mary Queen of Scots that was picked as winner. The judges called it \"an impressive and readable piece of scholarship, which cannot fail but leave the reader moved and intrigued by this most tragic and likeable of queens\". Guy has published many histories, including Tudor England. He is a fellow at Clare College, Cambridge and became a honorary research professor of the University of St Andrews in 2003. Michael Symmons Roberts' fourth collection of poems scooped the poetry award. His works mixes mysticism, erotica and philosophy through life, death and resurrection. As well as writing poetry, Symmons Roberts also makes documentary films. Children's winner McCaughrean, who went into magazine publishing after studying teaching, previously won the Whitbread Prize in 1987 with A Little Lower than Angels and in 1994 with Gold Dust. She has previously been the winner of the Blue Peter Book of the YearLevy takes Whitbread novel prize Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award. She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty. Geraldine McCaughrean has picked up the children's fiction award for the third time for Not the End of the World. All the category winners go through to compete for the Whitbread Book of the Year title, which carries with it a £25,000 prize. A panel of judges including Sir Trevor McDonald, actor Hugh Grant and writer Joanne Harris will meet up on 25 January to decide the overall winner, with the announcement being made later that evening. Bookmaker William Hill has placed London-based Levy's novel as the 6/4 favourite to win. Small Island, Levy's fourth novel, is set in post-war England and centres on a landlady and her lodgers. One is a Jamaican who joined British troops to fight Hitler but finds life difficult out of uniform when he settles in London. The judges, who included authors Jenny Colgan and Amanda Craig, were full of praise for her writing. \"What could have been a didactic or preachy prospect turns out to hilarious, moving humane and eye-popping. It's hard to think of anybody not enjoying it,\" wrote the judges. The first novel section was won by Susan Fletcher for Eve Green, beating the favourite Jonathan Strange and Mr Norrell by Susanna Clarke. Fletcher has recently graduated from graduated from the University of East Anglia creative writing course. Waterstone's fiction writer buyer Suzie Doore said: \"It is great to see Susan Fletcher win in the first novel category. As a relatively unknown author this award will give her exposure to a wider and mass audience that she may not have reached and is a perfect example of the influence of the Whitbread. \"Fresh out of university she is certainly one to watch.\" In the biography category it was John Guy's The Life of Mary Queen of Scots that was picked as winner. The judges called it \"an impressive and readable piece of scholarship, which cannot fail but leave the reader moved and intrigued by this most tragic and likeable of queens\". Guy has published many histories, including Tudor England. He is a fellow at Clare College, Cambridge and became a honorary research professor of the University of St Andrews in 2003. Michael Symmons Roberts' fourth collection of poems scooped the poetry award. His works mixes mysticism, erotica and philosophy through life, death and resurrection. As well as writing poetry, Symmons Roberts also makes documentary films. Children's winner McCaughrean, who went into magazine publishing after studying teaching, previously won the Whitbread Prize in 1987 with A Little Lower than Angels and in 1994 with Gold Dust. She has previously been the winner of the Blue Peter Book of the YearLevy takes Whitbread novel prize Orange Prize winner Andrea Levy has seen her book Small Island win the Whitbread Novel of the Year Award. She is now favourite to win the overall prize after beating Booker winner Alan Hollinghurst's The Line of Beauty. Geraldine McCaughrean has picked up the children's fiction award for the third time for Not the End of the World. All the category winners go through to compete for the Whitbread Book of the Year title, which carries with it a £25,000 prize. A panel of judges including Sir Trevor McDonald, actor Hugh Grant and writer Joanne Harris will meet up on 25 January to decide the overall winner, with the announcement being made later that evening. Bookmaker William Hill has placed London-based Levy's novel as the 6/4 favourite to win. Small Island, Levy's fourth novel, is set in post-war England and centres on a landlady and her lodgers. One is a Jamaican who joined British troops to fight Hitler but finds life difficult out of uniform when he settles in London. The judges, who included authors Jenny Colgan and Amanda Craig, were full of praise for her writing. \"What could have been a didactic or preachy prospect turns out to hilarious, moving humane and eye-popping. It's hard to think of anybody not enjoying it,\" wrote the judges. The first novel section was won by Susan Fletcher for Eve Green, beating the favourite Jonathan Strange and Mr Norrell by Susanna Clarke. Fletcher has recently graduated from graduated from the University of East Anglia creative writing course. Waterstone's fiction writer buyer Suzie Doore said: \"It is great to see Susan Fletcher win in the first novel category. As a relatively unknown author this award will give her exposure to a wider and mass audience that she may not have reached and is a perfect example of the influence of the Whitbread. \"Fresh out of university she is certainly one to watch.\" In the biography category it was John Guy's The Life of Mary Queen of Scots that was picked as winner. The judges called it \"an impressive and readable piece of scholarship, which cannot fail but leave the reader moved and intrigued by this most tragic and likeable of queens\". Guy has published many histories, including Tudor England. He is a fellow at Clare College, Cambridge and became a honorary research professor of the University of St Andrews in 2003. Michael Symmons Roberts' fourth collection of poems scooped the poetry award. His works mixes mysticism, erotica and philosophy through life, death and resurrection. As well as writing poetry, Symmons Roberts also makes documentary films. Children's winner McCaughrean, who went into magazine publishing after studying teaching, previously won the Whitbread Prize in 1987 with A Little Lower than Angels and in 1994 with Gold Dust. She has previously been the winner of the Blue Peter Book of the Year",
};
const ArticleDetail = () => {
  const [scroll, setScroll] = useState(false);

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
      console.log(scroll);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };

  return (
    <div>
      <HeaderSearch />
      <ArticleHeader isShow={scroll} title={Article.title} />
      <ArticleContent>
        <HeadLine isShow={!scroll} url={Article.thumbnail}>
          <div className="company">{Article.company}</div>
          <div className="title">{Article.title}</div>
          <div className="date">{Article.date}</div>
        </HeadLine>
        <div className="content">{Article.content}</div>
      </ArticleContent>
    </div>
  );
};

export default ArticleDetail;
const ArticleContent = styled.div`
  width: 1440px;

  padding-top: 65px;

  .content {
    padding: 120px 263px 0px 263px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
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
