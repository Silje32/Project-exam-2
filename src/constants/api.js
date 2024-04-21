const BASE_URL = new URL("https://nf-api.onrender.com/api/v1");
export const NEW_URL = BASE_URL.toString()


// Auth

//POST
// * login page 
export const loginurl = `${NEW_URL}/social/auth/login`;

// * registration page
export const registerurl = `${NEW_URL}/social/auth/register`;



// Profiles

//GET

// * AllProfiles page (GetAllProfiles)
export const getprofilesurl = `${NEW_URL}/social/profiles`;

// Single profile page  (SingleProfile) 
export const profileIdurl = `${NEW_URL}/social/profiles/{name}`;

// * MyProfile page  (GetPosts)
export const postsurl = `${NEW_URL}/social/profiles/{name}/posts`;


//PUT

//  profile page  (Media)
export const BannerAvatarurl = `${NEW_URL}/social/profiles/{name}/media`;

//  profile page  (FollowButton)
export const followurl = `${NEW_URL}/social/{name}/follow`;
export const unfollowurl = `${NEW_URL}/social/{name}/unfollow`;

//  Update post  (updateButton)
export const postidurl = `${NEW_URL}/social/posts/{id}`;

//  Profile and Home page  (Emoji)
export const emojiurl = `${NEW_URL}/social/posts/{id}/react/{symbol}`;



//Posts

//GET

//  Home page (PostList)
export const getpostsurl = `${NEW_URL}/social/posts`;

// SinglePostId  (SinglePostId)
export const getsinglepostsurl = `${NEW_URL}/social/posts/<id>`;

//  Following page  (Following)
export const getfollowingurl = `${NEW_URL}/social/posts/following`;

// Searchbar  (ProfileFilter)
export const getsearchurl = `${NEW_URL}/social/posts/search?q=<query>`;


//POST

//  Create Post page  (CreatePost)
export const postpostsurl = `${NEW_URL}/social/posts`;

//  Comment page  (Comment) 
export const commenturl = `${NEW_URL}/social/posts/{id}/comment`;


//DELETE

//  Delete Comment Button  (DeleteCommentButton)
export const deleteCommentidurl = `${NEW_URL}/social/posts/{id}/comment/{commentId}`;

//  Delete Post Button  (DeletePostButton)
export const deletePost = `${NEW_URL}/social/posts/{id}`;






