function inicio() {
  console.log("inicio");
}
function time() {
  setTimeout(() => {
    console.log("time");
  }, 0);
}

function promesa(boolean) {
  return new Promise((resolve, reject) => {
    if (boolean) {
      resolve("Promesa exitosa");
    } else {
      reject("Promesa rechazada");
    }
  });
}

function pokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

async function jsonPlaceHolder() {
  try {
    const fetchData = await fetch(
      "https://jsonplaceholde.typicode.com/todos/1"
    );
    const data = await fetchData.json();
    // return data;
    console.log(`🚀 ~ jsonPlaceHolder ~ fetchData:`, data);
  } catch (error) {
    console.log(error);
  }
}

function fin() {
  console.log("fin");
}

inicio();
time();
promesa(true)
  .then((element) => {
    console.log(element);
    return element.toUpperCase();
  })
  .then((element) => {
    console.log(element);
    return element.toLowerCase();
  })
  .then((element) => console.log(element))
  .catch((error) => console.log(error))
  .finally(() => console.log("fin de la promesa"));

pokemon("ditto")
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

// jsonPlaceHolder().then(data=>console.log(data))
jsonPlaceHolder();

fin();
