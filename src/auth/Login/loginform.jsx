import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ServerWarning from "./serverWarning";
import ValidationMessage from "./validationMessage";
import { StyledInput, StyledMessage } from "./styledLoginForm.styles";
import { StyledBaseButton } from "../../components/Togglebutton/togglebutton.styles";

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
        formState: {errors},
    }   = useForm({
        resolver: yupResolver(schema),
    });

    console.log(errors);

    async function onSubmit(data)  {


        console.log(data);
    }

    return ( 
        <div>
            <StyledInput>
                <StyledMessage>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ServerWarning>Login error message here</ServerWarning>
                      <div>
                        <label>Email:</label>
                        <input {...register("email") }  />
                        {errors.email && <ValidationMessage>{errors.email.message}</ValidationMessage>}
                      </div>
                      <div>
                        <label>Password:</label>
                        <input {...register("password") }  />
                        {errors.password && <ValidationMessage>{errors.password.message}</ValidationMessage>}
                      </div>
                      <div>
                         <StyledBaseButton type="submit">LOG IN</StyledBaseButton>   
                      </div>   
                    </form>
                </StyledMessage>
            </StyledInput>
        </div>
    );
}

export default LoginForm;


