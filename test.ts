// test.ts
// const message: string = "Hello from TypeScrip!";
// console.log(message);

// Data Types

// Primitive data types : Number Boolean string
//Non Primitives :

// array
// let arr: number[] = [1, 2, 3, 4];

// for (let ele of arr) {
//   console.log(ele * 2);
// }

//tuple : same as array but the defined typed

// const newArr: [string, number, Boolean] = ["hello", 1, false];

// console.log(newArr);

//number
// let isActive: boolean = false;
// let number: number = Math.floor(Math.random() * 10);

// if (number > 5) {
//   isActive = true;
// }
// console.log(number, isActive);

// let random: unknown = "strin";

// console.log(typeof random);

// funtion with return type

// function multiply(a: number = 5): number {
//   let num = a * 5;
//   return num;
// }
// let ans = multiply(1);
// console.log(ans);

// function multiply(a: number = 5): boolean {
//   if (a > 5) return true;
//   return false;
// }
// let ans = multiply(1);
// console.log(ans);

// Mixed types in array
// let mixed: (string | number)[] = ["hello", 2, 3, 4];
// console.log(mixed)

// object

// let user: { name: string; id: number; salary: number; isLogin: boolean } = {
//   name: "jhon Doe",
//   id: Date.now(),
//   salary: 2000,
//   isLogin: false,
// };

// for (const key in user) {
//   console.log(user[key as keyof typeof user]);
// }
// interface User {
//   name: string;
//   id: number;
//   age?: number;
// }
// let user: User = {
//   name: "jhon Doe",
//   id: 1,
//   age: 34,
// };

// for (const key in user) {
//   console.log(user[key as keyof typeof user]);
// }

// function User(this: any, name: string, age: number) {
//   this.name = name;
//   this.age = age;
// }
// const user = new (User as any)("jhon Doe", 12);
// console.log(user);

// type value = number | string;
// let ans: value;
// ans = "means a lot";
// console.log(ans);

// class User {
//   name = "jhon Doe";
//   age = "12";
// }
// const u1 = new User();
// console.log(u1);
