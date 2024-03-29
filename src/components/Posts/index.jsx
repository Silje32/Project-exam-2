import { useState, useEffect } from 'react';
import { getpostsurl } from "../../constants/api";


function PostList() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  
  
      useEffect(() => {
          async function getData(data) {
              console.log(data);
            
            const options = {
              headers: { "Content-Type": "application/json" },
              method: "GET",
              body: JSON.stringify(data),
            };


            try {
              setisLoading(true);
              setisError(false);

              const response = await fetch(getpostsurl, options);
              const json = await response.json();

              setPosts(json);
            } catch (error) {
              console.log(error);
              setisError(true);
            } finally {
              setisLoading(false);    
            } 
          } 
          
          
         getData("getpostsurl");
      }, []); 
    
      if (isLoading || !posts) {
        return <div>Loading posts...</div>;
      }
    
      if (isError) {
        return <div>Error loading posts</div>;
      }

    return ( 
        <>  
          {posts.map((post) => (
            <div key={post.id}>        
              <h2>Title: {post.title}</h2>
              <p>{post.body}</p>
            </div>
            ))}
        </>            
    );
}

export default PostList;