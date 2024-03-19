import { followurl } from "../../constants/api";
import { unfollowurl } from "../../constants/api";
import useApi from "../../hooks/useApi";


function FollowButton () {
    const { data, isLoading, error  } = useApi(followurl);

    if (isLoading) {
      return <div>Follow profile</div>;
    }

  
    if (error) {
      return <div>An error occured when following this profile</div>;
    }

    
    function handleFollow() {

      const unfollow = useApi(unfollowurl);
     
    
      if (unfollow) {
        return <div>Stop following this profile</div>;
      }
         
    }


    return (
        <>  
          <FollowButton onClick={handleFollow}>
            FOLLOW
          </FollowButton>
        </> 
        
    );
}

export default FollowButton ;