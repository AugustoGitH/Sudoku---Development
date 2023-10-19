import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        light: string;
      };
      success: {
        main: string;
        light: string;
      };
    };
  }
}
