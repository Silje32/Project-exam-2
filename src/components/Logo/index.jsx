import Logo from "../../images/Logo_final.jpg";
import { StyledLogo } from "./logo.styles";


function LogoImg() {

    return (
      <>
        <StyledLogo src={Logo}  alt="Logo" />
      </>     
    );
  }

export default LogoImg;