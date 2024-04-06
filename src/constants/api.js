const BASE_URL = new URL("https://nf-api.onrender.com/api/v1/");
export const NEW_URL = BASE_URL.toString()


// Auth

//POST
// * login page 
export const loginurl = `${NEW_URL}social/auth/login`;

// * registration page
export const registerurl = `${NEW_URL}social/auth/register`;



// Profiles

//GET

// * Home page (GetProfile)
export const getprofilesurl = `${NEW_URL}social/profiles`;

// searchbar? or my 7 page? 
export const profileIdurl = `${NEW_URL}social/profiles/{name}`;

// * profile page  (GetPosts)
export const postsurl = `${NEW_URL}social/profiles/{name}/posts`;


//PUT

// * profile page  (Banner)
export const BannerAvatarurl = `${NEW_URL}social/profiles/{name}/media`;



//PUT

// * profile page  (followButton)
export const followurl = `${NEW_URL}social/{name}/follow`;

// * profile page  (followButton)
export const unfollowurl = `${NEW_URL}social/{name}/unfollow`;




//Posts

//GET

// * MyProfile page  (PostList)
export const getpostsurl = `${NEW_URL}social/posts`;

// * Home page  (follow)
export const getfollowingurl = `${NEW_URL}social/posts/following`;



//POST

// * Create Post page  (CreatePost)
export const postpostsurl = `${NEW_URL}social/posts`;

// * Comment page  (Comment) 
export const commenturl = `${NEW_URL}social/posts/{id}/comment`;



//PUT/DELETE/GET

// * SinglePostId  (singlePostId)
export const postidurl = `${NEW_URL}social/posts/{id}`;

//PUT

// * Profile and Home page  (emoji index)
export const emojiurl = `${NEW_URL}social/posts/{id}/react/{symbol}`;


//DELETE

// * Delete Button
export const deleteCommentidurl = `${NEW_URL}social/posts/{id}/comment/{commentId}`;

