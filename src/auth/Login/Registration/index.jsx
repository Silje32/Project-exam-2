import ValidationMessage from "./validationmessage";

function RegistrationForm() {  
    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label>First Name:</label>
                    <input $isActive={true} {...register("fullName") }  />
                    {error.fullName && <ValidationMessage>{error.fullName.message}</ValidationMessage>}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input $isActive={true} {...register("subject") }  />
                    {error.subject && <ValidationMessage>{error.subject.message}</ValidationMessage>}
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
    
    
    