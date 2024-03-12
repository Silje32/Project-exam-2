import { StyledMessage } from "./styledLoginForm.styles";

function ServerError({ children }) {
    return (
        <>
          <StyledMessage>
            {children}
          </StyledMessage>
        </>
    );
}

export default ServerError;