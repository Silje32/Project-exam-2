import { StyledBaseButton } from "./buttons.styles";

function toggleButton() {
    console.log("Button clicked");
   
    
    return ( 
        <div>
            <StyledBaseButton $isActive={false} onClick={() => toggleButton()}>
                REGISTER
            </StyledBaseButton>
        </div>        
    );
}

export default toggleButton;