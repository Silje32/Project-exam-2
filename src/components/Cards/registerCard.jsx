import RegistrationForm from "../Forms/registrationForm";
import { StyledBaseButton } from "../Togglebutton/togglebutton.styles";
import { StyledCard } from "../Cards/styledCard.styles";


function RegisterCard() {
    return (  
        <>
          <StyledCard>
              <div>
                <h2>PLEASE REGISTER</h2>
                <RegistrationForm />
              </div> 
              <div>
                <StyledBaseButton>REGISTER</StyledBaseButton>
              </div>
          </StyledCard>
        </>
    );
}

export default RegisterCard;