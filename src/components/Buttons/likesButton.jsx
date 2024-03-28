
import { StyledLikesButton } from "../Buttons/buttons.styles";

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