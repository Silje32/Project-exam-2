// A registered user may create a comment on any Post.

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import { NEW_URL } from "../../constants/Api";

function Comment() {

    const { comment } = comment;

    const [comment, setComment] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    const { id  } = useParams();

    useEffect(() => {
        async function getData(comment) {
          console.log(comment);
          
          const options = {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(comment),
          };


          try {
            setisLoading(true);
            setisError(false);

            const response = await fetch(`${NEW_URL}social/posts/{id}/comment`, options);

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
        
        
       getData();
    }, [id]); 

    if (isLoading) {
      return <div>Loading comments...</div>;
    }
  
    if (isError) {
      return <div>Error loading comments</div>;
    }
    

    return ( 
        <>
          {comment.map((comments) => (
            <CommentList key={id}  comments={comments}/>
          ))}
        </>
    );
}

export default Comment;