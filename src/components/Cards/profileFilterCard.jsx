import { useState } from "react";
import StyledProfileFilter  from "../Searchbar/profileFilter";
import { StyledCard } from "./styledCard.styles";
import { profilesurl } from "../../constants/api";

function ProfileFilterCard(profilesurl) {
   const [searchTerm, setSearchTerm] = useState("");
    
   console.log("search", searchTerm );

    return (  
        <>
          <StyledCard>
              <div>
              <StyledProfileFilter onChange={(event) => setSearchTerm(event.target.value.trim())}  />
              </div> 
          </StyledCard>
        </>
    );
}

export default ProfileFilterCard;