import { Link } from "react-router-dom";
import Icons from "../Icons/index";
import Emoji from "../Emoji/index";
import Comment from "../Comments/index";
import LikeButton from "../Buttons/likeButton";
import PublishButton from "../Buttons/publishButton";
import { StyledBaseButton } from "../Buttons/buttons.styles";
import { StyledCard } from "./styledCard.styles";

function CommentCard() {

    return (  
        <>
          <StyledCard>
              <div>
                  <Emoji />
                  <Icons />
                  <LikeButton />
                  <StyledBaseButton>
                       <Link to={"/home"}>BACK</Link>
                  </StyledBaseButton>
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