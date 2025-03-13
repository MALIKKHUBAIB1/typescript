// let users: Array<number | string> = [1, 2, 3, 4];
// console.log(users);

// same as
// let users : (number|string)[]

// let users: Record<string, number | string> = { name: "kaka", id: 1 };
// console.log(users);

// let userRole: "admin" = "admin";
// console.log(userRole);

//  custom types in ts;

type Role = "admin" | "guest" | "editor" | "user";

type User = {
  name: string;
  id: number;
  role: Role;
  permissions: string[];
};

const usr: User = {
  name: "jhon Doe",
  id: 1,
  role: "admin",
  permissions: [],
};
console.log(usr);
