import { getpostsurl } from "../../constants/api";
import useApi from "../../hooks/useApi";


function PostList() {
    const { data: posts, isLoading, error  } = useApi(getpostsurl);

    if (isLoading) {
      return <div>Loading posts...</div>;
    }
  
    if (error) {
      return <div>Error loading home page</div>;
    }

    const options = {
        headers: { "Content-Type": "application/json" },
        method: "GET",
        body: JSON.stringify(data)  
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

export default PostList;