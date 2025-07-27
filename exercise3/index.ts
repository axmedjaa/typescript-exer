// 1
function fullNmae(firstName:string,lastName:string):string{
    return firstName +" "+lastName
}
console.log(fullNmae("ahmed","mohamed"))
// 2
function registerUser(username:string,isAdmin?:boolean,language:string="en"){
    console.log(`${username} ${isAdmin||"user"} ${language}`)
}
registerUser("calijaa")
// 3
function average(...scores:number[]):number{
    const total=scores.reduce((a,b)=>a+b,0)
    return total/scores.length
}
console.log(average(28,87,78,88,98))