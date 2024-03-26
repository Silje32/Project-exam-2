import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { postsidurl } from "../../constants/api";

function Comment() {

    const [comments, setComments] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    const { id  } = useParams();

    useEffect(() => {
        async function getData(data) {
          console.log(data);
          
          const options = {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(data),
          };


          try {
            setisLoading(true);
            setisError(false);

            const response = await fetch(postsidurl, options);
            const json = await response.json();

            setComments(json);
          } catch (error) {
            console.log(error);
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
          <div>{comments.title}</div>
        </>
    );
}

export default Comment;