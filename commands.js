import { stdin, stdout } from "node:process";
import fs from "node:fs";
// forma 1
// export function pwd() {
//   stdout.write(`${process.argv[1]}\n`);
// }
function pwd(data) {
  stdout.write(`${process.argv[1]}\n`);
}
function date(data) {
  stdout.write(`${Date()}\n`);
}
function ls(data) {
  let response = "";
  let files = fs.readdirSync(".");
  files.forEach((element) => (response += element + "\n"));
  stdout.write(`${response}`);
}
function cat(data) {
let file= data.join()
let files = fs.readFileSync(file, "utf-8");
stdout.write(`${files}`);
}

// forma 2
// export default { pwd: pwd };
// forma 3
// export default { pwd };

const commands = { pwd, date, ls, cat };
export default commands;
