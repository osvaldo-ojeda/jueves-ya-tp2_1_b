import { stdin, stdout } from "node:process";
// forma 1
// export function pwd() {
//   stdout.write(`${process.argv[1]}\n`);
// }
function pwd() {
  stdout.write(`${process.argv[1]}\n`);
}
function date() {
  stdout.write(`${Date()}\n`);
}

// forma 2
// export default { pwd: pwd };
// forma 3
// export default { pwd };

const commands = { pwd, date };
export default commands;
