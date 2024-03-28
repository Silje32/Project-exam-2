import { StyledPublishButton } from "../Buttons/buttons.styles";

function PublishButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledPublishButton onClick={onButtonClick}>
             PUBLISH
        </StyledPublishButton>
     );
}

export default PublishButton;