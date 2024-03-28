import { Link } from "react-router-dom";
import Icons from "../Icons/index";
import Emoji from "../Emoji/index";
import Comment from "../Comments/index";
import LikesButton from "../Buttons/likesButton";
import PublishButton from "../Buttons/publishButton";
import { StyledBaseButton } from "../Buttons/buttons.styles";
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
                     <StyledBaseButton>
                       <Link to={"/home"}>BACK</Link>
                     </StyledBaseButton>
                  </StyledButtonCard>
              </div>
              <div>
                <h3>Profile Name:</h3>
                  <Comment />
              </div> 
              <div>
                <h3>Profile Name:</h3>
                  <Comment />
              </div> 
              <div>
                <h3>Profile Name:</h3>
                  <Comment />
              </div> 
              <div>
                <h3>Write a comment:</h3>
                <Icons />
                <PublishButton />
              </div>
          </StyledCard>
        </>
    );
}

export default CommentCard;