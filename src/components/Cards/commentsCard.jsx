import Icons from "../icons/Icons";
import Emoji from "../emoji/Emoji";
import Comment from "../comments/Comment";
import LikesButton from "../Buttons/likesButton";
import PublishButton from "../Buttons/publishButton";
import BackButton  from "../buttons/BackToHomeButton";
import { StyledCard, StyledButtonCard } from "./StyledCard.styles";

function CommentCard() {

    return (  
        <>
          <StyledCard>
              <div>
                  <Emoji />
                  <Icons />
                  <StyledButtonCard>
                     <LikesButton />
                     <BackButton />
                  </StyledButtonCard>
              </div>
             
              <div>
                <h3>Profile Name:</h3>
                  <Comment />
              </div>

              <div>
                <h4>Write a comment:</h4>
                <Icons />
                <Emoji />
                <PublishButton />
              </div>
          </StyledCard>
        </>
    );
}

export default CommentCard;