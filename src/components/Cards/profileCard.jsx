import { Link } from "react-router-dom";
import Icons from "../Icons/index";
import Emoji from "../Emoji/index";
import DeleteButton from "../Buttons/deleteButton";
import FollowButton from "../Buttons/followButton";
import { StyledBaseButton } from "../Buttons/buttons.styles";
import { StyledProfileCard } from "./styledCard.styles";

function ProfileCard() {

    return (  
        <>
          <StyledProfileCard>
              <div>
                  <h3>Profile Name:</h3>
                  <FollowButton />
              </div>
              <div>
              <h3>Title:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
              </div> 
              <div>
                <Icons />
                <Emoji />
                <StyledBaseButton>LIKE</StyledBaseButton>
                <StyledBaseButton>COMMENT</StyledBaseButton>
                <DeleteButton />
              </div>
              <div>
                <h3>Title:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
              </div> 
              <div>
                <Icons />
                <Emoji />
                <StyledBaseButton>LIKE</StyledBaseButton>
                <StyledBaseButton>COMMENT</StyledBaseButton>
                <DeleteButton />
              </div>
              <div>
                <h3>Title:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
              </div> 
              <div>
                <Icons />
                <Emoji />
                <StyledBaseButton>LIKE</StyledBaseButton>
                <StyledBaseButton>COMMENT</StyledBaseButton>
                <DeleteButton />
              </div>
          </StyledProfileCard>
        </>
    );
}

export default ProfileCard;