import GetAllProfileList from "../Profiles/GetAllProfiles";
import BackToHomeButton from "../Buttons/BackToHomeButton"; 
import { StyledGetAllProfilesCard } from "../Cards/StyledCard.styles";


function GetAllProfilesCard() {

    return (  
        <>
          <StyledGetAllProfilesCard>
            <h2>ALL PROFILES:</h2>
            <BackToHomeButton />
            <GetAllProfileList /> 
          </StyledGetAllProfilesCard>          
        </>
    );
}

export default GetAllProfilesCard;