import Emoji from "../Emoji/emoji";
import LikeButton from "../Buttons/likeButton";
import BackToProfileButton from "../Buttons/BackToProfileButton";
import SinglePostId from "../SinglePost/SinglePostsId";
import { StyledSinglePostCard, StyledButtonCard } from "./StyledCard.styles";


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