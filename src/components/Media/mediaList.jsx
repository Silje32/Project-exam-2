import { StyledBanner, StyledAvatar } from "./MediaList.styles";

export function MediaList() {

    return ( 
        <>
          <StyledBanner src={"https://url.com/image.jpg"}  alt="Banner"  />
          <StyledAvatar src={"https://url.com/image.jpg"}  alt="Avatar"  />
        </>
    );
}

export default MediaList;