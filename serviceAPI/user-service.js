const register = async () => {
    const email = $("#email").val()
    const pass = $("#pass").val()
    const username = $("#username").val()

    const isPass = pass.length > 3 ? true: false
    const isEmail  = validateEmail(email)

    if(!isEmail) return $.notify("Email không đúng định dạng! Nhập lại email", "error");
    if(!isPass) return $.notify("Mật khẩu quá ngắn, cần > 3 kí tự", "error");
    
    if(pass == $("#re-pass").val()){
      
        const response = await axios.post('https://secret-plateau-56191.herokuapp.com/user/register', {
            "userPass": pass,
            "userEmail": email,
            "userName": username,
        })

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
        const response = await axios.post('https://secret-plateau-56191.herokuapp.com/user/login', {
        "username": user,
        "password": pass
        })
        let dataUser = await getUserByeUserName(user) 
        if(!dataUser){
            dataUser = await getUserByeUserEmail(user)
        }

        if(response.data.accessToken){
            userInfo = {
                tokenId: response.data.accessToken,
                role: dataUser.role
            }
            setCookie("tokenId", userInfo.tokenId, 7)
            setCookie("roles", userInfo.role,7)
            $.notify("Đăng nhập thành công.", "success");
            setTimeout(()=> {
                window.location.replace("index.php")
            }, 1000)
        }
    
    } catch (error) {

        $.notify("Đăng nhập thất bại!", "error");
        $("#loginFalse").html("Sai tên tài khoản hoặc mật khẩu")
    }

}

const getUserByeUserName = async (userName) => {

    const responseData = await api({
        method: 'get',
        url: `/user/${userName}`,
        data: {},
        headers
    });
    return responseData.data
}

const getUserByeUserEmail = async (userName) => {
    
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