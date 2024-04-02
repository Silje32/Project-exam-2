// A registered user may react to any Post with an emoji.

import { useState, useEffect } from "react";
import { emojiurl } from "../../constants/api";


function Emoji() {
  const [emoji, setEmoji] = useState([]);
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

      const response = await fetch(emojiurl, options);

      if (response.ok) {
          const json = await response.json();
          return setEmoji(json);
      }

        throw new Error();
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 
    }   
    
   getData("emojiurl");
}, []); 


    if (isLoading) {
      return <div>Loading emoji...</div>;
    }
  
    if (isError) {
      return <div>Error loading emoji</div>;
    }
    

    return ( 
        <>
             <div>
                <img>{emoji.image}</img>
             </div>
        </>
    );
}

export default Emoji;