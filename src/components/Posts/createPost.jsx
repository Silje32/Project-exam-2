import { useState, useEffect } from 'react';
import { postpostsurl } from "../../constants/api";



function CreatePost() {
  const [create, setCreate] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    async function getData(data) {
      console.log(data);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(postpostsurl, options);
        const json = await response.json();

        setCreate(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 
    } 
    
    
   getData("postpostsurl");
}, []); 
  
   

    if (isLoading) {
      return <div>Loading posts...</div>;
    }
  
    if (isError) {
      return <div>Error loading Create new Post page</div>;
    }
    

    return ( 
        <>
          {create.map((create) => (
             <div key={create.id}>
                <h2>{create.title}</h2>
                <p>{create.body}</p>
             </div>
          ))}
        </>
    );
}

export default CreatePost;