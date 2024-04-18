// A registered user may logout.

import { useNavigate } from "react-router-dom"
import { useUserActions } from "../../store/UseUserStore";
import { StyledLogoutButton } from "./Button.styles";

function LogoutButton() {

    const { clearUser } = useUserActions();
    const navigate = useNavigate();

    function handleLogout() {
        clearUser();
        navigate("/");
    }

    return ( 
        <StyledLogoutButton onClick={handleLogout}>
            LOGOUT
        </StyledLogoutButton>
    );
}

export default LogoutButton;