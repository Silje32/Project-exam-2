import { useState, useEffect } from 'react';
import { useToken } from "../../store/UseUserStore";
import FollowingList from "./FollowingList";
import { NEW_URL } from "../../constants/api";


function Following() {

  const token = useToken();

  const [following, setFollowing] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  
  
      useEffect(() => {
          async function getData() {
            
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

              const response = await fetch(`${NEW_URL}/social/posts/following`,options);

              if (response.ok) {
                const json = await response.json();
                return setFollowing(json);
              }
              

              throw new Error();
            } catch (Error) {
              console.log(Error);
              setisError(true);
            } finally {
              setisLoading(false);    
            } 
          } 
                    
         getData(`${NEW_URL}/social/posts/following`);
      }, []); 
    
      if (isLoading) {
        return <div>Loading posts...</div>;
      }
    
      if (isError) {
        return <div>Error loading posts</div>;
      }


      return ( 
         <>  
           {following.map((follow, id) => (
             <FollowingList key={id} follow={follow} />
           ))}    
         </>            
      );
}

export default Following;