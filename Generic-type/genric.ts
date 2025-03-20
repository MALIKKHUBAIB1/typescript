// let number: Array<number> = [12, 2, 4, 1, 9, 0];
const names: Array<string> = ["jhons", "max", "Aoe"];
// console.log(names.sort((a, b) => a.localeCompare(b)));

type DataStore<T> = {
  [prop: string]: T;
};

let data: DataStore<string | number | boolean> = {
  name: names[0],
  //   id: 1, // gives us error bcz it dozen deine in the type
};

data.name = names[1];
data.id = 1;
