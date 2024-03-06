import { StyledBaseButton } from "./togglebutton.styles";

function toggleButton() {
    console.log("Button clicked");
   
    
    return ( 
        <div>
            <StyledBaseButton $isActive={false}>REGISTER</StyledBaseButton>
        </div>        
    );
}

export default toggleButton;