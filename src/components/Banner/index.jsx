import { BannerAvatarurl } from "../../constants/api";
import useApi from "../../hooks/useApi";

function Banner() {
 
    const { data: banner, isLoading, error  } = useApi(BannerAvatarurl );

    if (isLoading) {
      return <div>Loading posts...</div>;
    }
  
    if (error) {
      return <div>Error loading home page</div>;
    }
    


    return (

        {banner.map((banner) => (
            <div>
               <div>{banner.image}</div>
            </div>

      );
}

export default Banner;