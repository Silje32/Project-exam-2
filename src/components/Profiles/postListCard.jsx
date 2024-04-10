import Icons from "../Icons/icons";
import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import UpdateButton from "../Buttons/updateButton";
import DeleteButton from "../Delete/deleteButton";
import ViewPostButton from "../Buttons/viewPostButton"
import { StyledButtonCard } from "../Cards/styledCard.styles";
import { StyledPostListCard } from "./postListCard.styles";

export function PostListCard({ post: { title, body, image } }) {

    return ( 
        <>
         <StyledPostListCard>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <img src={`${image}`} alt="Image of post" />
            <Icons />
            <StyledButtonCard>
                <LikeButton />
                <CommentsButton />
                <UpdateButton />
                <DeleteButton />
            </StyledButtonCard>
            <ViewPostButton /> 
         </StyledPostListCard>
        </>
    );
}

export default PostListCard;