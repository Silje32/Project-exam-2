import { StyledMessage } from "./styledLoginForm.styles";

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