import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import ServerError from "./serverError";
import ValidationMessage from "./validationMessage";
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
  const [isLoading, setIsLoading] = useState(false);
	const [isError, setisError] = useState(null);

  const { setUser } = useUserActions();

	const navigate = useNavigate();

	console.log(setUser);
   
    const {
            register, 
            handleSubmit,
            formState: { errors },
    }  = useForm({
            resolver: yupResolver(schema),
    });

    console.log(errors);

    
    
    async function onSubmit(data)  {
      console.log(data);

      const options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      };

      try {
        setIsLoading(true);
        setisError(null);
        const response = await fetch(loginurl, options);
        const json = await response.json();
  
        if (!response.ok) {
          return setisError(json.errors?.[0]?.message ?? "There was an error");
        }
  
        setUser(json);
        navigate("/home");
  
      } catch (error) {
        setisError(error.toString());
      } finally {
        setIsLoading(false);
      }
    }
        
    
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
           <StyledFieldset disabled={isLoading}> 
            {isError && <ServerError>{isError}</ServerError>}
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


