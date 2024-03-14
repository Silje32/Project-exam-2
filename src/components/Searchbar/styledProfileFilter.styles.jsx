import styled from 'styled-components';

export const StyledProfileFilter = styled.input`
   display: flex;
   flex-direction: column;
   border: 2px solid #5EA7EF;
   background: none;
   padding: 10px 20px;
   margin-bottom: 20px;
   font-size: 18px;
   min-width: 200px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "#306FB6" : "black")};

   :hover {
      border-color: #C09DDF;
   }    
`

