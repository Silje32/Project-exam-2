import { StyledGetAllProfileList } from "./getAllProfileList.styles";

export function GetAllProfileList({ 
    profile: { banner, avatar, name, email, _count },
}) {

    return ( 
        <>
         <StyledGetAllProfileList>   
            <img src={`${banner}`} alt="Banner" />
            <img src={`${avatar}`} alt="Avatar" />
            <h2>Profile name: {name}</h2>
            <h3>E-mail: {email}</h3>
            <p>Posts: {_count.posts}</p>
            <p>Followers: {_count.followers}</p>
            <p>Following: {_count.following}</p>
         </StyledGetAllProfileList>
        </>
    );
}

export default GetAllProfileList;