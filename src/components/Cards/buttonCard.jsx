import LikeButton from "../Buttons/likeButton";
import CommentsButton from "../Buttons/commentsButton";
import DeleteButton from "../Buttons/deleteButton";
import { StyledButtonCard } from "../Cards/styledCard.styles";

function ButtonCard() {

    return (  
        <>
          <StyledButtonCard>
             <LikeButton />
             <CommentsButton />
             <DeleteButton />
          </StyledButtonCard>          
        </>
    );
}

export default ButtonCard;