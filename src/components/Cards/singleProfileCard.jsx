import Emoji from "../Emoji/emoji";
import LikeButton from "../Buttons/likeButton";
import BackButton from "../Buttons/BackToHomeButton";
import SingleProfile from "../SingleProfile/SingleProfiles";
import { StyledSingleProfileCard, StyledButtonCard } from "./StyledCard.styles";


function SingleProfileCard() {

    return (  
        <>
          <StyledSingleProfileCard>
              <div>
              <BackButton/>
              </div>
              <div>
                <SingleProfile />
              </div>
              <div>
                <Emoji />
                <StyledButtonCard>
                  <LikeButton />
                </StyledButtonCard>   
              </div>
          </StyledSingleProfileCard>
        </>
    );
}

export default SingleProfileCard;