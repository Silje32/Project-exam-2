// The individual post page should display data for a single post.
// A registered user may view a single Post by id.

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { postidurl } from "../../constants/api";


function SinglePostId() {

    const [postid, setPostid] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    const { id  } = useParams();

    useEffect(() => {
        async function getData() {
          console.log();
          
          const options = {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(),
          };


          try {
            setisLoading(true);
            setisError(false);

            const response = await fetch(postidurl, options);

            if (response.ok) {
              const json = await response.json();
              return setPostid(json);
            }

            throw new Error();
          } catch (Error) {
            console.log(Error);
            setisError(true);
          } finally {
            setisLoading(false);    
          } 
        } 
        
        
       getData("postidurl/${id}");
    }, [id]); 

    if (isLoading) {
      return <div>Loading comments...</div>;
    }
  
    if (isError) {
      return <div>Error loading comments</div>;
    }
    

    return (
        <>
          <h2>Single Post</h2>
          
        </>
    );
}

export default SinglePostId;  