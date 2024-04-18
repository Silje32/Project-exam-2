import { StyledLikeButton } from "./Button.styles";

function LikeButton() {

    function onButtonClick() {
      
    }
    

    return ( 
         <>
           <StyledLikeButton $isActive={false} onClick={() => onButtonClick()}>
                LIKE 
            </StyledLikeButton>
         </>
    );
}

export default LikeButton;