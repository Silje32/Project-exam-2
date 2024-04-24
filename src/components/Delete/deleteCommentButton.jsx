// Delete a comment based on its id.

import { useState, useEffect } from 'react';
import { StyledDeleteCommentButton } from "./StyledDeleteButton";
import { NEW_URL } from "../../constants/api";


function DeleteCommentButton() {

  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {     
    async function getData() {
          console.log(data);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(`${NEW_URL}/social/posts/${id}/comment/${commentId}`, options);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 

    }  

     getData(`${NEW_URL}/social/posts/${id}/comment/${commentId}`);
  }, [id]); 


    if (isLoading) {
      return <div>Delete this comment...</div>;
    }
  
    if (isError) {
      return <div>Deleting this comment was not possible</div>;
    }

    function onButtonClick() {
      console.log("Button clicked");

      if (id) {

      }
            
    }


    return (
      <>
        <StyledDeleteCommentButton onClick={onButtonClick}>
           DELETE
        </StyledDeleteCommentButton>
      </>       
    );
}

export default DeleteCommentButton;