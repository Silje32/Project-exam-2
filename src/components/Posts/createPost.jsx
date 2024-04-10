import { useState, useEffect } from 'react';
import { NEW_URL } from "../../constants/api";


function CreatePost() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    async function getData(data) {
      console.log(data);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(`${NEW_URL}social/posts`, options);

        if (response.ok) {
          const json = await response.json();
          return setPosts(json);
        }

        throw new Error();
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
     return <div>Loading post...</div>;
  }
  
  if (isError) {
     return <div>Error loading Create New Post</div>;
  }
    

  return ( 
      <>
        {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
      </>
  );
}

export default CreatePost;