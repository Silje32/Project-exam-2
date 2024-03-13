import { useState } from 'react';
import { StyledBaseButton } from "./buttons.styles";

function LikeButton() {
    const [count, setCount] = useState(0);

    function onButtonClick() {
        setCount(count + 1);
      }
    

    return ( 
         <>
           <StyledBaseButton $isActive={false} onClick={() => onButtonClick()}>
                LIKE
            </StyledBaseButton>
           <div>{count}</div>
         </>
    );
}

export default LikeButton;