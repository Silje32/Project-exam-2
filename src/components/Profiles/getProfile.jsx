// A registered user may view a list of Profiles

import { useState, useEffect } from 'react';
import { NEW_URL } from "../../constants/api";
import { useToken } from "../../store/UseUserStore";

function GetProfile () {

  const token = useToken();

  console.log("token", token);

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
              setisError(null);

              const response = await fetch(`${NEW_URL}social/profiles`, options);

              if(response.ok) {
                const json = await response.json();
                return setProfile(json);           
               }
  
            } catch (error) {
              console.log(error);
              setisError(true);
            } finally {
              setisLoading(false);    
            } 
          }    
          
         getData();
      }, []); 


   
    if (isLoading) {
      return <div>Loading posts...</div>;
    }
  
    if (isError) {
      return <div>Error loading profiles</div>;
    }
    
    return ( 
        <>
          {profile.map((profile) => (
             <div key={profile.id}>
               <h2>{profile.name}</h2>
               <p>{profile.email}</p>
             </div>
          ))}
        </>
     );
}

export default GetProfile;