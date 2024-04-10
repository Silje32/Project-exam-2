import Icons from "../Icons/icons";
import Emoji from "../Emoji/emoji";
import Comment from "../Comments/comment";
import LikesButton from "../Buttons/likesButton";
import PublishButton from "../Buttons/publishButton";
import BackButton  from "../Buttons/backButton";
import { StyledCard, StyledButtonCard } from "./styledCard.styles";

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