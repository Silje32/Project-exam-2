import { useState, useEffect } from 'react';
import { getfollowingurl } from "../../constants/api";
import { unfollowurl } from "../../constants/api";
import { StyledFollowButton } from "../Posts/posts.styles";


function FollowButton() {
  const [follow, setFollow] = useState(null);
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
          <StyledFollowButton onClick={handleFollow}>
            FOLLOW
          </StyledFollowButton>
        </>
    );
}

export default FollowButton;