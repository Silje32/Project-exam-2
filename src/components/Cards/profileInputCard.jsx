import ProfileFilterInput from "../Searchbar/profileFilterInput";
import ProfileFilter from "../Searchbar/profileFilter";
import { StyledProfileFilterCard } from "./styledCard.styles";

function ProfileInputCard() {

    return (  
        <>
          <StyledProfileFilterCard>
             <ProfileFilterInput /> 
             <ProfileFilter /> 
          </StyledProfileFilterCard>             
        </>
    );
}

export default ProfileInputCard;