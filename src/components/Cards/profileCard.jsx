import Emoji from "../Emoji/Emoji";
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