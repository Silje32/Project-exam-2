import LoginForm from "../../auth/Login/loginform";
import { StyledBaseButton } from "../Togglebutton/togglebutton.styles";
import { StyledCard } from "../Cards/styledCard.styles";

function Card() {
    return (  
        <>
          <StyledCard>
              <h2>PLEASE LOG IN</h2>
              <LoginForm />
              <h2>OR REGISTER HERE:</h2>
              <StyledBaseButton>REGISTER</StyledBaseButton>
          </StyledCard>
        </>
    );
}

export default Card;