// A registered user may update their avatar and banner.

import { useState, useEffect } from 'react';
import { NEW_URL } from "../../constants/api";
import MediaList from "./mediaList";


function Media() {
  const [banner, setBanner] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    async function getData(banner) {
      console.log(banner);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(`${NEW_URL}social/profiles/{name}/media`, options);
        const json = await response.json();

        setBanner(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 
    } 
        
   getData(`${NEW_URL}social/profiles/{name}/media`);
  }, []); 


    if (isLoading) {
      return <div>Loading banner...</div>;
    }
  
    if (isError) {
      return <div>Error loading banner</div>;
    }
    


    return (
      <> 
        <MediaList />
      </>
    );
}

export default Media;