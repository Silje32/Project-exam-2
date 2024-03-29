import Icons from "../Icons/index";
import Emoji from "../Emoji/index";
import FollowButton from "../Posts/followButton";
import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import UpdateButton from "../Buttons/updateButton";
import DeleteButton from "../Buttons/deleteButton";
import GetProfile from "../Profiles/index";
import GetPost from "../Profiles/getPosts";
import { StyledProfileCard, StyledButtonCard } from "./styledCard.styles";

function ProfileCard() {

    return (  
        <>
          <StyledProfileCard>
              <div>
              <GetProfile />
                  <h3>Profile Name:</h3>
                  <FollowButton />
              </div>
              <div>
              <GetPost />
              <Icons />
              <Emoji />
                <StyledButtonCard>
                    <LikeButton />
                    <CommentsButton />
                    <UpdateButton />
                    <DeleteButton />
                </StyledButtonCard>
              </div>
              <div>
              <Icons />
              <Emoji />
                <StyledButtonCard>
                    <LikeButton />
                    <CommentsButton />
                    <UpdateButton />
                    <DeleteButton />
                </StyledButtonCard>
              </div>
              <div>   
              <Icons />
              <Emoji />
                <StyledButtonCard>
                    <LikeButton />
                    <CommentsButton />
                    <UpdateButton />
                    <DeleteButton />
                </StyledButtonCard>
              </div>
          </StyledProfileCard>
        </>
    );
}

export default ProfileCard;