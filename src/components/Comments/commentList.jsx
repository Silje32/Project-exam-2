import Icons from "../Icons/index";
import LikesButton from "../Buttons/likesButton";
import { StyledButtonCard } from "../Cards/styledCard.styles";
import { StyledCommentList } from "./commentList.styles";

export function CommentList({ comment: { body, author } }) {

    return ( 
        <>
         <StyledCommentList>
            <p>{body}</p>
            <h4>{author}</h4>

            <StyledButtonCard>
                <Icons />
                <LikesButton />
                <Back />
            </StyledButtonCard>
         </StyledCommentList>
        </>

    );
}

export default CommentList;