// type fileData = {
//   path: string;
//   content: string;
// };
// type status = {
//   isOpen: boolean;
//   errorMessage?: string;
// };

// type mergeFile = status & fileData;

// // const user: mergeFile = {
// //   path: "mine",
// //   content: "chalchalekedikha",
// //   isOpen: true,
// // };

// // console.log(user);

// interface UserData {
//   email: string;
//   password: string;
// }

// function getDetail(): UserData {
//   const user = {
//     email: "ksdkl",
//     password: "123",
//   };
//   return user;
// }
// class User {
//   email: string = "";
//   password: string = "";
//   constructor(email: string, password: string) {
//     this.email = email;
//     this.password = password;
//   }
//   getCredential(): UserData {
//     console.log(`the email is ${this.email} and password is ${this.password}`);
//     return { email: this.email, password: this.password };
//   }
// }

// const user: User = new User("test@gmailcom", "123456");
// console.log(user.getCredential());
