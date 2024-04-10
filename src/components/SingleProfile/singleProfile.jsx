// Retrieve a single profile by its id.

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { NEW_URL } from "../../constants/api";


function SingleProfile() {
    
    const [profileid, setProfileid] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    const { id  } = useParams();
  
    useEffect(() => {
        async function getData(profileid) {
          console.log(profileid);
          
          const options = {
            headers: { "Content-Type": "application/json",
          },
            method: "GET",
          };
    

          try {
            setisLoading(true);
            setisError(false);

            const response = await fetch(`${NEW_URL}social/profiles/{name}`, options);

            if (response.ok) {
              const json = await response.json();
              return setProfileid(json);           
            }


            throw new Error();
          } catch (Error) {
            console.log(Error);
            setisError(true);
          } finally {
            setisLoading(false);    
          } 
        }    
        
       getData(profileid);
    }, [id]); 


    if (isLoading) {
      return <div>Loading posts...</div>;
    }
  
    if (isError) {
      return <div>Error loading posts</div>;
    }
    

    return ( 
        <>
          {single.map((singleprofile, id) => (
            <SingleProfileList key={id} singleprofile={singleprofile} />
          ))}
        </>
    );
}

export default SingleProfile;