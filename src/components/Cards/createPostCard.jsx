import CreatePost from "../Posts/createPost";
import PublishButton from "../Buttons/publishButton";
import CloseButton from "../Buttons/closeButton";
import { StyledCard } from "../Cards/styledCard.styles";

function CreatePostCard() {

    return (  
        <>
          <StyledCard>
               <div>
                  <h2>CREATE A POST</h2>
                  <CreatePost />
               </div> 
               <div>
                  <h3>PROFILE NAME:</h3>
               </div> 
               <div>
                  <h4>What is on your mind today?</h4>    
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