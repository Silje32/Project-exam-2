import { Link } from "react-router-dom";
import Icons from "../Icons/index";
import { StyledBaseButton } from "../Buttons/buttons.styles";
import { StyledProfileCard } from "./styledCard.styles";

function ProfileCard() {

    return (  
        <>
          <StyledProfileCard>
              <div>
                  <h3>Profile Name:</h3>
                  <StyledBaseButton>FOLLOW</StyledBaseButton>
              </div>
              <div>
              <h3>Title:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
              </div> 
              <div>
                <Icons />
                <StyledBaseButton>LIKE</StyledBaseButton>
                <StyledBaseButton>COMMENT</StyledBaseButton>
                <StyledBaseButton>DELETE</StyledBaseButton>
                <StyledBaseButton>UPDATE</StyledBaseButton>
              </div>
              <div>
                <h3>Title:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
              </div> 
              <div>
                <Icons />
                <StyledBaseButton>LIKE</StyledBaseButton>
                <StyledBaseButton>COMMENT</StyledBaseButton>
                <StyledBaseButton>DELETE</StyledBaseButton>
                <StyledBaseButton>UPDATE</StyledBaseButton>
              </div>
              <div>
                <h3>Title:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
              </div> 
              <div>
                <Icons />
                <StyledBaseButton>LIKE</StyledBaseButton>
                <StyledBaseButton>COMMENT</StyledBaseButton>
                <StyledBaseButton>DELETE</StyledBaseButton>
                <StyledBaseButton>UPDATE</StyledBaseButton>
              </div>
          </StyledProfileCard>
        </>
    );
}

export default ProfileCard;