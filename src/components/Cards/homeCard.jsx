import ViewAllProfilesButton from "../Buttons/ViewAllProfilesButton";
import PostList from "../Posts/PostList";
import ProfileFilter from "../Searchbar/ProfilesFilter";
import { StyledHomeCard, StyledFlex } from "./StyledCard.styles";


function HomeCard() {

    return (  
       <>
         <StyledHomeCard>
          <StyledFlex>
           <ViewAllProfilesButton />
              <ProfileFilter />
              <PostList />        
          </StyledFlex>   
         </StyledHomeCard>
       </>
    );
}

export default HomeCard;