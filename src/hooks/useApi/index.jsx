import { useState, useEffect } from 'react';


export default function useApi(loginurl) {
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState([]);
    const [data, setData] = useState([]);
  
      useEffect(() => {
          async function getData() {
            try {
              setisLoading(true);
              setError([]);
              const response = await fetch(loginurl, options);

              if(!response.ok) {
                const json = await response.json();
                return setData(json);
              }
              
              throw new Error("The was an error when fetching the website");
            } catch (error) {
              console.log(error);
              setError (error.toString());
            }finally {
              setisLoading (false);
            } 
        }    
          
        getData();
        }, [loginurl]); 
        return { data, isLoading, error };
}

