// A registered user may view a list of Profiles.
// Retrieve all posts made by profile.

import { useState, useEffect } from 'react';
import { NEW_URL } from "../../constants/Api";
import { useToken, useName } from "../../store/UseUserStore";
import GetPostList from './GetPostList';


function GetPosts() {

    const token = useToken();
    const name = useName();

    
    const [profile, setProfile] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);
  
    useEffect(() => {
        async function getData(profile) {
          console.log(profile);
          
          const options = {
            headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
            method: "GET",
          };
    

          try {
            setisLoading(true);
            setisError(false);

            const response = await fetch(`${NEW_URL}social/profiles/${name}/posts`, options);

            if (response.ok) {
              const json = await response.json();
              return setProfile(json);           
            }


            throw new Error();
          } catch (Error) {
            console.log(Error);
            setisError(true);
          } finally {
            setisLoading(false);    
          } 
        }    
        
       getData(`${NEW_URL}social/profiles/${name}/posts`);
    }, []); 


    if (isLoading) {
      return <div>Loading profiles...</div>;
    }
  
    if (isError) {
      return <div>Error loading profiles</div>;
    }
    

    return ( 
        <>
          {profile.map((post, id) => (
            <GetPostList key={id} post={post} />
          ))}
        </>
    );
}

export default GetPosts;