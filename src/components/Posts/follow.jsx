import { getfollowingurl } from "../../constants/api";
import { unfollowurl } from "../../constants/api";
import useApi from "../../hooks/useApi";


function Follow() {
    const { data: follow, isLoading, error  } = useApi(getfollowingurl);

    if (isLoading) {
      return <div>Follow profile...</div>;
    }
  
    if (error) {
      return <div>Error following profile</div>;
    }

    function handleFollow() {

        const unfollow = useApi(unfollowurl);
       
      
        if (unfollow) {
          return <div>Stop follow this profile</div>;
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

export default Follow;