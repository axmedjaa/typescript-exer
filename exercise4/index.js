function login(user) {
    console.log(user.username);
}
// with email
var u = {
    id: '1',
    username: "ahmedaa",
    email: "axmedja22@gmail.com",
    password: "axm222"
};
login(u);
// with out email
var us2 = {
    id: '2',
    username: "ahmedaa",
    password: "axm222"
};
login(us2);
// reasigning id value
us2.id = 2;
