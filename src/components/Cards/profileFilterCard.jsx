import { useState } from "react";
import ProfileFilter  from "../Searchbar/profileFilter";
import { StyledCard } from "./styledCard.styles";
import {  profileIdurl } from "../../constants/api";

function ProfileFilterCard() {
   const [searchTerm, setSearchTerm] = useState([]);
    
   console.log("search", searchTerm );

    return (  
        <>
          <StyledCard>
              <div>
              <ProfileFilter onChange={(event) => setSearchTerm(event.target.value.trim())}  />
              </div> 
          </StyledCard>
        </>
    );
}

export default ProfileFilterCard;