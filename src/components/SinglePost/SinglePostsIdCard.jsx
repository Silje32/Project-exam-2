
import { StyledSinglePostIdCard } from "./SinglePostIdCard.styles";

export function SinglePostIdCard({ 
    postid: { _author, _comments, _reactions } 
}) {

    return ( 
        <>
         <StyledSinglePostIdCard>
            <h3>Title: {_author}</h3>
            <p>{_comments}</p>
            <p>{_reactions}</p>
         </StyledSinglePostIdCard>
        </>
    );
}

export default SinglePostIdCard;