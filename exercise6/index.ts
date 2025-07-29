// 1
enum userRole{
    superadmin="superadmin",
    moderator="moderator",
    viewer="viewer"
}
function canEdit(role:userRole){
    if(role==userRole.viewer){
        return false
    }else{
        return true
    }
}
console.log(canEdit(userRole.viewer))
const button=document.querySelector("button") as HTMLButtonElement
button.disabled=true