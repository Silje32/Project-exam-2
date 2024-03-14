import { useState, useEffect } from 'react';

export default function useApi(registerurl) {

    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState([]);
    const [data, setData] = useState([]);
  
      useEffect(() => {
          async function getData() {
            try {
              setisLoading(true);
              setError([]);
              const response = await fetch(registerurl, options);

              if(!response.ok) {
                throw new Error("The was an error when fetching the website"); 
  
              }
              const json = await response.json();
  
              console.log(json);
              setData(json);
            }  
  
            catch (error) {
              setError (error.toString());
            }
            finally {
              setisLoading (false);
            } 
        }    
          getData();
        }, [registerurl]); 


  return { isLoading, error, data };
}

