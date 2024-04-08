import Icons from "../Icons/index";
import Emoji from "../Emoji/emoji";
import GetPost from "../Profiles/getPosts";
import GetProfile from "../Profiles/getProfile";
import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import ViewPostButton from "../Buttons/viewPostButton";
import { StyledHomeCard, StyledButtonCard } from "../Cards/styledCard.styles";



function HomeCard() {

    return (  
        <>
          <StyledHomeCard>      
              <div>
              <GetProfile />
              </div> 
              <div>
              <GetPost />
              </div>
                <div>
                <Icons />
                <Emoji />
                <StyledButtonCard>
                  <LikeButton />
                  <CommentsButton />
                </StyledButtonCard>   
              </div>
              <ViewPostButton />
          </StyledHomeCard>
        </>
    );
}

export default HomeCard;