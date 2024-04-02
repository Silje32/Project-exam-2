import { useState, useEffect } from 'react';
import { getprofilesurl } from "../../constants/api";


function GetProfile () {
    const [profile, setProfile] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);
  
    
      useEffect(() => {
          async function getData(data) {
            console.log(data);
            
            const options = {
              headers: { "Content-Type": "application/json" },
              method: "GET",
            };
      

            try {
              setisLoading(true);
              setisError(null);
              const response = await fetch(getprofilesurl, options);

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
          
         getData("getprofilesurl");
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
                <h2>{profile.title}</h2>
                <div>{profile.image}</div>
             </div>
          ))}
        </>
     );
}

export default GetProfile;