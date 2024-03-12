import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import ValidationMessage from "./validationmessage";
import { registerurl  } from "../../constants/api";


// * Adding yup validation
const schema = yup
  .object({
     firstName: yup.string().min(3, "Your first name should be at least 3 characters.").required("minimum 3 characters required"),
     lastName: yup.string().min(3, "Your last name should be at least 3 characters.").required("minimum 3 characters required"),
     email: yup.string().email("Please write a valid email address.").required("email required"),
})
.required();


function RegistrationForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const {
        register, 
        handleSubmit,
        formState: {errors},
    }   = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    console.log(errors);

    async function onSubmit(data)  {

        console.log(data);

        const options = {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(data)  
        }

        try {
          setIsLoading(true);
          setError(null);
            
          const response = await fetch(registerurl, options );
          const json = await response.json();

          if(!response.ok) {
            return setError(json.errors?.[0]?.message ?? "There was an error");
          }  

          setUser(json);
          
          navigate("/home");

        } catch(error) {
          setError(error.toString());
        } finally {
          setIsLoading(false);  
        }
    }
    
    
  return ( 
    <div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label>First Name:</label>
                <input $isActive={true} {...register("firstName") }  />
                {error.firstName && <ValidationMessage>{error.firstName.message}</ValidationMessage>}
            </div>
            <div>
                <label>Last Name:</label>
                <input $isActive={true} {...register("lastName") }  />
                {error.lastName && <ValidationMessage>{error.lastName.message}</ValidationMessage>}
            </div>
            <div>
                <label>E-mail:</label>
                <input $isActive={true} {...register("email") }  />
                {error.email && <ValidationMessage>{error.email.message}</ValidationMessage>}
            </div>
            <div>
               <button $isActive={true} type="submit">{isLoading ? "submit the form" : "display an error" }</button>   
            </div>   
        </form>
    </div>
    );
}

export default RegistrationForm;


