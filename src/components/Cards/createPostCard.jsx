import CreatePost from "../Posts/createPost";
import PublishButton from "../Buttons/publishButton";
import CloseButton from "../Buttons/CloseButton";
import { StyledCard } from "./StyledCard.styles";

function CreatePostCard() {

    return (  
        <>
          <StyledCard>
               <div>
                  <h2>CREATE A POST</h2>
                  <CreatePost />
               </div> 
               <div>
                <PublishButton />
                <CloseButton />
              </div>
          </StyledCard>
        </>
    );
}

export default CreatePostCard;