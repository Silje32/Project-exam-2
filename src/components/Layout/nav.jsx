import { NavLink } from "react-router-dom";
import { useToken } from "../../store/UseUserStore";
import LogoutButton from "../Buttons/logoutButton";
import LogoImg from "../Logo/index";
import Header from "../Header/index";
import { NavStyling } from "./nav.styles";


function Nav() {

  const token = useToken();

  console.log("token", token);

  return (
    <nav>
        <NavStyling>       
          {!token ? (
            <>       
              <ul> 
                <LogoImg />
                <Header />            
                <li>
                  <NavLink to="/">LOGIN</NavLink>
                </li>
                <li>
                  <NavLink to="/register">REGISTER</NavLink>
                </li>
              </ul>
            </> 
           ) : (
              <ul>
                 <LogoImg />
                 <Header />   
                <li>
                  <NavLink to="/home">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/create">CREATE POST</NavLink>
                </li>
                <li>
                  <NavLink to="/my-profile">MY PROFILE</NavLink>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </ul>  
           )}
        </NavStyling> 
    </nav>
  );
}

export default Nav;