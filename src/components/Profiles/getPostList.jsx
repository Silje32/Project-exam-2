import ViewPostButton from "./ViewPostsButton";
import { StyledGetPostList } from "./GetPostList.styles";


export function GetPostList({ 
    post: { title, body, media, created, updated },
}) {

    return ( 
        <>
         <StyledGetPostList>   
            <h2>Title: {title}</h2>
            <p>{body}</p>
            <img src={`${media}`} alt="Image of post" />
            <p>Created : {created}</p>
            <p>Updated: {updated}</p>
            <ViewPostButton /> 
         </StyledGetPostList>
        </>
    );
}

export default GetPostList;