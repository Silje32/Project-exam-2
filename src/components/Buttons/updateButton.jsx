// A registered user may update a Post they own.
// Update a post based on its id. This endpoint returns the updated post.

import { useState, useEffect } from 'react';
import { StyledUpdateButton } from "./Button.styles";

function UpdateButton() {

  const { title, body, tags, media } = update;  

  const [update, setUpdate] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);


  useEffect(() => {   
    async function getData() {
        console.log();
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(title, body, tags, media),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(`${NEW_URL}/social/posts/${id}`, options);
        const json = await response.json();

        setUpdate(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      }
    } 

       getData();
    }, []); 
    

        if (isLoading) {
           return <h3>Update profile.</h3>;
        }

  
        if (isError) {
           return <div>An error occured when updating this profile.</div>;
        }
    

    function onButtonClick() {

    }

    return ( 
        <>
          <StyledUpdateButton onClick={onButtonClick}>
            UPDATE
          </StyledUpdateButton>   
        </>         
    );
}

export default UpdateButton;

