import styled from "styled-components";

export const NavStyling = styled.nav`

ul {
   list-style-type: none;
   padding: 25px 10px;
   display: flex;
   justify-content: space-between;
   font-size: 18px;
   font-family: haboro-serif, times new roman, serif;
   font-style: normal;
   font-weight: 500;
   min-width: 1470px;
   margin: 0 auto;
   cursor: pointer;
   color: ${(props) => (props.$nav ? "white" : "black")};
   background-color: ${(props) => (props.$nav ? "white" : "#5EA7EF")};
}

:hover {
   color: white;
}

`;
