// A registered user may view a list of Profiles.
// A registered user may update their avatar and banner.
// A registered user may view a list of Posts.
// A registered user may view a single Profile by name.
// A registered user may react to any Post with an emoji.
// A registered user may follow and unfollow another Profile.
// A registered user may update a Post they own.
// A registered user may delete a Post they own. 

import Banner from "../components/Banner/index";
import ProfileCard from "../components/Cards/profileCard";
import ProfileFilterCard from "../components/Cards/profileFilterCard";

function MyProfile() {
    return (
        <> 
           <Banner />          
           <ProfileCard />
           <ProfileFilterCard />
        </>      
    );
}

export default MyProfile;

