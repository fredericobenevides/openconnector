const inquirer = require("inquirer");

module.exports = {
  askQuetions: () => {
    const questions = [
      {
        name: "url",
        type: "input",
        message: "Enter the URL to connect",
      },
      {
        name: "username",
        type: "input",
        message: "Enter the username",
      },
      {
        name: "password",
        type: "password",
        message: "Enter the password",
      },
    ];

    return inquirer.prompt(questions);
  },
};
