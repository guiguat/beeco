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
        altGrey: "#F4F4F4",
        darkGrey: "#1e2021",
        waringRed: "#FF3232"
    }
};
export type MyTheme = typeof themes;

export default themes;