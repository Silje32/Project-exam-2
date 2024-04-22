import Icons from "../Icons/Icons";
import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import DeleteButton from "../Delete/deleteCommentButton";
import { StyledButtonCard, StyledFollowingList } from "../Cards/StyledCard.styles";


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
            <Icons />
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