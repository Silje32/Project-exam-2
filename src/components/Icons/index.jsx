import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "react-icons/fa";
import { StyledSocialIcons } from "../Socialicons/socialicons.styles";

function SocialIcons() {
    return (
        <StyledSocialIcons>
            <li>
                <FontAwesomeIcon icon={faFaceSmile}  />
            </li>
        </StyledSocialIcons>
    );
}

export default SocialIcons;