// A registered user may delete a Post they own. 

import { useState } from 'react';
import { NEW_URL } from "../../constants/api";
import { StyledDeleteButton } from "./styledDeleteButton";


function DeleteButton() {
  const [data, setData] = useState([]);
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

        const response = await fetch(`${NEW_URL}social/posts/{id}/comment/{commentId}`, options);
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

    function onButtonClick() {
      console.log("Button clicked");

      if (id) {

      }
            
    }


    return (
      <>
        <StyledDeleteButton onClick={onButtonClick}>
           DELETE
        </StyledDeleteButton>
      </> 
      
    );
}

export default DeleteButton;