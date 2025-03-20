// interface Authenticable {
//   userName: string;
//   eid: string | number;
//   age?: number;
//   login: () => void;
//   logout: () => void;
//   getUser: () => Promise<(string | number)[]>;
// }
// class User implements Authenticable {
//   userName: string = "";
//   eid: string | number = "";
//   age?: number | undefined = 0;
//   login() {
//     console.log(this.userName);
//   }
//   logout() {
//     console.log(this.age);
//   }
//   async getUser() {
//     const res = await fetch("https://dummyjson.com/users");
//     const data = await res.json();
//     // console.log(data);
//     return data.users.slice(0, 5).map((user: any) => user);
//   }
// }

// const isAuth = new User();
// isAuth.age = 5;
// isAuth.userName = "Jhon Doe";
// isAuth.eid = 5;
// isAuth.login();
// isAuth.getUser().then((data) => console.log(data));
// console.log(isAuth);
