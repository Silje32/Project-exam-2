import { useNavigate } from "react-router-dom"
import { useUserActions } from "../../store/UseUserStore";
import { StyledLogoutButton } from "../Buttons/buttons.styles";

function LogoutButton() {

    const { clearUser } = useUserActions();
    const navigate = useNavigate();

    function handleLogout() {
        clearUser();
        navigate("/");
    }

    return ( 
        <Button onClick={handleLogout}>
            LOGOUT
        </Button>
     );
}

export default LogoutButton;