import Icons from "../Icons/icons";
import LikesButton from "../Buttons/likesButton";
import BackButton from "../Buttons/backButton";
import { StyledButtonCard } from "../Cards/styledCard.styles";
import { StyledCommentList } from "./commentList.styles";

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