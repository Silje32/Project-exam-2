import { Link } from "react-router-dom";
import Icons from "../Icons/index";
import LikeButton from "../Buttons/likeButton";
import PostList from "../Posts/index";
import { StyledBaseButton } from "../Buttons/buttons.styles";
import { StyledCard } from "../Cards/styledCard.styles";


function HomeCard() {

    return (  
        <>
          <StyledCard>
            <PostList />
              <div>
                <h2>PROFILE NAME:</h2>
              </div> 
              <div>
                <h3>Title</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <Icons />
                <LikeButton />
                <StyledBaseButton>
                    <Link to={"comments"}>COMMENTS</Link>
                </StyledBaseButton>
              </div>
          </StyledCard>
        </>
    );
}

export default HomeCard;