import GetAllProfiles from "../Profiles/getAllProfiles";
import GetPosts from "../Profiles/getPosts";
import ViewProfileButton from "../Buttons/viewProfileButton";
import { StyledHomeCard } from "../Cards/styledCard.styles";



function HomeCard() {

    return (  
        <>
          <StyledHomeCard>
            <div>
              <GetPosts />
            </div>
            <div>
                <ViewProfileButton />       
            </div>
      
            <div>
              <GetAllProfiles />
            </div> 
          </StyledHomeCard>
        </>
    );
}

export default HomeCard;