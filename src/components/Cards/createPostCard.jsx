import { Link } from "react-router-dom";
import { StyledBaseButton } from "../Togglebutton/togglebutton.styles";
import { StyledCard } from "../Cards/styledCard.styles";

function CreatePostCard() {

    return (  
        <>
          <StyledCard>
              <div>
                <h2>CREATE A POST</h2>
              </div> 
              <div>
                <h3>PROFILE NAME:</h3>
              </div> 
              <div>
                <h4>What is on your mind today?</h4>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <StyledBaseButton>PUBLISH</StyledBaseButton>
                <StyledBaseButton><Link to={"home"}>CLOSE</Link></StyledBaseButton>
              </div>
          </StyledCard>
        </>
    );
}

export default CreatePostCard;