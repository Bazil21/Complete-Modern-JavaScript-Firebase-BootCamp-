let user = { name: "Alan" }
function message(user) {
    user.name = "Peter"
    console.log("user inside function: ", user.name)
}
message(user)
console.log(user.name)