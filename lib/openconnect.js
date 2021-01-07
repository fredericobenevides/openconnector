const inquirer = require("./inquirer");
const { spawn } = require("child_process");
const pkg = require("../package.json");
const Configstore = require("configstore");

const conf = new Configstore(pkg.name);

const spawnCommand = ({ url, username, password, params }) => {
  const child = spawn("openconnect", [url, ...params]);

  child.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  child.stderr.on("data", (data) => {
    console.log(data.toString());

    if (data.includes("Enter 'yes'")) {
      child.stdin.write("yes\n");
    }

    if (data.includes("username")) {
      child.stdin.write(`${username}\n`);
    }

    if (data.includes("password")) {
      child.stdin.write(`${password}\n`);
    }
  });

  child.on("error", (code) => {
    console.log("error", code);
  });

  child.on("close", (code) => {
    console.log("close", code);
  });
};

async function connect() {
  const res = await inquirer.askQuetions(conf);

  const { url, username, password, params } = res;
  conf.set("url", url);
  conf.set("username", username);
  conf.set("password", password);
  conf.set("params", params);

  spawnCommand({ url, username, password, params });
}

module.exports = {
  connect,
};
