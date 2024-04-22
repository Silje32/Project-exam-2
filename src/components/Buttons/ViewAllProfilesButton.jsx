import { Link } from "react-router-dom";
import { StyledViewAllProfilesButton } from "../Buttons/Button.styles";

function ViewAllProfilesButton() {

     function onButtonClick() {

     }

     return ( 
        <StyledViewAllProfilesButton onClick={onButtonClick}>
             <Link to={"/profiles"}>View all profiles</Link>
        </StyledViewAllProfilesButton>
     );
}

export default ViewAllProfilesButton;