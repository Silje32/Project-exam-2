import Icons from "../icons/Icons";
import LikesButton from "../Buttons/likesButton";
import BackButton from "../buttons/BackToHomeButton";
import { StyledButtonCard } from "../Cards/StyledCard.styles";
import { StyledCommentList } from "./CommentList.styles";

export function CommentList({ comments: { body, author } }) {

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