// A registered user may follow and unfollow another Profile.

import { useState } from 'react';
import { followurl } from "../../constants/api";
import { unfollowurl } from "../../constants/api";
import { StyledFollowButton } from "./buttons.styles";


export default function FollowButton () {
  const [follow, setFollow] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);


    async function onSubmit(data) {
        console.log(data);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(data),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(followurl, options);
        const json = await response.json();

        setFollow(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 
    

        if (isLoading) {
           return <div>Follow profile</div>;
        }

  
        if (isError) {
           return <div>An error occured when following this profile</div>;
        }
    
        function handleSubmit() {
            
        }

          return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <StyledFollowButton type="submit">
                    {isLoading ? "Submitting..." : "FOLLOW"}
                </StyledFollowButton>
            </form>                             
          );
    }
}
