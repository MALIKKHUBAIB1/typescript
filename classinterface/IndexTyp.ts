type DataStore = {
  [prop: string]: number | boolean;
};

const store: DataStore = {};

store.id = 14;
store.isOpen = false;

console.log(store);

const roles = ["admin", "guest", "editor"] as const;
// roles.push("max"); // error
