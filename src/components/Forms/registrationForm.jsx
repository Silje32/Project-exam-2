// A user with a stud.noroff.no e-mail may register.

import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import ValidationMessage from "./ValidationMessage";
import {  NEW_URL } from "../../constants/Api";
import { StyledFieldset, StyledInput, StyledLabel  } from './StyledLoginForm.styles';
import { StyledBaseButton } from "../Buttons/Button.styles";


// * Adding yup validation
const schema = yup
  .object({
     name: yup.string().min(3, "Your name should be at least 3 characters.").required("minimum 3 characters required"),
     email: yup.string().email("Please write a valid noroff.no email address.").required("Noroff e-mail required"),
     password: yup.string().min(8, "Your password should be at least 8 characters").required("Please enter a password"),
})
.required();


function RegistrationForm() {



  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
	const [isError, setisError] = useState(null);

	const navigate = useNavigate();
   

    const {
        register, 
        handleSubmit,
        formState: {errors},
    }   = useForm({
        resolver: yupResolver(schema),
    });

    console.log(errors);

  
    async function onSubmit(data)  {
      console.log(data);

      const options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(),
      };

      try {
        setIsLoading(true);
        setisError(null);
        const response = await fetch(`${NEW_URL}social/auth/register`, options);
        const json = await response.json();
  
        if (!response.ok) {
          return setisError(json.errors?.[0]?.message ?? "There was an error");
        }
  
        setData(json);
        navigate("/home");
  
      } catch (error) {
        setisError(isError.toString());
      } finally {
        setIsLoading(false);
      }
    }
          
  
  return ( 
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledFieldset disabled={isLoading}> 
            <div>
                <StyledLabel>Name:</StyledLabel>
                <StyledInput {...register("firstName") }  />
                {errors.name && <ValidationMessage>{errors.name.message}</ValidationMessage>}
            </div>
            <div>
                <StyledLabel>E-mail:</StyledLabel>
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
                   {isLoading ? "Error" : "REGISTER"}
               </StyledBaseButton>   
            </div>
          </StyledFieldset>  
        </form>
    </div>
    );
}

export default RegistrationForm;


