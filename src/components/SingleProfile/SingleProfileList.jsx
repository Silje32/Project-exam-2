import { StyledSingleProfileList } from "./SingleProfileList.styles";

export function SingleProfileList({ 
    single: { banner, avatar, name, email, _count } 
}) {

    return ( 
        <>
         <StyledSingleProfileList> 
            <img src={`${banner}`} alt="Banner" />
            <img src={`${avatar}`} alt="Avatar" />
            <h2>Profile name: {name}</h2>
            <p>E-mail: {email}</p>
            <p>Posts: {_count.posts}</p>
            <p>Followers: {_count.followers}</p>
            <p>Following: {_count.following}</p>
         </StyledSingleProfileList>
        </>
    );
}

export default SingleProfileList;