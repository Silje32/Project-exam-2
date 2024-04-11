import Media from "../components/Media/media";
import ProfileCard from "../components/Cards/profileCard";
import ProfileInputCard from "../components/Cards/profileInputCard";
import { StyledFlex } from "../components/Cards/styledCard.styles";

function MyProfile() {
    return (
        <> 
          <Media />  
          <StyledFlex>   
             <ProfileCard />           
             <ProfileInputCard />
          </StyledFlex>
        </>      
    );
}

export default MyProfile;

