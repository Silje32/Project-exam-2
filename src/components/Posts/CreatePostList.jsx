import LikeButton from "../Buttons/LikeButton";
import CommentsButton from "../Buttons/CommentsButton";
import DeleteCommentButton from "../Delete/DeleteCommentButton";
import { StyledButtonCard } from "../Cards/StyledCard.styles";
import { StyledCreatePostListCard } from "./CreatePostList.styles";

export function CreatePostList({ 
    post: { title, body, _count },
}) {

    return ( 
        <>
         <StyledCreatePostListCard>
            <h2>{title}</h2>
              <p>{body}</p>
            <StyledButtonCard>
                <p>{_count.reactions}</p>
                <LikeButton />
                <p>{_count.comments}</p>
                <CommentsButton />
                <DeleteCommentButton />
            </StyledButtonCard>
         </StyledCreatePostListCard>
        </>
    );
}

export default CreatePostList;