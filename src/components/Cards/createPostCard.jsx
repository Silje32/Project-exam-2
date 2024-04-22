import CreatePost from "../Posts/CreatePost";
import PublishButton from "../Buttons/PublishButton";
import CloseButton from "../Buttons/CloseButton";
import { StyledCreatePostListCard } from "../Posts/CreatePostList.styles";

function CreatePostCard() {

    return (  
        <>
          <StyledCreatePostListCard>
               <div>
                  <h2>CREATE A POST</h2>
                  <CreatePost />
               </div> 
               <div>
                <PublishButton />
                <CloseButton />
              </div>
          </StyledCreatePostListCard>
        </>
    );
}

export default CreatePostCard;