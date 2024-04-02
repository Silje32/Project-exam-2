const BASE_URL = "https://nf-api.onrender.com/api/v1/";


// Auth

//POST
// * login page 
export const loginurl = `${BASE_URL}social/auth/login`;

// * registration page
export const registerurl = `${BASE_URL}social/auth/register`;



// Profiles

//GET

// * profile page (index)
export const getprofilesurl = `${BASE_URL}social/profiles`;

// searchbar? or my 7 page? 
export const profileIdurl = `${BASE_URL}social/profiles/{name}`;

// * profile page  (GetPosts)
export const postsurl = `${BASE_URL}social/profiles/{name}/posts`;


//PUT

// * profile page  (Banner)
export const BannerAvatarurl = `${BASE_URL}social/profiles/{name}/media`;



//PUT

// * profile page  (followButton)
export const followurl = `${BASE_URL}social/{name}/follow`;

// * profile page  (followButton)
export const unfollowurl = `${BASE_URL}social/{name}/unfollow`;




//Posts

//GET

// * Home page  (index)
export const getpostsurl = `${BASE_URL}social/posts`;

// * Home page  (follow)
export const getfollowingurl = `${BASE_URL}social/posts/following`;



//POST

// * Create Post page  (CreatePost)
export const postpostsurl = `${BASE_URL}social/posts`;

// * Comment page  (Publish Button / Publish comment) 
export const commenturl = `${BASE_URL}social/posts/{id}/comment`;



//PUT/DELETE/GET

// * Comment Page  (comments index)
export const postsidurl = `${BASE_URL}social/posts/{id}`;

//PUT

// * Profile and Home page  (emoji index)
export const emojiurl = `${BASE_URL}social/posts/{id}/react/{symbol}`;


//DELETE

// * Delete Button
export const deleteCommentidurl = `${BASE_URL}social/posts/{id}/comment/{commentId}`;

