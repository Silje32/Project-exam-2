import { Link } from "react-router-dom";
import { StyledBaseButton } from "../Buttons/buttons.styles";

function ViewProfileButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledBaseButton onClick={onButtonClick}>
             <Link to={"/home/:id"}>VIEW PROFILE</Link>
        </StyledBaseButton>
     );
}

export default ViewProfileButton;