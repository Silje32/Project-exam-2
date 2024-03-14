import { Link, useParams } from "react-router-dom";
import Icons from "../Icons/index";
import { StyledBaseButton } from "../Buttons/buttons.styles";
import { StyledCard } from "./styledCard.styles";

function CommentCard() {

  const { id } = useParams();

    return (  
        <>
          <StyledCard>
              <div>
                  <Icons />
                  <button>LIKE</button>
                  <StyledBaseButton>
                       <Link to={"home"}>BACK</Link>
                  </StyledBaseButton>
              </div>
              <div>
                <h3>Profile Name:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
              </div> 
              <div>
                <h3>Profile Name:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
              </div> 
              <div>
                <h3>Profile Name:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
              </div> 
              <div>
                <h3>Write a comment:</h3>
                <Icons />
                <StyledBaseButton>PUBLISH</StyledBaseButton>
              </div>
          </StyledCard>
        </>
    );
}

export default CommentCard;