const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const openconnect = require("./lib/openconnect");

clear();

console.log(
  chalk.yellow(
    figlet.textSync("OpenConnector", {
      horizontalLayout: "full",
    })
  )
);

openconnect.connect();
