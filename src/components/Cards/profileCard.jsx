import Emoji from "../emoji/Emoji";
import GetPosts from "../profiles/GetPost";
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