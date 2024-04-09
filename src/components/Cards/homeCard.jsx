import GetAllProfiles from "../Profiles/getAllProfiles";
import GetPost from "../Profiles/getPosts";
import ViewPostButton from "../Buttons/viewPostButton";
import { StyledHomeCard } from "../Cards/styledCard.styles";



function HomeCard() {

    return (  
        <>
          <StyledHomeCard>
            <div>
              <GetPost />
            </div>
            <div>
                <ViewPostButton />       
            </div>
      
            <div>
              <GetAllProfiles />
            </div> 
          </StyledHomeCard>
        </>
    );
}

export default HomeCard;