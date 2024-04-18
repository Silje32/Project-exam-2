import Icons from "../icons/Icons";
import LikeButton from "../buttons/LikeButton";
import CommentsButton from "../buttons/CommentsButton";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../delete/DeleteButton";
import ViewProfileButton from "./ViewProfileButton";
import { StyledButtonCard } from "../cards/StyledCard.styles";
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
            <UpdateButton />
            <DeleteButton />
            </StyledButtonCard>
            <ViewProfileButton /> 
         </StyledPostListCard>
        </>
    );
}

export default PostListCard;