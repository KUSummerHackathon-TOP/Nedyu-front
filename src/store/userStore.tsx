import create from "zustand";
import { userDT } from "../types/type";

type State = {
  user: userDT | undefined;
  setUserInfo: (data: userDT) => void;
};

const userDTStore = create<State>((set) => ({
  user: undefined,
  setUserInfo: (data: userDT) => set((state) => ({ ...state, user: data })),
}));

export default userDTStore;
