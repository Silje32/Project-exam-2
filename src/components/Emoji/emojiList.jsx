import { StyledEmojiList } from "./emojiList.styles";

export function EmojiList({ emoji: { symbol } }) {

    return ( 
        <>
         <StyledEmojiList>
            <img src={`${symbol}`} alt="Emoji" />   
         </StyledEmojiList>
        </>

    );
}

export default EmojiList;