import Icons from "../Icons/icons";
import Emoji from "../Emoji/emoji";
import LikeButton from "../Buttons/likeButton";
import BackButton from "../Buttons/backButton";
import SinglePostId from "../SinglePost/singlePostId";
import { StyledSinglePostCard, StyledButtonCard } from "../Cards/styledCard.styles";


function SinglePostCard() {

    return (  
        <>
          <StyledSinglePostCard>
              <div>
                <h3>Single Post</h3>
              </div> 
              <div>
                <SinglePostId />
              </div>
              <div>
                <Icons />
                <Emoji />
                <StyledButtonCard>
                  <LikeButton />
                  <BackButton />
                </StyledButtonCard>   
              </div>
          </StyledSinglePostCard>
        </>
    );
}

export default SinglePostCard;