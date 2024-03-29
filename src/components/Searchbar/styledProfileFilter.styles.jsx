import styled from 'styled-components';

export const StyledProfileFilter = styled.input`
   border: 2px solid #5EA7EF;
   background: white;
   padding: 10px 20px;
   font-size: 18px;
   min-width: 500px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "#306FB6" : "black")};

   :hover {
      border-color: #C09DDF;
   }    
`
;
