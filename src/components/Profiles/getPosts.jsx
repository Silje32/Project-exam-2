import { useState, useEffect } from 'react';
import { postsurl } from "../../constants/api";



function GetPost() {
    const [posts, setPost] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(null);
  
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
            setisError(null);
            const response = await fetch(postsurl, options);
           
            setPost(json);

            if(!response.ok) {
              const json = await response.json();
              return json(posts);           
        }


          } catch (error) {
            console.log(error);
            setisError(true);
          } finally {
            setisLoading(false);    
          } 
        }    
        
       getData("postsurl");
    }, []); 


    if (isLoading) {
      return <div>Loading posts...</div>;
    }
  
    if (isError) {
      return <div>Error loading posts</div>;
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

export default GetPost;