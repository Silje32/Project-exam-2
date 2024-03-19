import { postsurl } from "../../constants/api";
import useApi from "../../hooks/useApi";


function GetPost() {
    const { data: posts, isLoading, error  } = useApi(postsurl);

    if (isLoading) {
      return <div>Loading posts...</div>;
    }
  
    if (error) {
      return <div>Error loading posts</div>;
    }
    

    return ( 
        <>
          {posts.map((post) => (
             <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
             </div>
          ))}
        </>
    );
}

export default GetPost;