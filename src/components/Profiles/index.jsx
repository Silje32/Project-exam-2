import { getprofilesurl } from "../../constants/api";
import useApi from "../../hooks/useApi";

function GetProfile () {

    const { data: profile, isLoading, error  } = useApi(getprofilesurl);

    if (isLoading) {
      return <div>Loading posts...</div>;
    }
  
    if (error) {
      return <div>Error loading profiles</div>;
    }
    
    return ( 
        <>
          {profile.map((profile) => (
             <div>
                <h2>{profile.title}</h2>
                <div>{profile.image}</div>
             </div>
          ))}
        </>
     );
}

export default GetProfile;