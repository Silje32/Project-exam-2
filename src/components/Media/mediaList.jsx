import { StyledBanner, StyledAvatar } from "./mediaList.styles";

export function Media() {

    return ( 
        <>
          <StyledBanner src={`https://url.com/image.jpg`}  alt="Banner"  />
          <StyledAvatar src={`https://url.com/image.jpg`}  alt="Avatar"  />
        </>
    );
}

export default Media;