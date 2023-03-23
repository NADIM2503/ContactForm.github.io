function validate() {
    var username = document.getElementById("uname")
    var email1 = document.getElementById("email")
    var message1 = document.getElementById("message")

    if (username.value.trim() == "" || email1.value.trim() == "" || message1.value.trim() == "") {
        alert("no blank spaces allowed")
        return false
    }
    else { return true }
}