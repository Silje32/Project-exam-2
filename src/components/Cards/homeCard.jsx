import ViewAllProfilesButton from "../Buttons/ViewAllProfilesButton";
import PostList from "../Posts/PostList";
import ProfileFilter from "../Searchbar/ProfilesFilter";
import { StyledHomeCard, StyledFlex } from "./StyledCard.styles";


function HomeCard() {

  const posts = [];

    return (  
       <>
         <StyledHomeCard>
          <StyledFlex>
           <ViewAllProfilesButton />
              <ProfileFilter posts={posts} />
              <PostList posts={posts} />        
          </StyledFlex>   
         </StyledHomeCard>
       </>
    );
}

export default HomeCard;