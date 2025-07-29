// 1
var userRole;
(function (userRole) {
    userRole["superadmin"] = "superadmin";
    userRole["moderator"] = "moderator";
    userRole["viewer"] = "viewer";
})(userRole || (userRole = {}));
function canEdit(role) {
    if (role == userRole.viewer) {
        return false;
    }
    else {
        return true;
    }
}
console.log(canEdit(userRole.viewer));
// const button=document.querySelector("button") as HTMLButtonElement
// button.disabled=true
