interface user{
    readonly id:string // readonly
    username:string,
    email?:string // option
    password:string
}
function login(user:user){
    console.log(user.username)
}
// with email
const u:user={
    id:'1',
    username:"ahmedaa",
    email:"axmedja22@gmail.com",
    password:"axm222"
}
login(u)
// with out email
const us2:user={
    id:'2',
    username:"ahmedaa",
    password:"axm222"
}
login(us2)
// reasigning id value
// us2.id=2
