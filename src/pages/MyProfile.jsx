import Banner from "../components/Banner/banner";
import ProfileCard from "../components/Cards/profileCard";
import ProfileInputCard from "../components/Cards/profileInputCard";
import { StyledFlex } from "../components/Cards/styledCard.styles";

function MyProfile() {
    return (
        <> 
          <Banner />  
          <StyledFlex>      
             <ProfileCard />           
             <ProfileInputCard />
          </StyledFlex>
        </>      
    );
}

export default MyProfile;

