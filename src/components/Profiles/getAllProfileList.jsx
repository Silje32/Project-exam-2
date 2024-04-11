import { StyledGetAllProfileList } from "./getAllProfileList.styles";
import ViewPostButton from "./viewPostButton";

export function GetAllProfileList({ profile: { banner, avatar, name, email, _count  } }) {

    return ( 
        <>
         <StyledGetAllProfileList>   
            <img src={`${banner}`} alt="Banner" />
            <img src={`${avatar}`} alt="Avatar" />
            <h2>Profile name: {name}</h2>
            <p>Email: {email}</p>
            <p>Posts: {_count.posts}</p>
            <p>Followers: {_count.followers}</p>
            <p>Following: {_count.following}</p>
            <ViewPostButton />
         </StyledGetAllProfileList>
        </>
    );
}

export default GetAllProfileList;