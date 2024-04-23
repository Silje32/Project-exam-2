
require("dotenv/config");

function Test(expectedSecret) {
  const secretMatches = process.env.API_URL == expectedSecret;
  console.log(`The api url is ${process.env.API_URL}`);
  console.log(`The secret does${secretMatches ? "" : " not"} match!`);
  return secretMatches;
}


test"(https://nf-api.onrender.com/api/v1)"