// A registered user may follow and unfollow another Profile.

import { useState, useEffect } from 'react';
import { useName, useFollow } from "../../store/UseUserStore";
import { StyledFollowButton } from "./Button.styles";
import { NEW_URL } from "../../constants/api";
import { unfollowurl } from "../../constants/api";


export default function FollowButton () {
  const name = useName();
  const addName, removeName = useFollow();

  const [follow, setFollow] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);


  useEffect(() => {   
    async function getData() {
        console.log();
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(`${NEW_URL}/social/${name}/follow`, options);
        const json = await response.json();

        setFollow(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      }
    } 

       getData();
    }, [name]); 
    

        if (isLoading) {
           return <h3>Follow profile</h3>;
        }

  
        if (isError) {
           return <div>An error occured when following this profile</div>;
        }

        
        function onButtonClick() {

        }
    

        return (
          <>
            {follow.map((profile) => (
              <div key={profile.id}>
                <h3>{profile.title}</h3>
            <StyledFollowButton onClick={onButtonClick}{() => addName(name)}>Follow</StyledFollowButton>
            <StyledFollowButton onClick={onButtonClick}{() => removeName(name)}>UnFollow</StyledFollowButton> 
            }   
          </>                             
        );    
}
