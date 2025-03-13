// function add(a: number, b: number): number  {
//   return a + b;
// }
// console.log(add(1, 2));

// void , nenver
// function log(mesaage: string): never {
//   console.log(mesaage);
//   throw new Error("this is error ");
// }
// log("hi");

// function perfomJob(cb: Function) {
//   let ans = cb(1);
//   console.log(ans);
// }
// let add = (a: number, b = 4) => a + b;

// perfomJob(add);

let input = null;

let anotherInput = input ?? false;
console.log(anotherInput);

if ([].length) {
  console.log("array is empty ");
}
