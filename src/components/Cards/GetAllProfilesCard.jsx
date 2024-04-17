import GetAllProfileList from "../profiles/GetAllProfiles";
import BackToHomeButton from "../buttons/BackToHomeButton"; 
import { StyledGetAllProfilesCard } from "../cards/StyledCard.styles";


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