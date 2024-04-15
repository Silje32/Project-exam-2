import { Link } from "react-router-dom";
import { StyledBaseButton } from "../buttons/Buttons.styles";

function ViewPostButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledBaseButton onClick={onButtonClick}>
             <Link to={"/home/:id"}>VIEW POST</Link>
        </StyledBaseButton>
     );
}

export default ViewPostButton;