import LikeButton from "../Buttons/LikeButton";
import CommentsButton from "../Buttons/CommentsButton";
import DeleteButton from "../Delete/DeleteCommentButton";
import { StyledButtonCard } from "../Cards/StyledCard.styles";
import { StyledFollowingList } from "./FollowingList.styles";


export function FollowingList({ 
    post: { title, body, tags, media, created, updated, _count },
}) {

    return ( 
        <>
         <StyledFollowingList>
            <h3>Title: {title}</h3>
            <p>{tags}</p>
            <p>{body}</p>
            <img src={`${media}`} alt={`${media}`} />
            <p>Created: {created}</p>
            <p>Updated: {updated}</p>
          <StyledButtonCard>
             <p>{_count.reactions}</p>
             <LikeButton />
             <p>{_count.comments}</p>
             <CommentsButton />
             <DeleteButton />
          </StyledButtonCard>
         </StyledFollowingList>
        </>
    );
}

export default FollowingList;