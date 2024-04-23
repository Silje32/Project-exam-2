// A registered user may react to any Post with an emoji.

import { useState, useEffect } from "react";
import { NEW_URL } from "../../constants/api";


function Emoji() {

  const [emoji, setEmoji] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const { id } = emoji;


  useEffect(() => {
    async function getData() {
        console.log();
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
      };

      try {
        setisLoading(true);
        setisError(false);

      const response = await fetch(`${NEW_URL}/social/posts/${id}/react/👍`, options);

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
    
   getData();
}, [id]); 


    if (isLoading) {
      return <div>Loading emoji...</div>;
    }
  
    if (isError) {
      return <div>Error loading emoji</div>;
    }
    

    return ( 
        <>
          <div>
             {emoji.map((media, postId) => (
                <EmojiList key={postId} media={media} />
              ))}
          </div>
        </>
    );
}

export default Emoji;