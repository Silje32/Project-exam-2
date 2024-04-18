import { Link } from "react-router-dom";
import { StyledBackToProfileButton } from "./Buttons.styles";

function BackToProfileButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledBackToProfileButton onClick={onButtonClick}>
             <Link to={"/my-profile"}>BACK</Link>
        </StyledBackToProfileButton>
     );
}

export default BackToProfileButton;