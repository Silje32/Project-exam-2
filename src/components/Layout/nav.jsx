import { NavLink } from "react-router-dom";
import { NavStyling } from "./nav.styles";


function Nav() {
    return (
      <div>
         <NavStyling>
        <ul>
          <li>
            <NavLink to="/">LOGIN</NavLink>
          </li>
          <li>
            <NavLink to="home">HOME</NavLink>
          </li>
          <li>
            <NavLink to="create">CREATE POST</NavLink>
          </li>
          <li>
            <NavLink to="my-profile">MY PROFILE</NavLink>
          </li>
        </ul> 
        </NavStyling>       
      </div>
    );
  }

export default Nav;