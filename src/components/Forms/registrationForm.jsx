import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import ValidationMessage from "./validationMessage";
import { registerurl  } from "../../constants/api";
import { StyledFieldset, StyledInput, StyledLabel  } from './styledLoginForm.styles';
import { StyledBaseButton } from "../Buttons/buttons.styles";


// * Adding yup validation
const schema = yup
  .object({
     firstName: yup.string().min(3, "Your first name should be at least 3 characters.").required("minimum 3 characters required"),
     lastName: yup.string().min(3, "Your last name should be at least 3 characters.").required("minimum 3 characters required"),
     email: yup.string().email("Please write a valid email address.").required("Email required"),
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
        body: JSON.stringify(data),
      };

      try {
        setIsLoading(true);
        setisError(null);
        const response = await fetch(registerurl, options);
        const json = await response.json();
  
        if (!response.ok) {
          return setisError(json.errors?.[0]?.message ?? "There was an error");
        }
  
        setData(json);
        navigate("/home");
  
      } catch (error) {
        setisError(error.toString());
      } finally {
        setIsLoading(false);
      }
    }
          
  
  return ( 
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledFieldset disabled={isLoading}> 
            <div>
                <StyledLabel>First Name:</StyledLabel>
                <StyledInput {...register("firstName") }  />
                {errors.firstName && <ValidationMessage>{errors.firstName.message}</ValidationMessage>}
            </div>
            <div>
                <StyledLabel>Last Name:</StyledLabel>
                <StyledInput {...register("lastName") }  />
                {errors.lastName && <ValidationMessage>{errors.lastName.message}</ValidationMessage>}
            </div>
            <div>
                <StyledLabel>E-mail:</StyledLabel>
                <StyledInput {...register("email") }  />
                {errors.email && <ValidationMessage>{errors.email.message}</ValidationMessage>}
            </div>
            <div>
               <StyledBaseButton type="submit">
                   {isLoading ? "Error" : "SUBMIT THE FORM"}
               </StyledBaseButton>   
            </div>
          </StyledFieldset>  
        </form>
    </div>
    );
}

export default RegistrationForm;


