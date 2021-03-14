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

        if (response.data.code  === "201" ) {
            $.notify("Email đã được đăng ký !", "error");
        } else if(response.status  !== 200) {
            $.notify("Có lỗi xảy ra !", "error");
        }else {
        $.notify("Đăng kí tài khoản thành công", "success");
            await login()
        }
   }else {
       alert("Bạn nhập lại mật khẩu không chính xác...")
   }
}


const login = async () => {
    let mailOrName = $("#email").val()
    let pass = $("#pass").val()
    const user  = {
        "username": mailOrName,
        "password": pass
    }

    let userInfo = {}
    try {
        const response = await api({

            method: 'post',
            url: `/user/login`,
            data: user,
        })

        let dataUser = await getUserByeUserName(mailOrName) 
        if(!dataUser){
            dataUser = await getUserByeUserEmail(mailOrName)
        }

        if(response.data.accessToken){
            userInfo = {
                tokenId: response.data.accessToken,
                role: dataUser.role,
                id: dataUser.id
            }
            setCookie("tokenId", userInfo.tokenId, 7)
            setCookie("roles", userInfo.role,7)
            setCookie("idU", userInfo.id,7)

            $.notify("Đăng nhập thành công.", "success");
            setTimeout(()=> {
                window.location.replace("index.php")
            }, 1000)
        }
    
    } catch (error) {
        console.log(error)
        $.notify("Đăng nhập thất bại!", "error");
        $("#loginFalse").html("Sai tên tài khoản hoặc mật khẩu")
    }

}

const getUserByeUserName = async (userName) => {
    const token = getCookie("tokenId")

    const responseData = await api({

        method: 'get',
        url: `/user/${userName}`,
        data: {},
        headers: { 
            "token-id": `Bearer ${token}`, 
            'Content-Type': 'application/json', 
            },
    });
    return responseData.data
}

const getUserByeUserEmail = async (userName) => {
    const token = getCookie("tokenId")
    
    const responseData = await api({

        method: 'get',
        url: `/user/email/${userName}`,
        data: {},
        headers: { 
            "token-id": `Bearer ${token}`, 
            'Content-Type': 'application/json', 
            },
    });
    return responseData.data
}

const getUserByID = async (id) => {
    const token = getCookie("tokenId")

    try{    
    const responseData = await api({

        method: 'post',
        url: `/user/id`,
        data: {"id": id},
        headers
    });
    return responseData.data
    }catch{
        return false
    }
}


const deleteUserById = async (id) => {
    const token = getCookie("tokenId")
    
    const responseData = await api({

        method: 'delete',
        url: `/user/deleteUser`,
        data: {"id": id},
        headers
    });
    return responseData.data
}