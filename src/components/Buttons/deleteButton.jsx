import { useState } from 'react';
import { deleteCommentidurl } from "../../constants/api";
import { StyledDeleteButton } from "./buttons.styles";


function DeleteButton() {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

          
      async function onSubmit(data) {
          console.log(data);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
        body: JSON.stringify(data),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(deleteCommentidurl, options);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 
    } 


    if (isLoading) {
      return <div>Delete this post...</div>;
    }
  
    if (isError) {
      return <div>Deleting this post was not possible</div>;
    }

    function handleSubmit() {
            
    }


    return ( 
      <form onSubmit={handleSubmit(onSubmit)}>
             <StyledDeleteButton type="submit">
                 {isLoading ? "Submitting..." : "DELETE"}
             </StyledDeleteButton>
      </form>
    );
}

export default DeleteButton;