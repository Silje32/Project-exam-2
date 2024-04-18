import { StyledMessage } from "./StyledLoginForm.styles";

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