import Icons from "../Icons/icons";
import Emoji from "../Emoji/emoji";
import LikeButton from "../Buttons/likeButton";
import BackButton from "../Buttons/backButton";
import SingleProfile from "../SingleProfile/singleProfile";
import { StyledSingleProfileCard, StyledButtonCard } from "../Cards/styledCard.styles";


function SingleProfileCard() {

    return (  
        <>
          <StyledSingleProfileCard>
              <div>
                <h3>Single Profile</h3>
              </div> 
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