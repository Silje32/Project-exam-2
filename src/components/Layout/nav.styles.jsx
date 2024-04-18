import styled from "styled-components";

export const NavStyling = styled.nav`

ul {
   list-style-type: none;
   padding: 25px 10px;
   display: flex;
   justify-content: space-between;
   min-width: 1470px;
   cursor: pointer;
   background-color: ${(props) => (props.$nav ? "#5EA7EF" : "white")};
}

ul li {
   margin: 0 auto;
}


a {
   color: ${(props) => (props.$nav ? "white" : "black")};
   text-decoration: none;
   font-size: 18px;
   font-family: haboro-serif, times new roman, serif;
   font-style: normal;
   font-weight: 500;
}

&:hover {
   color: #5EA7EF;
}

`; 
