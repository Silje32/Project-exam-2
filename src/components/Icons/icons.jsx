import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { StyledIcons } from "./icons.styles";

function Icons() {
    return (
        <StyledIcons>
                <FontAwesomeIcon icon={faFaceSmile}  />
        </StyledIcons>
    );
}

export default Icons;