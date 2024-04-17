import Icons from "../icons/Icons";
import LikeButton from "../buttons/LikeButton";
import CommentsButton from "../buttons/CommentsButton";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../delete/DeleteButton";

import { StyledButtonCard } from "../cards/StyledCard.styles";
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
                <UpdateButton />
                <DeleteButton />
            </StyledButtonCard>
         </StyledCreatePostListCard>
        </>
    );
}

export default CreatePostList;