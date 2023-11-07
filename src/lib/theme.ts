import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: string;
    bgColor: string;
    boardBgColor: string;
    cardBgColor: string;
  }
}

export const defaultTheme = {
  color: "black",
  bgColor: "gray",
  boardBgColor: "skyblue",
  cardBgColor: "white",
};
