import Icons from "../Icons/Icons";
import Emoji from "../Emoji/Emoji";
import Comment from "../Comments/Comment";
import LikesButton from "../Buttons/likesButton";
import PublishButton from "../Buttons/publishButton";
import BackButton  from "../Buttons/BackToHomeButton";
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