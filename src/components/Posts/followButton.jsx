import { useState, useEffect } from 'react';
import { getfollowingurl } from "../../constants/api";
import { unfollowurl } from "../../constants/api";


function FollowButton() {
  const [follow, setFollow] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
       
        useEffect(() => {
            async function getData(follow) {
              console.log(follow);
              
              const options = {
                headers: { "Content-Type": "application/json" },
                method: "GET",
                body: JSON.stringify(follow),
              };
  
  
              try {
                setisLoading(true);
                setisError(false);
  
                const response = await fetch(getfollowingurl, options);
                const json = await response.json();
  
                setFollow(json);
              } catch (error) {
                console.log(error);
                setisError(true);
              } finally {
                setisLoading(false);    
              } 
            } 
            
            
           getData("getfollowingurl");
        }, []); 


        if (isLoading) {
          return <div>Follow profile...</div>;
        }
      
        if (isError) {
          return <div>Error following profile</div>;
        }
             
        function handleFollow() {
        }

    return ( 
        <> 
          <FollowButton onClick={handleFollow}>
            FOLLOW
          </FollowButton>
        </>
      );
}

export default FollowButton;