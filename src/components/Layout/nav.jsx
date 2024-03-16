import { NavLink } from "react-router-dom";
import { NavStyling } from "./nav.styles";
import { useToken } from "../../store/UseUserStore";


function Nav() {

  const token = useToken();

  console.log("token", token);

  return (
      <nav>
        <NavStyling>
          <ul>             
            <li>
              <NavLink to="/">LOGIN</NavLink>
            </li>
            <li>
              <NavLink to="/home">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/create">CREATE POST</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile">MY PROFILE</NavLink>
            </li>
          </ul>         
        </NavStyling>
      </nav>
  );
}

export default Nav;