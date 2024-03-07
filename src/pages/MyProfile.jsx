// A registered user may view a list of Profiles.
// A registered user may update their avatar and banner.
// A registered user may view a list of Posts.
// A registered user may view a single Profile by name.
// A registered user may create a comment on any Post. 
// A registered user may react to any Post with an emoji.
// A registered user may follow and unfollow another Profile.
// A registered user may update a Post they own.
// A registered user may delete a Post they own. 

import StyledBaseButton from "../components/Togglebutton/index";
import Icons from "../components/Icons/index";

function MyProfile() {
    return (
        <>
           <h2>PROFILE NAME</h2>
           <Icons />
           <StyledBaseButton />
        </>      
    );
}

export default MyProfile;

