import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import ServerError from "./serverError";
import ValidationMessage from "./validationMessage";
import useApi from "../../hooks/useApi";
import { useUserActions } from "../../store/UseUserStore";
import { loginurl } from "../../constants/api";
import { StyledFieldset, StyledInput, StyledLabel } from "./styledLoginForm.styles";
import { StyledBaseButton } from "../Buttons/buttons.styles";


// * Adding yup validation
const schema = yup
  .object({
     email: yup.string().email("Please write a valid email address.").required("Email is required"),
     password: yup.string().required("Please enter a password"),
})
.required();


function LoginForm() {   
    const {
            register, 
            handleSubmit,
            formState: { errors },
    }  = useForm({
            resolver: yupResolver(schema),
    });

    console.log(errors);

    
    
    async function onSubmit(data)  {
      const { isLoading, isError } = useApi(loginurl);
      
      console.log(data);

      const { setUser } = useUserActions();
      console.log(setUser);
  
      const navigate = useNavigate();
 

      if (isLoading) {
        return <div>Logging in...</div>;
      }
  
      if (isError) {
        return <div>Error loading login page</div>;
      }

      
      setUser(json);

      navigate("/home");
        
    } 

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
           <StyledFieldset disabled={isLoading}> 
            {errors && <ServerError>{errors}</ServerError>}
                <div>
                  <StyledLabel>Email:</StyledLabel>
                  <StyledInput {...register("email") }  />
                  {errors.email && <ValidationMessage>{errors.email.message}</ValidationMessage>}
                </div>
                <div>
                   <StyledLabel>Password:</StyledLabel>
                   <StyledInput {...register("password") } type="password" />
                   {errors.password && <ValidationMessage>{errors.password.message}</ValidationMessage>}
                </div>
                <div>
                  <StyledBaseButton type="submit">
                    {isLoading ? "Logging in..." : "LOGIN"}
                  </StyledBaseButton>   
                </div>
           </StyledFieldset>   
        </form>
    );
}

export default LoginForm;


