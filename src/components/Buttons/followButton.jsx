// A registered user may follow and unfollow another Profile.

import { useState } from 'react';
import { useName, useFollow } from "../../store/UseUserStore";
import { StyledFollowButton } from "./Button.styles";
import { NEW_URL } from "../../constants/Api";
import { unfollowurl } from "../../constants/Api";


export default function FollowButton () {
  const name = useName();
  const addName, removeName = useFollow();

  const [follow, setFollow] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);


    async function onSubmit(follow) {
        console.log(follow);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(`${NEW_URL}social/${name}/follow`, options);
        const json = await response.json();

        setFollow(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 

      getData();
    }, [name]); 
    

        if (isLoading) {
           return <h3>Follow profile</h3>;
        }

  
        if (isError) {
           return <div>An error occured when following this profile</div>;
        }
    

        return (
          <>
            {follow.map((profile) => (
              <div key={profile.id}>
                <h3>{profile.title}</h3>
            <StyledFollowButton onClick={() => addName(name)}>Follow</StyledFollowButton>
            <StyledFollowButton onClick={() => removeName(name)}>UnFollow</StyledFollowButton> 
            }   
          </>                             
        );    
}
