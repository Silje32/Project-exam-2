// A registered user may update their avatar and banner.

import { useState, useEffect } from 'react';
import { BannerAvatarurl } from "../../constants/api";


function Banner() {
  const [media, setMedia] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    async function getData(data) {
      console.log(data);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(BannerAvatarurl, options);
        const json = await response.json();

        setMedia(json);
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
      return <div>Loading banner...</div>;
    }
  
    if (isError) {
      return <div>Error loading banner</div>;
    }
    


    return (
      <> 
        <h2>Banner</h2> 
      </>
    );
}

export default Banner;