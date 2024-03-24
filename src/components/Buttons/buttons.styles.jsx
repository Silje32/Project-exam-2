import styled from "styled-components";

export const StyledBaseButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   min-width: 200px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   a:hover {
      background-color: "#C09DDF";
   }

`

export const StyledLogoutButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   min-width: 200px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "#707070" : "black")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   a:hover {
      background-color: "#C09DDF";
   }

`
export const StyledFollowButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   min-width: 150px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "#707070" : "pink")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   a:hover {
      background-color: "#C09DDF";
   }
`  

export const StyledCommentsButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   display: flex;
   flex: 2;
   flex-direction: row;
   justify-content: space-between;
   font-size: 22px;
   min-width: 150px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "pink" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   a:hover {
      background-color: "#C09DDF";
   }
`  

export const StyledLikeButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   display: flex;
   flex: 1;
   flex-direction: row;
   justify-content: space-between;
   font-size: 22px;
   min-width: 150px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
      text-align: center;
   }

   a:hover {
      background-color: "#C09DDF";
   }
`  


export const StyledDeleteButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   display: flex;
   flex: 3;
   flex-direction: row;
   justify-content: space-between;
   font-size: 22px;
   min-width: 150px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "#707070" : "black")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   a:hover {
      background-color: "#C09DDF";
   }
   
`
export const StyledPublishButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   min-width: 200px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "#707070" : "black")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   a:hover {
      background-color: "#C09DDF";
   }
`  
;
