import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minute", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const hourSeletor = selector({
  key: "hour",
  get: ({ get }) => {
    const minute = get(minuteState);
    return minute / 60;
  },
  set: ({ set }, newValue) => {
    const minute = Number(newValue) * 60;
    set(minuteState, minute);
  },
});

export const secondSeletor = selector({
  key: "second",
  get: ({ get }) => {
    const minute = get(minuteState);
    return minute * 60;
  },
  set: ({ set }, newValue) => {
    const minute = Number(newValue) / 60;
    set(minuteState, minute);
  },
});
