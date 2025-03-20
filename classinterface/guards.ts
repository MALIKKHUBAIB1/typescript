// interface Source {
//     path: string;
//     role: string[];
//   }
//   interface dbSource {
//     isAccessDB: boolean;
//     name: string;
//   }

//   function hasAcceess(source: Source | dbSource) {
//     if ("path" in source) {
//       console.log(source.path);
//     } else {
//       console.log("nhi pata kya chal raha hai ");
//     }
//   }
//   const source = {
//     path: "path/sk/sk",
//     role: ["read", "write", "execute"],
//   };
//   const dbSource = {
//     isAccessDB: true,
//     name: "jhon",
//   };
//   hasAcceess(dbSource);

class User {
  name: string;
  eid: number;
  constructor(name: string, eid: number) {
    this.name = name;
    this.eid = eid;
  }
  getDetails() {
    return { name: this.name, id: this.eid };
  }
}


class Admin {
  role: string[];
  isAdmin: boolean;
  constructor(role: string[], isAdmin: boolean) {
    this.role = role;
    this.isAdmin = isAdmin;
  }
  getRole() {
    return { name: this.role, id: this.isAdmin };
  }
}
const user = new User("Jhon Doe", 123);
const admin = new Admin(["read", "write", "Execute"], false);

type Entity = Admin | User;

function findInstance(role: Entity) {
  if (role instanceof Admin) {
    console.log(role.role);
  } else {
    console.log(role.getDetails());
  }
}
findInstance(admin);
