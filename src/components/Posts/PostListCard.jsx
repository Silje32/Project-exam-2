import Icons from "../Icons/Icons";
import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import DeleteButton from "../Delete/deleteButton";
import ViewProfileButton from "./ViewProfileButton";
import { StyledButtonCard } from "../Cards/StyledCard.styles";
import { StyledPostListCard } from "./PostListCard.styles";

export function PostListCard({ 
    post: { title, body, tags, media, created, updated, _count },
}) {

    return ( 
        <>
         <StyledPostListCard>
            <h3>Title: {title}</h3>
            <p>{tags}</p>
            <p>{body}</p>
            <img src={`${media}`} alt="Image of post" />
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
            <ViewProfileButton /> 
         </StyledPostListCard>
        </>
    );
}

export default PostListCard;