// Retrieve all posts from profiles that the authenticated user is following.

import Following from "../Following/Following";
import { StyledFollowingCard } from "./StyledCard.styles";


function FollowingCard() {

    return (  
       <>
         <StyledFollowingCard>      
            <Following />  
         </StyledFollowingCard>
       </>
    );
}

export default FollowingCard;