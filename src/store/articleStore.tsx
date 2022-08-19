import create from "zustand";
import { articleT } from "../types/type";

type State = {
  articleList: articleT[];
  setArticleList: (articles: articleT[]) => void;
};

const useArticleStore = create<State>((set) => ({
  articleList: [],
  setArticleList: (data: articleT[]) =>
    set((state) => ({ ...state, articleList: data })),
}));
