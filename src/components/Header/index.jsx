import { StyledHeading, StyledLogo } from "./heading.styles";
import Logo from "../../images/Logo_final.jpg";

function Header() {

    return (
      <>
       <StyledLogo />
        <StyledHeading> 
             <img src={Logo} alt="Logo" />
             DROPS OF KNOWLEDGE
        </StyledHeading> 
      </>     
    );
  }

export default Header;