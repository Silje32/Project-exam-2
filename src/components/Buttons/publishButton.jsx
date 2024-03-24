import { useState } from 'react';
import { commenturl } from "../../constants/api";
import { StyledPublishButton } from "./buttons.styles";


export default function PublishButton() {
    const [button, setButton] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
	const [isError, setisError] = useState(null);


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
          const response = await fetch(commenturl, options);
          const json = await response.json();
    
          if (!response.ok) {
            return setisError(json.errors?.[0]?.message ?? "There was an error");
          }
    
          setButton(json);
    
        } catch (error) {
          setisError(error.toString());
        } finally {
          setIsLoading(false);
        }

        if (isLoading) {
            return <div>Follow profile</div>;
          }
      
        
          if (isError) {
            return <div>An error occured when following this profile</div>;
          }
          

        function handleSubmit() {

        }      
    

        return ( 
            <form onSubmit={handleSubmit(onSubmit)}>
                <StyledPublishButton type="submit">
                    {isLoading ? "Submitting..." : "PUBLISH"}
                </StyledPublishButton>
            </form>
        );
    }
}

