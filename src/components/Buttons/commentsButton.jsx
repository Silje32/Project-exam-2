// A registered user may create a comment on any Post. 

import { Link } from "react-router-dom";
import { StyledCommentsButton } from "./Button.styles";

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