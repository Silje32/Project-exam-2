// Retrieve a single profile by its id.

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useToken } from "../../store/UseUserStore";
import { NEW_URL } from "../../constants/api";


function SingleProfile() {

    const token = useToken();

    console.log("token", token);
    
    const [profileid, setProfileid] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    const params  = useParams();
    const { id } = params
      console.log(params);
  
    useEffect(() => {
        async function getData(profileid) {
          console.log(profileid);
          
          const options = {
            headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
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
      return <div>Loading single profile...</div>;
    }
  
    if (isError) {
      return <div>Error loading single profile</div>;
    }
    

    return ( 
        <>
          <div>Individual profile page: {id} name: {params.name}
             {profileid.map((singleprofile, id) => (
                <SingleProfileList key={params.id} singleprofile={singleprofile} />
              ))}
          </div>
        </>
    );
}

export default SingleProfile;