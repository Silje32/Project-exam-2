// Auth

//POST
export const loginurl = "https://nf-api.onrender.com/api/v1/social/auth/login";

export const registerurl = "https://nf-api.onrender.com/api/v1/social/auth/register";



// Profiles

//GET
export const profilesurl = "https://nf-api.onrender.com/api/v1/social/profiles";

//PUT
export const BannerAvatarurl = "https://nf-api.onrender.com/api/v1/social/profiles/{name}/media";

//GET
export const profileIdurl = "https://nf-api.onrender.com/api/v1/social/profiles/{name}";

//PUT
export const followurl = "https://nf-api.onrender.com/api/v1/social/{name}/follow";

export const unfollowurl = "https://nf-api.onrender.com/api/v1/social/{name}/unfollow";

//GET
export const postsurl = "https://nf-api.onrender.com/api/v1/social/profiles/{name}/posts";



//Posts

//GET
export const getpostsurl = "https://nf-api.onrender.com/api/v1/social/posts";

//POST
export const postpostsurl = "https://nf-api.onrender.com/api/v1/social/posts";

//GET
export const getfollowingurl = "https://nf-api.onrender.com/api/v1/social/posts/following";

//PUT/DELETE/GET
export const postsidurl = "https://nf-api.onrender.com/api/v1/social/posts/{id}";

//PUT
export const emojiurl = "https://nf-api.onrender.com/api/v1/social/posts/{id}/react/{symbol}";

//POST
export const commenturl = "https://nf-api.onrender.com/api/v1/social/posts/{id}/comment";

//DELETE
export const commentidurl = "https://nf-api.onrender.com/api/v1/social/posts/{id}/comment/{commentId}";

