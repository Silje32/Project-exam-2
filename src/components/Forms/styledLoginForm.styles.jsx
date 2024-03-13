import styled from "styled-components";

export const StyledInput = styled.input`
   border: 2px solid #5EA7EF;
   background: none;
   padding: 10px 30px;
   margin-bottom: 20px;
   font-size: 18px;
   min-width: 400px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "#306FB6" : "black")};
   display: block;

   :hover {
      border-color: #C09DDF;
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

`

export const StyledFieldset = styled.fieldset`
  padding: 20px;
  border: none;

`  

  export const StyledLabel = styled.label`
  @font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
  font-size: 20px;

`;

