// Retrieve a single profile by its id.
// A registered user may view a single Profile by name.


import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useToken, useName } from "../../store/UseUserStore";
import SingleProfilesList from "./SingleProfileList";
import { NEW_URL } from "../../constants/api";


function SingleProfile() {

    const token = useToken();
    const name = useName();

    const params  = useParams();
    const { id } = params;
       console.log(params);
  

    const [profileid, setProfileid] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    
    useEffect(() => {
        async function getData(id) {
          console.log(id);
          
          const options = {
            headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
            method: "GET",
          };
    

          try {
            setisLoading(true);
            setisError(false);

            const response = await fetch(`${NEW_URL}/social/profiles/${name}`, options);

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
        
       getData(`${NEW_URL}social/profiles/${name}`);
    }, [id]); 


    if (isLoading) {
      return <div>Loading single profile...</div>;
    }
  
    if (isError) {
      return <div>Error loading single profile</div>;
    }
    

    return ( 
        <>
          <div>Individual profile page: {params.id} name: {params.name}
             {profileid.map((single, id) => (
                <SingleProfilesList key={id} single={single} />
              ))}
          </div>
        </>
    );
}

export default SingleProfile;