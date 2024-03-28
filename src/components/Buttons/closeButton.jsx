import { Link } from "react-router-dom";
import { StyledBaseButton } from "../Buttons/buttons.styles";

function CloseButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledBaseButton onClick={onButtonClick}>
             <Link to={"/home"}>CLOSE</Link>
        </StyledBaseButton>
     );
}

export default CloseButton;