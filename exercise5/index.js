// 1
function echo(data) {
    return data;
}
console.log("string ".concat(echo("ahmed")));
console.log("number ".concat(echo(123)));
console.log("array ".concat([1, 2, 3]));
console.log('object', { name: "ahmed", age: 22 });
// interface using string type genar
var string = {
    status: "pending",
    data: "ali"
};
console.log("interface string", string);
// interface using object type genar
var object = {
    status: "completed",
    data: { id: 1, name: "xamdi" }
};
console.log("interface object", object);
// 3
function first(items) {
    return items[0];
}
// number arry
console.log(first([1, 2, 3]));
// string arry
console.log(first(["ahmed", "xaaji", "caato"]));
// object arry
console.log(first([{ name: "ali", age: 12 }, { name: "xamdi", age: 42 }, { name: "ahmed", age: 32 }]));
