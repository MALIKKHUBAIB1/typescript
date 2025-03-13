const inputEle = document.getElementById(
  "user-name"
) as HTMLInputElement | null;
// if (!inputEle) {
//   throw new Error("input element can not be null");
// }
console.log(inputEle?.value);
