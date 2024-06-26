// A registered user may view a list of Profiles

import { useState, useEffect } from 'react';
import { useToken } from "../../store/UseUserStore";
import GetAllProfileList from "./GetAllProfileList";
import { NEW_URL } from "../../constants/api";

function GetAllProfiles () {

  const token = useToken();

  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  
    
      useEffect(() => {
          async function getData(data) {
            console.log(data);
            
            const options = {
              headers: { "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, 
            },
              method: "GET",
            };
      

            try {
              setisLoading(true);
              setisError(null);

              const response = await fetch(`${NEW_URL}/social/profiles`, options);

              if(response.ok) {
                const json = await response.json();
                return setData(json);           
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
                 {data.map((profile, index) => (
                     <GetAllProfileList key={index}  profile={profile} />
                  ))}
                </>
          );
}

export default GetAllProfiles;