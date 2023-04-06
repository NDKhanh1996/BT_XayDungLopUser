
enum Role {
    admin = 1,
    normalUser,
}

console.log(Role[1])

class User {
    protected name: string;
    protected email: string;
    role: Role;

    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo(){
        return ` name is: ${this.name}, mail is: ${this.email}, role is: ${this.isAdmin()}`
    }
    isAdmin(){
        if (this.role === 1){
           return Role[1]
        }else {
           return Role[2]
        }
    }
}
let user1 = new User('a', 'mail', 1)
console.log(user1.getInfo())
