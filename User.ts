
enum Role {
    admin = 1,
    normalUser,
}

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
        return `${this.name} ${this.email} ${this.role}`
    }
    isAdmin(){
        if (this.role === 1){
           console.log('is admin')
        }else {
           console.log('is normal user')
        }
    }
}
let user1 = new User('a', 'mail', 1)
console.log(user1.getInfo())
user1.isAdmin()