import { useState } from "react";
import { StyledProfileFilter } from "./StyledProfilesFilter.styles";


function ProfileFilter({ posts = [] }) {
  console.log("props", posts);

  const [searchTerm, setSearchTerm] = useState("");
    console.log("search", searchTerm);

  
  const filterPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log("filterPosts", filterPosts);


    return ( 
        <>
          <StyledProfileFilter value={searchTerm} onChange={(event) => setSearchTerm(event.target.value.trim())}  />               
        </>
    );
}

export default ProfileFilter;