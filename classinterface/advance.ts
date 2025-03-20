// class User {
//   private _firstName: string = "";
//   private _lastName: string = "";

//   set firstName(name: string) {
//     if (name.trim() === "") {
//       throw new Error("name can not be empty ");
//     }
//     this._firstName = name;
//   }
//   set lastName(name: string) {
//     if (name.trim() === "") {
//       throw new Error("name can not be empty ");
//     }
//     this._lastName = name;
//   }
//   get fullName() {
//     return this._firstName + " " + this._lastName;
//   }
// }
// class Employee extends User {
//   _isAdmin: boolean = true;
//   _isUser: boolean = false;
//   jobTitle: string = "";
//   constructor(jobTitle: string) {
//     super();
//     this.jobTitle = jobTitle;
//   }

//   getUser() {
//     console.log(this.jobTitle);
//   }
// }
// const user = new Employee("Developer");
// user.firstName = "Jhon";
// user.lastName = "Doe";
// user._isAdmin = false;
// user._isUser = true;
// user.getUser();
// console.log(user);
