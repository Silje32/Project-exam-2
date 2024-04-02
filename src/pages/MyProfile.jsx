import Banner from "../components/Banner/index";
import ProfileCard from "../components/Cards/profileCard";
import ProfileInputCard from "../components/Cards/profileInputCard";
import { StyledMyProfileCard } from "../components/Cards/styledCard.styles";

function MyProfile() {
    return (
        <> 
          <Banner />  
          <StyledMyProfileCard>      
             <ProfileCard />           
             <ProfileInputCard />
          </StyledMyProfileCard>
        </>      
    );
}

export default MyProfile;

