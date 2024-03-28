import Icons from "../Icons/index";
import Emoji from "../Emoji/index";
import FollowButton from "../Posts/followButton";
import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import DeleteButton from "../Buttons/deleteButton";
import GetPost from "../Profiles/getPosts";
import { StyledProfileCard, StyledButtonCard } from "./styledCard.styles";

function ProfileCard() {

    return (  
        <>
          <StyledProfileCard>
              <div>
              <GetPost />
                  <h3>Profile Name:</h3>
                  <FollowButton />
              </div>
              <div>
              <h3>Title:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                   <Icons />
                   <Emoji />
                   <StyledButtonCard>
                      <LikeButton />
                      <CommentsButton />
                      <DeleteButton />
                   </StyledButtonCard>
              </div>
              <div>
                <h3>Title:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <Icons />
                <Emoji />
                <StyledButtonCard>
                    <LikeButton />
                    <CommentsButton />
                    <DeleteButton />
                </StyledButtonCard>
              </div>
              <div>   
                <h3>Title:</h3>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <p>Lorem Ipsum do la remi ta ta la santa tattaa.</p>
                <Icons />
                <Emoji />
                <StyledButtonCard>
                    <LikeButton />
                    <CommentsButton />
                    <DeleteButton />
                </StyledButtonCard>
              </div>
          </StyledProfileCard>
        </>
    );
}

export default ProfileCard;