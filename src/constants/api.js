export const BASE_URL = "https://nf-api.onrender.com/api/v1/";



// Auth

//POST
export const loginurl = "${BASE_URL}social/auth/login";

export const registerurl = "${BASE_URL}social/auth/register";



// Profiles

//GET
export const profilesurl = "${BASE_URL}social/profiles";

export const profileIdurl = "${BASE_URL}social/profiles/{name}";

export const postsurl = "${BASE_URL}social/profiles/{name}/posts";


//PUT
export const BannerAvatarurl = "${BASE_URL}social/profiles/{name}/media";



//PUT
export const followurl = "${BASE_URL}social/{name}/follow";

export const unfollowurl = "${BASE_URL}social/{name}/unfollow";




//Posts

//GET
export const getpostsurl = "${BASE_URL}social/posts";

export const getfollowingurl = "${BASE_URL}social/posts/following";



//POST
export const postpostsurl = "${BASE_URL}social/posts";

export const commenturl = "${BASE_URL}social/posts/{id}/comment";



//PUT/DELETE/GET
export const postsidurl = "${BASE_URL}social/posts/{id}";

//PUT
export const emojiurl = "${BASE_URL}social/posts/{id}/react/{symbol}";


//DELETE
export const commentidurl = "${BASE_URL}social/posts/{id}/comment/{commentId}";

