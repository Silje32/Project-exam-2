import { Link } from "react-router-dom";
import Logo from "../../images/Logo_final.jpg";
import { StyledLogo } from "./logo.styles";


function LogoImg() {

    function onLogoClick() {

    }

    return (
      <>
        <Link to={"/home"}>
        <StyledLogo src={Logo}  alt="Logo" onClick={onLogoClick} />
        </Link>  
      </>     
    );
  }

export default LogoImg;