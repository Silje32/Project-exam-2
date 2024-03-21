export const BASE_URL = "https://nf-api.onrender.com/api/v1/";



// Auth

//POST
// * login page 
export const loginurl = "https://nf-api.onrender.com/api/v1/social/auth/login";

// * registration page
export const registerurl = "https://nf-api.onrender.com/api/v1/social/auth/register";



// Profiles

//GET

// * profile page (index)
export const getprofilesurl = "https://nf-api.onrender.com/api/v1/social/profiles";

// searchbar? or my 7 page? 
export const profileIdurl = "https://nf-api.onrender.com/api/v1/social/profiles/{name}";

// * profile page  (getPosts)
export const postsurl = "https://nf-api.onrender.com/api/v1/social/profiles/{name}/posts";


//PUT

// * profile page  (Banner)
export const BannerAvatarurl = "https://nf-api.onrender.com/api/v1/social/profiles/{name}/media";



//PUT

// * profile page  (followButton)
export const followurl = "https://nf-api.onrender.com/api/v1/social/{name}/follow";

// * profile page  (followButton)
export const unfollowurl = "https://nf-api.onrender.com/api/v1/social/{name}/unfollow";




//Posts

//GET

// * Home page  (index)
export const getpostsurl = "https://nf-api.onrender.com/api/v1/social/posts";

// * Home page  (follow)
export const getfollowingurl = "https://nf-api.onrender.com/api/v1/social/posts/following";



//POST

// * Create Post page  (createPost)
export const postpostsurl = "https://nf-api.onrender.com/api/v1/social/posts";

// 
export const commenturl = "https://nf-api.onrender.com/api/v1/social/posts/{id}/comment";



//PUT/DELETE/GET

// * Comment Page  (comments index)
export const postsidurl = "https://nf-api.onrender.com/api/v1/social/posts/{id}";

//PUT

// * Profile and Home page  (emoji index)
export const emojiurl = "https://nf-api.onrender.com/api/v1/social/posts/{id}/react/{symbol}";


//DELETE
export const deleteCommentidurl = "https://nf-api.onrender.com/api/v1/social/posts/{id}/comment/{commentId}";

