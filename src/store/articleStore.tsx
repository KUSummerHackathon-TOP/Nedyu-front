import create from "zustand";
import { articleT } from "../types/type";

type State = {
  articleList: articleT[];
  similarArticleList: articleT[];
  setArticleList: (articles: articleT[]) => void;
  setSimilarArticleList: (articles: articleT[]) => void;
};

const useArticleStore = create<State>((set) => ({
  articleList: [],
  similarArticleList: [],
  setArticleList: (data: articleT[]) =>
    set((state) => ({ ...state, articleList: data })),
  setSimilarArticleList: (data: articleT[]) => {
    set((state) => ({ ...state, similarArticleList: data }));
  },
}));

export default useArticleStore;
