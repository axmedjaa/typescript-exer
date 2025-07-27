// 1
function fullNmae(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullNmae("ahmed", "mohamed"));
// 2
function registerUser(username, isAdmin, language) {
    if (language === void 0) { language = "en"; }
    console.log("".concat(username, " ").concat(isAdmin || "user", " ").concat(language));
}
registerUser("calijaa");
// 3
function average() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (a, b) { return a + b; }, 0);
    return total / scores.length;
}
console.log(average(28, 87, 78, 88, 98));
