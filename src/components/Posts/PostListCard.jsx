import LikeButton from "../Buttons/LikeButton";
import CommentsButton from "../Buttons/CommentsButton";
import UpdateButton from "../Buttons/UpdateButton";
import DeleteButton from "../Delete/DeleteCommentButton";
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
            <p>{_count.reactions}</p>
            <LikeButton />
            <p>{_count.comments}</p>
            <CommentsButton />
            <UpdateButton />
            <DeleteButton />
        </StyledButtonCard>
            <ViewProfileButton /> 
         </StyledPostListCard>
        </>
    );
}

export default PostListCard;