import { useState, useEffect } from "react";
import ProfileFilter  from "../Searchbar/profileFilter";
import { StyledCard } from "./styledCard.styles";
import { profileIdurl } from "../../constants/api";

function ProfileFilterCard() {
   const [searchTerm, setSearchTerm] = useState([]);
   const [isLoading, setisLoading] = useState(null);
   const [isError, setisError] = useState(null);
    
   console.log("search", searchTerm );

   useEffect(() => {
    async function getData(data) {
      console.log(data);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "GET",
        body: JSON.stringify(data),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(profileIdurl, options);
        const json = await response.json();

        setSearchTerm(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 
    } 
        
   getData("profileIdurl");
}, []); 

  if (isLoading) {
    return <div>Loading profiles...</div>;
  }

  if (isError) {
    return <div>Error loading profiles</div>;
  }


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