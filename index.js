import { stdin, stdout } from "node:process";
import commands from "./commands.js";
// console.log(`🚀 ~ commands:`, commands);
stdout.write("$ ");

stdin.on("data", function (data) {
  let cmd = data.toString().trim();
  if (cmd === "pwd") {
    commands.pwd();
  }
  if (cmd === "date") {
    commands.date();
  }
  stdout.write("$ ");
});
