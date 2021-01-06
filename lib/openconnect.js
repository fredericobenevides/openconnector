const inquirer = require("./inquirer");
const { spawn } = require("child_process");
const pkg = require("../package.json");
const Configstore = require("configstore");

const conf = new Configstore(pkg.name);

const spawnCommand = ({ url, username, password }) => {
  const child = spawn("/usr/sbin/openconnect", [
    "--no-dtls",
    "--juniper",
    url,
    "--disable-ipv6",
  ]);

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
  console.log("aqui");
  console.log(conf.get("url"));
  const res = await inquirer.askQuetions(conf);

  const { url, username, password } = res;
  conf.set("url", url);
  conf.set("username", username);
  conf.set("password", password);

  spawnCommand({ url, username, password });
}

module.exports = {
  connect,
};
