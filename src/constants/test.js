import test from "./test";

require("dotenv/config");

function test(expectedSecret) {
  const secretMatches = process.env.API_URL == expectedSecret;
  console.log(`The api url is ${process.env.MEANING_OF_LIFE}`);
  console.log(`The secret does${secretMatches ? "" : " not"} match!`);
  return secretMatches;
}

test"(https://nf-api.onrender.com/api/v1/)"