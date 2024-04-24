import { Link } from "react-router-dom";
import { StyledCloseButton } from "./Button.styles";

function CloseButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledCloseButton onClick={onButtonClick}>
             <Link to={"/home"}>BACK</Link>
        </StyledCloseButton>
     );
}

export default CloseButton;