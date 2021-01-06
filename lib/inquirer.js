const inquirer = require("inquirer");

module.exports = {
  askQuetions: (config) => {
    const questions = [
      {
        name: "url",
        default: config.get("url"),
        type: "input",
        message: "Enter the URL to connect",
      },
      {
        name: "username",
        type: "input",
        default: config.get("username"),
        message: "Enter the username",
      },
      {
        name: "password",
        type: "password",
        default: config.get("password"),
        message: "Enter the password",
      },
    ];

    return inquirer.prompt(questions);
  },
};
