import { Link } from "react-router-dom";
import { StyledCommentsButton } from "../Buttons/buttons.styles";

function CommentsButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledCommentsButton onClick={onButtonClick}>
            <Link to={"comments/${id}"}>COMMENTS</Link>
        </StyledCommentsButton>
     );
}

export default CommentsButton;