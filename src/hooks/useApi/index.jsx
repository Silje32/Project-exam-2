import { useState, useEffect } from 'react';


export default function useApi(BASE_URL) {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(null);
  
    
      useEffect(() => {
          async function getData() {
            
            const options = {
              headers: { "Content-Type": "application/json" },
              method: ("POST","GET"),
              body: JSON.stringify(data),  
            };
      

            try {
              setisLoading(true);
              setisError(null);
              const response = await fetch(BASE_URL, options);
             
              setData(json);

              if(!response.ok) {
                const json = await response.json();
                return setisError(json.errors?.[0]?.message ?? "There was an error");             
          }

              const { setUser } = useUserActions();
                 console.log(setUser);
  
            } catch (error) {
              console.log(error);
              setisError(true);
            } finally {
              setisLoading(false);    
            } 
          }    
          
         getData();
      }, [BASE_URL]); 
      return { data, isLoading, isError };
}

