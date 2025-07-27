// 1
var productName = "pen";
var price = 123;
var isDiscountAvailable = false;
// wrong value
// productName=123
// price=false
// isDiscountAvailable="book"
// right value
productName = "book";
price = 122;
isDiscountAvailable = false;
console.log("productname:".concat(productName, " price").concat(price, " isdiscount: ").concat(isDiscountAvailable));
// 2
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log("after discount price", getDiscount(12, 0.2));
// 3
var x = 123;
x = "hello";
function printLength(x) {
    if (typeof x === "string") {
        console.log(x.length);
        return;
    }
}
printLength(x);
