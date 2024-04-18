import { Link } from "react-router-dom";
import { StyledBaseButton } from "../buttons/Button.styles";

function ViewPostButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledBaseButton onClick={onButtonClick}>
             <Link to={"/my-profile/:id"}>VIEW POST</Link>
        </StyledBaseButton>
     );
}

export default ViewPostButton;