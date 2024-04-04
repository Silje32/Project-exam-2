import Icons from "../Icons/index";
import Emoji from "../Emoji/index";
import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import SinglePostId from "../Posts/singlePostId";
import { StyledSinglePostCard, StyledButtonCard } from "../Cards/styledCard.styles";


function SinglePostCard() {

    return (  
        <>
          <StyledSinglePostCard>
              <div>
                <h2>PROFILE NAME:</h2>
              </div> 
              <div>
              <SinglePostId/>
                </div>
                <div>
                <Icons />
                <Emoji />
                <StyledButtonCard>
                  <LikeButton />
                  <CommentsButton />
                </StyledButtonCard>   
              </div>
          </StyledSinglePostCard>
        </>
    );
}

export default SinglePostCard;