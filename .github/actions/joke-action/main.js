const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  const joke = await getJoke();
  console.log(11);
  console.log(joke);
  console.log(33);
  core.setOutput("joke-output", joke);
}

run();
