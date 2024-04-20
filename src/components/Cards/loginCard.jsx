import LoginForm from "../Forms/loginForm";
import { StyledCard } from "./StyledCard.styles";

function LoginCard() {

    return (  
        <>
          <StyledCard>
              <div>
                <h2>PLEASE LOG IN</h2>
                <LoginForm />
              </div> 
          </StyledCard>
        </>
    );
}

export default LoginCard;