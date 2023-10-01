let a = "jean"
let b = "Paul"
let result = checkName(a,b)

function checkName(name1, name2) {
    if (name1 == name2) {
        return true
    } else {
        return false
    }
}
console.log(result)