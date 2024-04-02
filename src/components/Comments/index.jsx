import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { postsidurl } from "../../constants/api";

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

            const response = await fetch(postsidurl, options);

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
        
        
       getData("postsidurl/${id}");
    }, [id]); 

    if (isLoading) {
      return <div>Loading comments...</div>;
    }
  
    if (isError) {
      return <div>Error loading comments</div>;
    }
    

    return ( 
        <>
          <div>{comment.title}</div>
        </>
    );
}

export default Comment;