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

   :hover {
      background-color: "#C09DDF";
   }

`

export const StyledViewAllProfilesButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   max-width: 260px;
   margin-left: 1018px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   :hover {
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
   min-width: 100px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "#707070" : "black")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   :hover {
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
   padding: 12px 25px;
   display: flex;
   flex: 2;
   flex-direction: column;
   font-size: 20px;
   width: 30%;
   margin-right: 210px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "pink" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   :hover {
      background-color: "#C09DDF";
   }
`  

export const StyledUpdateButton = styled.button`
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
   flex-direction: column;
   font-size: 22px;
   margin-right: 10px;
   width: 20%; 
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "pink" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   :hover {
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
   font-size: 22px;
   width: 20%;
   margin-right: 10px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
      text-align: center;
      
   }

   &:hover {
      background-color: "#C09DDF";
   }
`  

export const StyledLikesButton = styled.button`
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
   border-color: #5EA7EF;
   margin-right: 20px;
   color: ${(props) => (props.$isActive ? "blue" : "black")};
   background-color: ${(props) => (props.$isActive ? "black" : "white")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "black")};
      text-align: center;
      
   }

   &:hover {
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
   margin-right: 20px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "#707070" : "black")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   &:hover {
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

   &:hover {
      background-color: "#C09DDF";
   }
`

export const StyledBackToProfileButton = styled.button`
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

   :hover {
      background-color: "#C09DDF";
   }

`

export const StyledBackToHomeButton = styled.button`
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
   margin-left: 920px;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   :hover {
      background-color: "#C09DDF";
   }

`

export const StyledCloseButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   width: 30%;
   margin-left: 500px;
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
;
