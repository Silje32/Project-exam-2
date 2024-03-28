import Icons from "../Icons/index";
import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import PostList from "../Posts/index";
import { StyledHomeCard, StyledButtonCard } from "../Cards/styledCard.styles";


function HomeCard() {

    return (  
        <>
          <StyledHomeCard>
            <PostList />
              <div>
                <h2>PROFILE NAME:</h2>
              </div> 
              <div>
                <h3>Title</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                </div>
                <div>
                <Icons />
                <StyledButtonCard>
                  <LikeButton />
                  <CommentsButton />
                </StyledButtonCard>   
              </div>
          </StyledHomeCard>
        </>
    );
}

export default HomeCard;