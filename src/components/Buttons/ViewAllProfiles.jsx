import { Link } from "react-router-dom";
import { StyledBaseButton } from "";

function ViewAllProfiles() {

    function onButtonClick() {

    }

    return ( 
        <StyledBaseButton onClick={onButtonClick}>
             <Link to={"/profiles"}>View all profiles</Link>
        </StyledBaseButton>
     );
}

export default ViewAllProfiles;