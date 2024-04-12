import { Link } from "react-router-dom";
import { useToken } from "../../store/UseUserStore";
import Logo from "../../images/Logo_final.jpg";
import { StyledLogo } from "./Logo.styles";


function LogoImg() {

    const token = useToken();


    function onLogoClick() {

    }

    return (
        <>
            {!token ? (
              <StyledLogo src={Logo}  alt="Logo" /> 
            ) : (
            <div>
              <Link to={"/home"}>
                 <StyledLogo src={Logo}  alt="Logo" onClick={onLogoClick} />
              </Link>
            </div>   
            )} 
        </> 
    );
  }

export default LogoImg;