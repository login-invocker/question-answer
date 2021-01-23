const register = async () => {
    const user = $("#email").val()
    const pass = $("#pass").val()
    console.log(user + $("#re-pass").val())
   if(pass == $("#re-pass").val()){
      
        const response = await axios.post('http://localhost:8080/user/register', {
            "userPass": pass,
            "userEmail": user
        })
        console.log(response)
        if (response.code  === 201 ) {
            alert('Email đã được đăng ký hihi')
        } else {
            window.location.replace("login.php")
            }
   }else {
       alert("Bạn nhập lại mật khẩu không chính xác...")
   }
}


const login = async () => {
    let user = $("#email").val()
    let pass = $("#pass").val()
    const response = await axios.post('http://localhost:8080/user/login', {
        "userEmail": user,
        "userPass": pass
    })
    console.log(response)
    if (response.code  === 401 ) {

    } else {
        window.location.replace("login.php")
        }
}