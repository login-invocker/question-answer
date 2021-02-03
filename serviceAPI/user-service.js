const register = async () => {
    const user = $("#email").val()
    const pass = $("#pass").val()
    const username = $("#username").val()

    if(pass == $("#re-pass").val()){
      
        const response = await axios.post('http://localhost:8080/user/register', {
            "userPass": pass,
            "userEmail": user,
            "userName": username,
        })
        console.log(response)
        if (response.code  === 201 ) {
            alert('Email đã được đăng ký !')
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
    
    let userInfo = {}
    try {
        const response = await axios.post('http://localhost:8080/user/login', {
        "username": user,
        "password": pass
    })
    const dataUser = await getUserByeUserName();

    userInfo = {
        tokenId: response.data.accessToken,
        role: dataUser.role
    }
    } catch (error) {
        $("#loginFalse").html("Sai tên tài khoản hoặc mật khẩu")
    }

    setCookie("tokenId", userInfo.tokenId, 7)
    setCookie("roles", userInfo.role,7)
    window.location.replace("home.php")
}

const getUserByeUserName = async () => {
    let userName = $("#email").val()

    const responseData = await api({
        method: 'get',
        url: `/user/email/${userName}`,
        data: {},
        headers
    });
    return responseData.data
}


const deleteUserById = async (id) => {
    
    const responseData = await api({
        method: 'delete',
        url: `/user/deleteUser`,
        data: {"id": id},
        headers
    });
    return responseData.data
}