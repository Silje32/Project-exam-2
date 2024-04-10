import { Link } from "react-router-dom";
import { StyledBaseButton } from "../Buttons/buttons.styles";

function BackToProfileButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledBaseButton onClick={onButtonClick}>
             <Link to={"/my-profile"}>BACK</Link>
        </StyledBaseButton>
     );
}

export default BackToProfileButton;