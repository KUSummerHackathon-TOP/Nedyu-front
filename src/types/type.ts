export type articleT = {
  id: string;
  title: string;
  articleShortContent: string;
  thumbnail: string;
  reportName?: string;
  companyName?: string;
};

export type newsT = {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  reportName?: string;
  companyName?: string;
};
export type detailArticleT = {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  reportName?: string;
  categoryName?: string;
  companyName?: string;
};
export type articleRankerT = {
  name: string;
  score: number;
};

export type globalRankerT = {
  name: string;
  score: number;
  prob_num: number;
};

export type userDT = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  token: string;
};
