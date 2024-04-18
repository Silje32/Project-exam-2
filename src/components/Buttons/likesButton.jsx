
import { StyledLikesButton } from "./Button.styles";

function LikesButton() {


    function onButtonClick() {
      
      }
    

    return ( 
         <>
           <StyledLikesButton $isActive={false} onClick={() => onButtonClick()}>
                LIKES
            </StyledLikesButton>
         </>
    );
}

export default LikesButton;