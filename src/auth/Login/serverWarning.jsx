import { StyledMessage } from "./styledLoginForm.styles";

function ServerWarning({ children }) {
    return (
        <>
          <StyledMessage>
            {children}
          </StyledMessage>
        </>
    );
}

export default ServerWarning;