// A registered user may follow and unfollow another Profile.

import { useState } from 'react';
import { NEW_URL } from "../../constants/api";
import { unfollowurl } from "../../constants/api";
import { StyledFollowButton } from "./buttons.styles";


export default function FollowButton () {
  const [follow, setFollow] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);


    async function onSubmit(data) {
        console.log(data);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(`${NEW_URL}social/{name}/follow`, options);
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
    
        function onButtonClick() {
          if (name) {

          }
            
        }

        return (
          <StyledFollowButton onClick={onButtonClick}>
             FOLLOW
          </StyledFollowButton>           
      );
    }
}
