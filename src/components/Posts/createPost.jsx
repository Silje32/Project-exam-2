import { postpostsurl } from "../../constants/api";
import useApi from "../../hooks/useApi";


function CreatePost() {
    const { data: post, isLoading, error  } = useApi(postpostsurl);

    if (isLoading) {
      return <div>Loading posts...</div>;
    }
  
    if (error) {
      return <div>Error loading Create new Post page</div>;
    }
    

    return ( 
        <>
          {post.map((create) => (
             <div>
                <h2>{create.title}</h2>
                <p>{create.body}</p>
             </div>
          ))}
        </>
    );
}

export default CreatePost;