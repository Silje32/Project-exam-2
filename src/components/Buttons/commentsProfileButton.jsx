import { Link } from "react-router-dom";
import { StyledProfileCommentsButton } from "../Buttons/buttons.styles";

function CommentsButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledProfileCommentsButton onClick={onButtonClick}>
            <Link to={"comments/${id}"}>COMMENTS</Link>
        </StyledProfileCommentsButton>
     );
}

export default CommentsButton;