import {DefaultTheme} from 'styled-components';

const themes = {
    borderRadius: "6px",
    colors:{
        yellow: "#FFE000",
        white: "#fafafa",
        lightYellow: "#FFE235",
        black: "#221D1D",
        lightBlue: "#06ABEC",
        blue: "#337AB7",
        lightGrey: "#6C6C6C",
        lighterGrey: "#B7B7B7",
        grey: "#3c3c3c",
        darkGrey: "#1e2021",
    }
    // displayHeavyFont: "normal normal bold 3.6rem/4.8rem 'Saira'",
    // headlineLightFont: "normal normal 400 2.4rem/3.2rem 'Saira'",
    // titleHeavyFont: "normal normal bold 2rem/2.8rem 'Saira'",
    // titleLightFont: "normal normal 400 2rem/2.8rem 'Saira'",
    // subheaderLightFont: "normal normal 400 1.6rem/2.4rem 'Archivo'",
    // subheaderHeavyFont: "normal normal 600 1.6rem/2.4rem 'Archivo'",
    // bodyLightFont: "normal normal 400 1.4rem/2rem 'Archivo'"
};
export type MyTheme = typeof themes;

export default {themes};