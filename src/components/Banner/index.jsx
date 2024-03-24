import { useState, useEffect } from 'react';
import { BannerAvatarurl } from "../../constants/api";


function Banner() {
  const [banner, setBanner] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    async function getData(data) {
      console.log(data);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(data),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(BannerAvatarurl, options);
        const json = await response.json();

        setBanner(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 
    } 
        
   getData("BannerAvatarurl");
}, []); 


    if (isLoading) {
      return <div>Loading banner...</div>;
    }
  
    if (isError) {
      return <div>Error loading banner</div>;
    }
    


    return (
      <> 
        <div>
            <img>{banner.image}</img>
        </div>
      </>
    );
}

export default Banner;