import { postsidurl } from "../../constants/api";
import useApi from "../../hooks/useApi";
import { useParams } from "react-router-dom";


function Comment() {
    const { isLoading, error  } = useApi(postsidurl);

    if (isLoading) {
      return <div>Loading comments...</div>;
    }
  
    if (error) {
      return <div>Error loading comments</div>;
    }
    

    return ( 
        <>
        
        </>
    );
}

export default Comment;