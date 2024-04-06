import Icons from "../Icons/index";
import Emoji from "../Emoji/emoji";
import PostList from "../Posts/postList";
import { StyledProfileCard } from "./styledCard.styles";

function ProfileCard() {

    return (  
        <>
          <StyledProfileCard>
              <div>
                 <PostList />
                 <Icons />
                 <Emoji />
              </div>    
          </StyledProfileCard>
        </>
    );
}

export default ProfileCard;