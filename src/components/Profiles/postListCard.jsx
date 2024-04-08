import Icons from "../Icons/index";
import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import UpdateButton from "../Buttons/updateButton";
import DeleteButton from "../Buttons/deleteButton";
import { StyledButtonCard } from "../Cards/styledCard.styles";
import { StyledPostListCard } from "./postListCard.styles";

export function PostListCard({ post: { title, body, image } }) {

    return ( 
        <>
         <StyledPostListCard>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <img src={`${image}`} alt="Image of post" />
            <StyledButtonCard>
                <Icons />
                <LikeButton />
                <CommentsButton />
                <UpdateButton />
                <DeleteButton />
            </StyledButtonCard>
         </StyledPostListCard>
        </>

    );
}

export default PostListCard;