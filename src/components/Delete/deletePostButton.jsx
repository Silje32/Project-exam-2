// A registered user may delete a Post they own. 
// Delete a post based on its id.

import { useState } from 'react';
import { StyledDeletePostButton } from "./styledDeleteButton";
import { NEW_URL } from "../../constants/api";


function DeletePostButton() {
    
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

          
      async function onButtonClick(data) {
          console.log(data);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      };

      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(`${NEW_URL}/social/posts/${id}`, options);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 
      
    getData(`${NEW_URL}/social/posts/${id}`);
}, [id]); 


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
        <StyledDeletePostButton onClick={onButtonClick}>
           DELETE
        </StyledDeletePostButton>
      </>       
    );
}

export default DeletePostButton;