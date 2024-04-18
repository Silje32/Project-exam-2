import Icons from "../icons/Icons";
import Emoji from "../emoji/Emoji";
import LikeButton from "../Buttons/likeButton";
import BackButton from "../buttons/BackToHomeButton";
import SingleProfile from "../singleProfile/SingleProfiles";
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
                <Icons />
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