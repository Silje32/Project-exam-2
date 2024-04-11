import Icons from "../Icons/icons";
import Emoji from "../Emoji/emoji";
import LikeButton from "../Buttons/likeButton";
import BackToProfileButton from "../Buttons/backToProfileButton";
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
                  <BackToProfileButton />
                </StyledButtonCard>   
              </div>
          </StyledSinglePostCard>
        </>
    );
}

export default SinglePostCard;