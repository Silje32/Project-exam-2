import Icons from "../Icons/Icons";
import LikesButton from "../Buttons/likesButton";
import BackButton from "../Buttons/BackToHomeButton";
import { StyledButtonCard } from "../Cards/StyledCard.styles";
import { StyledCommentList } from "./commentList.styles";

export function CommentList({ 
    comments: { body, author } 
}) {

    return ( 
        <>
         <StyledCommentList>
            <p>{body}</p>
            <h4>{author}</h4>
            <StyledButtonCard>
                <Icons />
                <LikesButton />
                <BackButton />
            </StyledButtonCard>
         </StyledCommentList>
        </>
    );
}

export default CommentList;