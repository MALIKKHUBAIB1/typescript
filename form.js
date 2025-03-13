"use strict";
const inputEle = document.getElementById("user-name");
// if (!inputEle) {
//   throw new Error("input element can not be null");
// }
console.log(inputEle === null || inputEle === void 0 ? void 0 : inputEle.value);
