// Retrieve all posts from profiles that the authenticated user is following.

import Following from "../Following/Following";
import { StyledFollowingCard, StyledFlex } from "./StyledCard.styles";


function FollowingCard() {

    return (  
       <>
         <StyledFollowingCard>
          <StyledFlex>      
            <Following />
          </StyledFlex>   
         </StyledFollowingCard>
       </>
    );
}

export default FollowingCard;