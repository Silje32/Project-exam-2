// A registered user may update a Post they own.
// Update a post based on its id. This endpoint returns the updated post.

import { StyledUpdateButton } from "./Button.styles";

function UpdateButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledUpdateButton onClick={onButtonClick}>
            UPDATE
        </StyledUpdateButton>
    );
}

export default UpdateButton;

