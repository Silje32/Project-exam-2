import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
     
    body {
        background-color: #5EA7EF;
        font-size: 15px;
        color: black
        flex-grow: 1;
    }

    h2 {
        color: #306FB6;
        text-align: center;
        font-size: 36px;
        font-family: haboro-serif, serif;
        font-style: normal;
        font-weight: 500;
    }

    h3 {
        color: #306FB6;
        font-size: 26px;
        font-family: haboro-serif, serif;
        font-style: normal;
        font-weight: 500;
    }

    h4 {
        color: #306FB6;
        font-size: 21px;
        font-family: haboro-serif, serif;
        font-style: normal;
        font-weight: 400;
    }

    p {
        line-height: 1.5;
    }

    img {
      max-width: 100%;
      margin-top: 20px;  
    }
`;

export default GlobalStyles;