import Emoji from "../Emoji/emoji";
import GetPosts from "../Profiles/GetPost";
import { StyledMyProfileCard, StyledFlex } from "./StyledCard.styles";

function ProfileCard() {

    return (  
        <>
          <StyledMyProfileCard>
            <StyledFlex>
              <GetPosts />
              <Emoji /> 
            </StyledFlex> 
          </StyledMyProfileCard>
        </>
    );
}

export default ProfileCard;