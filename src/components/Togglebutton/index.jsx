import { StyledBaseButton } from "./togglebutton.styles";

function toggleButton() {
    console.log("Button clicked");
   
    
    return ( 
        <div>
            <StyledBaseButton $isActive={false} onClick={() => toggleButton() }>
                REGISTER
            </StyledBaseButton>
        </div>        
    );
}

export default toggleButton;