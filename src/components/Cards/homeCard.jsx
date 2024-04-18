import ViewAllProfilesButton from "../buttons/ViewAllProfilesButton";
import PostList from "../posts/PostList";
import ProfileFilter from "../searchbar/ProfilesFilter";
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