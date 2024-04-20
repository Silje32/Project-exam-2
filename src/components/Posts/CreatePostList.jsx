import Icons from "../Icons/Icons";
import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import DeleteButton from "../Delete/deleteButton";
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
                <Icons />
                <p>{_count.reactions}</p>
                <LikeButton />
                <p>{_count.comments}</p>
                <CommentsButton />
                <DeleteButton />
            </StyledButtonCard>
         </StyledCreatePostListCard>
        </>
    );
}

export default CreatePostList;