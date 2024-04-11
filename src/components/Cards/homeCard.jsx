import GetAllProfiles from "../Profiles/getAllProfiles";
import GetPosts from "../Profiles/getPosts";
import { StyledHomeCard } from "../Cards/styledCard.styles";



function HomeCard() {

    return (  
        <>
          <StyledHomeCard>
            <div>
              <GetPosts />
            </div>
      
            <div>
              <GetAllProfiles />
            </div> 
          </StyledHomeCard>
        </>
    );
}

export default HomeCard;