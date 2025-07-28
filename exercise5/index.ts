// 1
function echo<T>(data:T):T{
    return data
}
console.log(`string ${echo("ahmed")}`)
console.log(`number ${echo(123)}`)
console.log(`array ${[1,2,3]}`)
console.log('object',{name:"ahmed",age:22})
// 2
interface apiResult<T>{
    status:string,
    data:T
}
// interface using string type genar
const string:apiResult<string>={
    status:"pending",
    data:"ali"
}
console.log("interface string",string)
// interface using object type genar
const object:apiResult<{id:number,name:string}>={
    status:"completed",
    data:{id:1,name:"xamdi"}
}
console.log("interface object",object)
// 3
function first<T>(items:T[]):T{
    return items[0]
}
// number arry
console.log(first([1,2,3]))
// string arry
console.log(first(["ahmed","xaaji","caato"]))
// object arry
console.log(first([{name:"ali",age:12},{name:"xamdi",age:42},{name:"ahmed",age:32}]))