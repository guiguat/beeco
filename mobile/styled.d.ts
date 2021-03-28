import styled from "styled-components";

declare module "styled-components" {
  export default interface DefaultTheme {
    borderRadius:string,
    colors: {
      white: string;
      yellow: string;
      lightYellow: string;
      black: string;
      lightBlue: string;
      blue: string;
      lightgrey: string;
      lighterGrey: string;
      grey: string;
      darkgrey: string;
    };
  }
}

// displayHeavyFont: "normal normal bold 3.6rem/4.8rem 'Saira'",
// headlineLightFont: "normal normal 400 2.4rem/3.2rem 'Saira'",
// titleHeavyFont: "normal normal bold 2rem/2.8rem 'Saira'",
// titleLightFont: "normal normal 400 2rem/2.8rem 'Saira'",
// subheaderLightFont: "normal normal 400 1.6rem/2.4rem 'Archivo'",
// subheaderHeavyFont: "normal normal 600 1.6rem/2.4rem 'Archivo'",
// bodyLightFont: "normal normal 400 1.4rem/2rem 'Archivo'"
