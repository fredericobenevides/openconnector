const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const openconnect = require("./lib/openconnect");

clear();

console.log(
  chalk.yellow(
    figlet.textSync("OpenConnect-cli", {
      horizontalLayout: "full",
    })
  )
);

openconnect.connect();
