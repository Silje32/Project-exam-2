import Emoji from "../Emoji/emoji";
import PostList from "../Profiles/postList";
import { StyledProfileCard } from "./styledCard.styles";

function ProfileCard() {

    return (  
        <>
          <StyledProfileCard>
            <PostList />
            <Emoji />    
          </StyledProfileCard>
        </>
    );
}

export default ProfileCard;