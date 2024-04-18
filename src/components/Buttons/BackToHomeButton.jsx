import { Link } from "react-router-dom";
import { StyledBackToHomeButton } from "./Button.styles";

function BackToHomeButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledBackToHomeButton onClick={onButtonClick}>
             <Link to={"/home"}>BACK</Link>
        </StyledBackToHomeButton>
     );
}

export default BackToHomeButton;