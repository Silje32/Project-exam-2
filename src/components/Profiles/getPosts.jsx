// A registered user may view a list of Posts.
// Retrieve all posts made by profile.

import { useState, useEffect } from 'react';
import { NEW_URL } from "../../constants/api";
import { useToken } from "../../store/UseUserStore";


function GetPosts() {

    const token = useToken();

    console.log("token", token);


    const [posts, setPosts] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);
  
    useEffect(() => {
        async function getData(posts) {
          console.log(posts);
          
          const options = {
            headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
            method: "GET",
          };
    

          try {
            setisLoading(true);
            setisError(false);

            const response = await fetch(`${NEW_URL}social/profiles/{name}/posts`, options);

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
        
       getData(`${NEW_URL}social/profiles/{name}/posts`);
    }, []); 


    if (isLoading) {
      return <div>Loading posts...</div>;
    }
  
    if (isError) {
      return <div>Error loading posts</div>;
    }
    

    return ( 
        <>
          {posts.map((post, id) => (
            <GetPostList key={id} post={post} />
          ))}
        </>
    );
}

export default GetPosts;