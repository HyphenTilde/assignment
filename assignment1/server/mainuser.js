class User{
    constructor(username, id, email, role){
        this.username = username;
        this.id = id;
        this.email = email;
        this.role = role;
    }
};

var user1 = new User("Super","1","email1@email.com","Super Admin");

let users = [user1];

module.exports = users;