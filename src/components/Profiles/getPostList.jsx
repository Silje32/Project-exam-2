import { StyledGetPostList } from "./getPostList.styles";

export function GetPostList({ post: { title, body, media, created, updated   } }) {

    return ( 
        <>
         <StyledGetPostList>   
            <h2>Profile name: {title}</h2>
            <p>{body}</p>
            <img src={`${media}`} alt="Image of post" />
            <p>Created : {created}</p>
            <p>Updated: {updated}</p>
         </StyledGetPostList>
        </>
    );
}

export default GetPostList;