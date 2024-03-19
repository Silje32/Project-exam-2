import { emojiurl } from "../../constants/api";
import useApi from "../../hooks/useApi";


function Emoji() {
    const { data: emoji, isLoading, error  } = useApi(emojiurl);

    if (isLoading) {
      return <div>Loading posts...</div>;
    }
  
    if (error) {
      return <div>Error loading home page</div>;
    }
    

    return ( 
        <>
          {emoji.map((emoji) => (
             <div>
                <img>{emoji.image}</img>
             </div>
          ))}
        </>
    );
}

export default Emoji;