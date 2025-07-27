// 1
let productName:string="pen"
let price:number=123
let isDiscountAvailable:boolean=false
// wrong value
// productName=123
// price=false
// isDiscountAvailable="book"
// right value
productName="book"
price=122
isDiscountAvailable=false
console.log(`productname:${productName} price${price} isdiscount: ${isDiscountAvailable}`)
// 2
function getDiscount(price:number,discount:number):number{
    return price-price*discount
}
console.log("after discount price",getDiscount(12,0.2))
// 3
let x:unknown=123
x="hello"
function printLength(x:unknown):unknown{
    if(typeof x==="string"){
        console.log(x.length)
        return
    }
}
printLength(x)