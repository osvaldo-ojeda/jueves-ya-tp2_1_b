import fs from "node:fs";
// console.log(`🚀 ~ fs:`, fs);

function readFile() {
  try {
    const file = fs.readFileSync("./package.jso", "utf-8");
    console.log(`🚀 ~ readFile ~ file:`, file);
  } catch (error) {
    appendFile(error);
  }
}

function appendFile(data) {
  try {
    const file = fs.appendFileSync("texto.txt", `\n${data}`);
  } catch (error) {
    const file = fs.appendFileSync("error.txt", `\n${error}`);
  }
}

// readFile()

// appendFile("hola");

// ------------------------------------------

async function readFileAsync() {
  try {
    const file = await fs.promises.readFile("./package.json", "utf-8");
    console.log(`🚀 ~ readFile ~ file:`, file);
  } catch (error) {
    appendFile(error);
  }
}

readFileAsync()

// function readFileAsync() {
//   return fs.promises.readFile("./package.json", "utf-8");
// }
// readFileAsync()
//   .then((data) => console.log(data))
//   .catch((error) => appendFile(error));
