import styled from "styled-components";

export const StyledDeletePostButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   display: flex;
   flex: 4;
   flex-direction: row;
   font-size: 22px;
   width: 140px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "#707070" : "black")};

   &:hover {
      background-color: "#C09DDF";
   }

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }
   
`

export const StyledDeleteCommentButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   display: flex;
   flex: 4;
   flex-direction: row;
   font-size: 22px;
   width: 140px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "#707070" : "black")};

   &:hover {
      background-color: "#C09DDF";
   }

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }
   
`;

