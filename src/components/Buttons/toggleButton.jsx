import { StyledBaseButton } from "./buttons.styles";

function ToggleButton() {
    console.log("Button clicked");
   
    
    return ( 
        <div>
            <StyledBaseButton $isActive={false} onClick={() => ToggleButton()}>
                REGISTER
            </StyledBaseButton>
        </div>        
    );
}

export default ToggleButton;