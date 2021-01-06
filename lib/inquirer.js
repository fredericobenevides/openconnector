const inquirer = require("inquirer");

module.exports = {
  askQuetions: (config) => {
    const questions = [
      {
        name: "url",
        type: "input",
        message: "Enter the URL",
        default: config.get("url"),
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter the URL";
          }
        },
      },
      {
        name: "username",
        type: "input",
        message: "Enter the username",
        default: config.get("username"),
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter the username";
          }
        },
      },
      {
        name: "password",
        type: "password",
        message: "Enter the password",
        default: config.get("password"),
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter the password";
          }
        },
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
