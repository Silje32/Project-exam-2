import { Link } from "react-router-dom";
import { StyledBaseButton } from "../Buttons/buttons.styles";

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