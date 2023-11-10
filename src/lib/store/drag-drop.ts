import { atom } from "recoil";

interface ITodoState {
  [key: string]: string[];
}
export const toDoState = atom<ITodoState>({
  key: "toDos",
  default: {
    todo: ["a", "d", "e"],
    doing: ["b", "c"],
    done: ["f"],
  },
});
