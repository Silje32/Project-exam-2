// A registered user may view a list of Posts.

import { useState, useEffect } from 'react';
import { NEW_URL } from "../../constants/api";
import { useToken } from "../../store/UseUserStore";
import PostListCard  from "../Profiles/postListCard";


function PostList() {

  const token = useToken();

  console.log("token", token);


  const [posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  
  
      useEffect(() => {
          async function getData(posts) {
              console.log(posts);
            
            const options = {
              headers: {
                 "Content-Type": "application/json",
                 Authorization: `Bearer ${token}`, 
            },
              method: "GET",
            };


            try {
              setisLoading(true);
              setisError(false);

              const response = await fetch(`${NEW_URL}social/posts`,options);

              if (response.ok) {
                const json = await response.json();
                return setPosts(json);
              }
              

              throw new Error();
            } catch (Error) {
              console.log(Error);
              setisError(true);
            } finally {
              setisLoading(false);    
            } 
          } 
                    
         getData(posts);
      }, []); 
    
      if (isLoading) {
        return <div>Loading posts...</div>;
      }
    
      if (isError) {
        return <div>Error loading posts</div>;
      }


      return ( 
         <>  
           {posts.map((post, index) => (
             <PostListCard key={index} post={post} />
           ))}              
         </>            
      );
}

export default PostList;