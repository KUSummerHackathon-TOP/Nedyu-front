export type articleT = {
  id: string;
  title: string;
  company: string;
  date: string;
  thumbnail: string;
  content: string;
};

export type articleRankerT = {
  name: string;
  score: number;
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
