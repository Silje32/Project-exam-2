// A registered user may update a Post they own.

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

