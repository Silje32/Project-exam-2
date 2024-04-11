import Emoji from "../Emoji/emoji";
import PostList from "../Profiles/postList";
import ViewPostButton from "../Profiles/viewPostButton";
import { StyledProfileCard } from "./styledCard.styles";

function ProfileCard() {

    return (  
        <>
          <StyledProfileCard>
            <ViewPostButton />
            <PostList />
            <Emoji />    
          </StyledProfileCard>
        </>
    );
}

export default ProfileCard;