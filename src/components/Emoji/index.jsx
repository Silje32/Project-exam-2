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
        body: JSON.stringify(data),
      };
      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(emojiurl, options);
        const json = await response.json();

        setEmoji(json);
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