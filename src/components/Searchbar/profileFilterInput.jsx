import { useState } from "react";
import ProfileFilter  from "./profileFilter";


function ProfileFilterInput() {

   const [searchTerm, setSearchTerm] = useState([]);
    
   console.log("search", searchTerm );

   
    return (  
        <>
           <ProfileFilter onChange={(event) => setSearchTerm(event.target.value.trim())}  />
        </>
    );
}

export default ProfileFilterInput;