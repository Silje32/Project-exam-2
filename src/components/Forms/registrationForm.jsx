import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import ValidationMessage from "./validationMessage";
import useApi from "../../hooks/useApi";
import { useUserActions } from "../../store/UseUserStore";
import { registerurl  } from "../../constants/api";
import { StyledFieldset, StyledInput, StyledLabel  } from './styledLoginForm.styles';
import { StyledBaseButton } from "../Buttons/buttons.styles";


// * Adding yup validation
const schema = yup
  .object({
     firstName: yup.string().min(3, "Your first name should be at least 3 characters.").required("minimum 3 characters required"),
     lastName: yup.string().min(3, "Your last name should be at least 3 characters.").required("minimum 3 characters required"),
     email: yup.string().email("Please write a valid email address.").required("email required"),
})
.required();


function RegistrationForm() {

    const {
        register, 
        handleSubmit,
        formState: {errors},
    }   = useForm({
        resolver: yupResolver(schema),
    });

    console.log(errors);

  

    async function onSubmit(data)  {

      const { isLoading, error  } = useApi(registerurl);

      const { setUser } = useUserActions();
      console.log(setUser);

      const navigate = useNavigate();


      if (isLoading) {
        return <div>Loading posts...</div>;
      }

      if (error) {
        return <div>Error loading registration page</div>;
      }    
      
      console.log(data);

      setUser(json);

      navigate("/home");
    } 
          
     
  return ( 
    <div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <StyledFieldset> 
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
                   {isLoading ? "SUBMIT THE FORM" : "Error"}
               </StyledBaseButton>   
            </div>
          </StyledFieldset>  
        </form>
    </div>
    );
}

export default RegistrationForm;


