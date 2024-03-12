import { Link } from "react-router-dom";
import Icons from "../Icons/index";
import { StyledBaseButton } from "../Togglebutton/togglebutton.styles";
import { StyledCard } from "./styledCard.styles";

function ProfileCard() {

    return (  
        <>
          <StyledCard>
              <div>
                  <h3>Profile Name:</h3>
                  <StyledBaseButton><Link to={"home"}>BACK</Link></StyledBaseButton>
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
          </StyledCard>
        </>
    );
}

export default ProfileCard;