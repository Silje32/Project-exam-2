// Create a new post.

import { useState, useEffect } from 'react';
import CreatePostList from './CreatePostList';
import { NEW_URL } from "../../constants/api";


function CreatePost() {

  const [posts, setPosts] = useState( [] );
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const { title, body } = posts;

  useEffect(() => {
    async function getData(posts) {
      console.log(posts);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ title, body }),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(`${NEW_URL}/social/posts`, options);

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
        {posts.map((post, id) => (
            <CreatePostList key={id} post={post} />
        ))}
      </>
  );
}

export default CreatePost;