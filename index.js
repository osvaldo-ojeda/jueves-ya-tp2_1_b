import { stdin, stdout } from "node:process";
import commands from "./commands.js";
stdout.write("$ ");

stdin.on("data", function (data) {
  let params = data.toString().trim().split(" ");
  let cmd = params[0];
  let param = params.slice(1);

  //     if (cmd === "pwd") {
  //       commands.pwd();
  //     }
  //     if (cmd === "date") {
  //       commands.date();
  //     }
  try {
    commands[cmd](param);
    stdout.write("$ ");
  } catch (error) {
    stdout.write("$ comando incorrecto \n");
    stdout.write("$ ");
  }
});
