import { StyledPublishButton } from "./Button.styles";

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