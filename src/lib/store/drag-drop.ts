import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}
interface ITodoState {
  [key: string]: ITodo[];
}
export const toDoState = atom<ITodoState>({
  key: "toDos",
  default: {
    // todo: [],
    // doing: [],
    // done: [],
  },
});
export const draggingBoardState = atom({
  key: "draggingBoard",
  default: "all",
});
