import styled from "styled-components";

export const StyledInput = styled.input`
   border: 2px solid #5EA7EF;
   background: none;
   padding: 20px 40px;
   font-size: 18px;
   min-width: 400px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "white" : "#306FB6")};

   :hover {
      background-color: #C09DDF;
   }   
`

export const StyledMessage = styled.p`
@font-face {
    font-family: 'noveldisplay-mediumxcmp';
    src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
         url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
 }
   font-size: 22px;
   color: ${(props) => (props.$isActive ? "orange" : "red")};

`;

