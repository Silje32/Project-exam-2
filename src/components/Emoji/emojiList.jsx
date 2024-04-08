import { StyledEmojiList } from "./emojiList.styles";

export function EmojiList({ emoji: { symbol } }) {

    return ( 
        <>
         <StyledEmojiList>
            <h3>Title:</h3>
            <img src={`${symbol}`} alt="Emoji" />   
         </StyledEmojiList>
        </>

    );
}

export default EmojiList;