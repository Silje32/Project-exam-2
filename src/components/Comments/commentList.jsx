import LikesButton from "../Buttons/likesButton";
import { StyledCloseButton } from "../Buttons/Button.styles";
import { StyledButtonCard } from "../Cards/StyledCard.styles";
import { StyledCommentList } from "./CommentList.styles";

export function CommentList({ 
    comments: { body, author } 
}) {

    return ( 
        <>
         <StyledCommentList>
            <p>{body}</p>
            <h4>{author}</h4>
            <StyledButtonCard>
                <LikesButton />
                <CloseButton />
            </StyledButtonCard>
         </StyledCommentList>
        </>
    );
}

export default CommentList;