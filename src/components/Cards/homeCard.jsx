import Icons from "../Icons/index";
import Emoji from "../Emoji/index";
import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import PostList from "../Posts/index";
import { StyledHomeCard, StyledButtonCard } from "../Cards/styledCard.styles";


function HomeCard() {

    return (  
        <>
          <StyledHomeCard>
              <div>
                <h2>PROFILE NAME:</h2>
              </div> 
              <div>
              <PostList />
                </div>
                <div>
                <Icons />
                <Emoji />
                <StyledButtonCard>
                  <LikeButton />
                  <CommentsButton />
                </StyledButtonCard>   
              </div>
          </StyledHomeCard>
        </>
    );
}

export default HomeCard;