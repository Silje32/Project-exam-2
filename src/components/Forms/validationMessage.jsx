import { StyledMessage } from "./StyledLoginForm.styles";

function ValidationMessage({ children }) {
    return (
        <>
          <StyledMessage>
             {children}
          </StyledMessage>
        </>
    );
}

export default ValidationMessage;