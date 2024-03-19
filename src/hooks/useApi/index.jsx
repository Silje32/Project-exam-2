import { useState, useEffect } from 'react';


export default function useApi(BASE_URL) {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);
  
    
      useEffect(() => {
          async function getData() {

            const options = {
              headers: { "Content-Type": "application/json" },
              method: ("POST","GET"),
              body: JSON.stringify(data),  
            };
      

            try {
              setisLoading(true);
              setError(null);
              const response = await fetch(BASE_URL, options);
              const json = await response.json();
             

              if(!response.ok) {
                  return setError(json.errors?.[0]?.message ?? "There was an error");             
          }

            } catch (error) {
              console.log(error);
              setError (error.toString());
            } finally {
              setisLoading (false);
              
            } 
        }    
          
        getData();
        }, [BASE_URL]); 
        return { data, isLoading, error };
}

