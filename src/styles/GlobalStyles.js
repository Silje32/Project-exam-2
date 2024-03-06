import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
     
    body {
        background-color: pink;
        font-size: 15px;
        color: black
        flex-grow: 1;
    }
`;

export default GlobalStyles;