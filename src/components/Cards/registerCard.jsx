import RegistrationForm from "../Forms/registrationForm";
import { StyledCard } from "./StyledCard.styles";


function RegisterCard() {
    return (  
        <>
          <StyledCard>
              <div>
                <h2>REGISTRATION</h2>
                <RegistrationForm />
              </div> 
          </StyledCard>
        </>
    );
}

export default RegisterCard;