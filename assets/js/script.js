let email = document.getElementById("email")
let password = document.getElementById("password")
let login = document.getElementById("login")

login.addEventListener("click", function () {
    let data_email = email.value
    let data_password= password.value

    if(data_email == "asdf@example.com" && data_password == "admin123") {
        alert("login berhasil")
    }else{
        alert("login gagal")
    }
    
})
