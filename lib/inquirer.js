const inquirer = require("inquirer");

module.exports = {
  askQuetions: (config) => {
    const questions = [
      {
        name: "url",
        type: "input",
        message: "Enter the URL to connect",
        default: config.get("url"),
      },
      {
        name: "username",
        type: "input",
        message: "Enter the username",
        default: config.get("username"),
      },
      {
        name: "password",
        type: "password",
        message: "Enter the password",
        default: config.get("password"),
      },
      {
        name: "params",
        type: "checkbox",
        message: "Default params to use with openconnect",
        choices: ["--no-dtls", "--juniper", "--disable-ipv6"],
        default: config.get("params") || ["--no-dtls", "--juniper"],
      },
    ];

    return inquirer.prompt(questions);
  },
};
