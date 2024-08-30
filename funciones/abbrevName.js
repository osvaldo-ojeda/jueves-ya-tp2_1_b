function abbrevName(str) {
  //   const name = str.split(" ");
  //   const pal = name.map((element) => element[0].toUpperCase());
  //   const initials=pal.join("")
  //   console.log(`🚀 ~ abbrevName ~ name:`, name);
  //   console.log(`🚀 ~ abbrevName ~ pal:`, pal);
  //   console.log(`🚀 ~ abbrevName ~ initials:`, initials)

  const name = str
    .split(" ")
    .map((element) => element[0].toUpperCase())
    .join("");
  console.log(`🚀 ~ abbrevName ~ name:`, name);
}

module.exports = abbrevName;
