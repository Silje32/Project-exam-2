// A registered user may create a comment on any Post.


import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { commenturl  } from "../../constants/api";

function Comment() {

    const [comment, setComment] = useState([]);
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

            const response = await fetch(commenturl, options);

            if (response.ok) {
              const json = await response.json();
              return setComment(json);
            }

            throw new Error();
          } catch (Error) {
            console.log(Error);
            setisError(true);
          } finally {
            setisLoading(false);    
          } 
        } 
        
        
       getData("commenturl/${id}");
    }, [id]); 

    if (isLoading) {
      return <div>Loading comments...</div>;
    }
  
    if (isError) {
      return <div>Error loading comments</div>;
    }
    

    return ( 
        <>
          <h2>Comment</h2>
        </>
    );
}

export default Comment;