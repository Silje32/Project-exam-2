import { useState } from 'react';
import { StyledProfileLikeButton } from "../Cards/buttonCard.styles";

function LikeButton() {
    const [count, setCount] = useState(0);

    function onButtonClick() {
        setCount(count + 1);
      }
    

    return ( 
         <>
           <StyledProfileLikeButton $isActive={false} onClick={() => onButtonClick()}>
                LIKE
            </StyledProfileLikeButton>
           <div>{count}</div>
         </>
    );
}

export default LikeButton;