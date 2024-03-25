// A registered user may create a Post.

import CreatePostCard from "../components/Cards/createPostCard";
import PublishButton from "../components/Buttons/publishButton";

function CreatePost() {
    return (
        <>
          <PublishButton />
          <CreatePostCard />
        </>
    );
}

export default CreatePost;