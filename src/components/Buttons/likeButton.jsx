import { useState } from 'react';
import { StyledLikeButton } from "./buttons.styles";

function LikeButton() {
    const [count, setCount] = useState(0);

    function onButtonClick() {
        setCount(count + 1);
      }
    

    return ( 
         <>
           <StyledLikeButton $isActive={false} onClick={() => onButtonClick()}>
                LIKE
            </StyledLikeButton>
           <div>{count}</div>
         </>
    );
}

export default LikeButton;