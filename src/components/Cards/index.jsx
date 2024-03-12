import { Link } from "react-router-dom";
import LoginForm from "../Forms/loginForm";
import { StyledBaseButton } from "../Togglebutton/togglebutton.styles";
import { StyledCard } from "../Cards/styledCard.styles";

function Card() {

    return (  
        <>
          <StyledCard>
              <div>
                <h2>PLEASE LOG IN</h2>
                <LoginForm />
              </div> 
              <div>
                <h2>OR REGISTER HERE:</h2>
                <StyledBaseButton><Link to={"register"}>REGISTER</Link></StyledBaseButton>
              </div>
          </StyledCard>
        </>
    );
}

export default Card;