import { useState, useEffect } from 'react';
import ProfilesFilter from "./ProfilesFilter";
import { NEW_URL } from "../../constants/api";


function Search() {

  const [search, setSearch] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  
  
        useEffect(() => {
          async function getData() {
            
            const options = {
              headers: {
                 "Content-Type": "application/json",
              },
              method: "GET",
            };


            try {
              setisLoading(true);
              setisError(false);

              const response = await fetch(`${NEW_URL}/social/posts/_tag=my_tag>`,options);

              if (response.ok) {
                const json = await response.json();
                return setSearch(json);
              }
              
              throw new Error();
            } catch (Error) {
              console.log(Error);
              setisError(true);
            } finally {
              setisLoading(false);    
            } 
          } 
                    
           getData();
        }, []); 
    
        if (isLoading) {
          return <div>Loading posts...</div>;
        }
    
        if (isError) {
          return <div>Error loading posts</div>;
        }

        return ( 
          <>  
           {search.map((data, id) => (
             <ProfilesFilter key={id} data={data} />
           ))}    
          </>            
        );
}

export default Search;