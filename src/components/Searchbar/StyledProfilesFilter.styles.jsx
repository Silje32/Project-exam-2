import styled from 'styled-components';

export const StyledProfileFilter = styled.input`
   display: flex;
   flex: 1;
   flex-direction: column;
   border: 2px solid #5EA7EF;
   background: white;
   padding: 10px 10px;
   font-size: 18px;
   margin-left: 955px;
   margin-top: 110px;
   max-width: 50%;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "#306FB6" : "black")};

   &:hover {
      border-color: #C09DDF;
   }    
`
;
