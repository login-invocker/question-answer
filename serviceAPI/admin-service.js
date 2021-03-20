const Roles = [
    'ADMIN'
    ,'CENTOR'
    ,'DOCTOR'
    ,'USER'
]

const getUsersApi =  async () =>{
    const token = getCookie("tokenId")

    const users = await api({
        method: 'get',
        url: "/admin/quantri/listuser",
        data: '',
        headers: {
            "token-id": `Bearer ${token}`, 
            'Content-Type': 'application/json', 
            },
    });
    return users.data
}

const loadUsers = async () => {
    const users = await getUsersApi();
    for ( i = 0 ; i < users.length ; i++) {
        document.getElementById("tbody").innerHTML +=
        "<tr><td>"+(i+1)+"</td><td>"+
        users[i]["userName"]+
        "</td><td>"+users[i]["userEmail"]+
        "</td><td>"+
        users[i]["cellPhone"] + 
        "</td><td>"+users[i]["role"]+
        "</td><td>"
        +`
        <button class='btn' id='view' onClick="getInfoUser('${users[i]["id"]}')" >
            <i class='fas fa-eye'></i>
        </button>
        <button onClick="deleteUser('${users[i]["id"]}')" class='btn' id='delete'>
            <i class='fas fa-trash'></i>
        </button>
        </td></tr>`
    }
    $(document).ready(function() {
        $('#table').DataTable();
    } );
}

const getInfoUser = async(id) => {
    document.getElementById("card").style.display = "block"
    const users = await getUsersApi();

    let content = users.map( (arr) => {
            if (id === arr.id) {
                return arr
            }
    })
            
    content = content.filter(function( user ) {
        return user !== undefined;
    });
    
    const dateStandard = moment(content[0]["dateOfBirth"]).format("yyyy-MM-DD")
    document.getElementById("card-body").innerHTML = 
    `
    <div>
        <label class='form-label' for='username'> User Name :</label>
        <input type='text' id='username' class='' value='${content[0]["userName"]}' autofocus >    
    </div>
    <div>
        <label class='form-label' for='fullname'>Full Name :</label>
        <input type='text' id='fullname' class='' value='${content[0]["fullName"]}'>    
    </div>
    <div>
        <label class='form-label' for='pass'>User Pass :</label>
        <input type='text' id='pass' class='' value='${content[0]["userPass"]}'>    
    </div>
    <div>
        <label class='form-label' for='email'>User Email :</label>
        <input type='text' id='email' class='' value='${content[0]["userEmail"]}'>    
    </div>
    <div>
        <label class='form-label' for='cellphone'>Cell Phone :</label>
        <input type='text' id='cellphone' class='' value='${content[0]["cellPhone"]}'>    
    </div>
    <div>
        <label class='form-label' for='dateofbirth'>Date Of Birth :</label>
        <input type='date' id='dateofbirth' class='' value='${dateStandard}'>    
    </div>
    <div>
        <label class='form-label' for='sex'>Sex :</label>
        <input type='text' id='sex' class='' value='${content[0]["sex"]}'>    
    </div>
    <div>
        <label class='form-label' for='role'>Role :</label>
        <input type='text' id='role' class='' value='${content[0]["role"]}'>    
    </div>
    <button class='btn btn-primary' onClick = "updateInfo('${id}')" id='sucessupdate' style='width: 100%' >Update</button>

`

    let footerCard =``
    Roles.forEach( role => {
            footerCard += `<input type="checkbox" id="_${role}" name="roles[]"
                value="${role}">
                <label for="vehicle1"> ${role}</label>
                `
    })

    document.getElementById("card-footer").innerHTML = `
    Roles: ${footerCard}
    <button type="button" onClick='updateRoles(${JSON.stringify(content[0])})' class="btn btn-primary">Update Roles User</button>
    `
    if(content[0]['role']){
        content[0]['role'].forEach( role => {
            document.getElementById(`_${role}`).checked = true;
        })
    }

}
 

const updateInfo = async (iduser) => {
    const users = await getUsersApi();

    let contents = users.map( (arr) => {
        if (iduser === arr.id) {
            return arr
        }
    })
    contents = contents.filter(function( user ) {
        return user !== undefined;
    });
    const newUserInfo = {
        "id": iduser,
        "userName":document.getElementById('username').value,
        "fullName": document.getElementById('fullname').value,
        "userPass": document.getElementById('pass').value,
        "userEmail": document.getElementById('email').value,
        "cellPhone": document.getElementById('cellphone').value,
        "dateOfBirth": document.getElementById('dateofbirth').value,
        "sex": document.getElementById('sex').value,
        "role": setNewRoles()
    }

    newUserInfo.dateOfBirth = newUserInfo.dateOfBirth 
    ? standardTimeConvert(newUserInfo.dateOfBirth)
    : standardTimeConvert(new Date())
    const token = getCookie("tokenId")

    const response = await api({

    method: 'put',
    url: "/admin/quantri/updateuser",
    data: newUserInfo,
    headers: { 
        "token-id": `Bearer ${token}`, 
        'Content-Type': 'application/json', 
    },
});
    if(response.status === 200) {
        alert("Update Success")
        location.reload();
    }
    
}
const updateRoles = async(user)=> {
    const token = getCookie("tokenId")

    const newRoles = setNewRoles()
    user.role = newRoles
    const response = await api({
        method: 'put',
        url: "/admin/quantri/updateuser",
        data: user,
        headers: { 
            "token-id": `Bearer ${token}`, 
            'Content-Type': 'application/json', 
            },
    });
    if(response.status === 200) {
        alert("Update Success")
        location.reload();
    }
}

const deleteUser = async (id) => {
    if(confirm("Bạn có chắc chắn muốn xóa user này ?") == true){
        const resDelete = await deleteUserById(id);
        location.reload();
    }else{
    }
}


const setNewRoles = () => {
    let newRoles = []
    const checkbox = document.getElementsByName('roles[]')
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked === true){
            newRoles.push( checkbox[i].value )
        }
    }
    return newRoles
}

if(window.location.href.match("manageuser")){
loadUsers()
}


$(document).ready(() => {
    const btnClose =  document.getElementById('close')

    if(btnClose)
    btnClose.onclick = () => { 
        document.getElementById('card').style.display = 'none' 
    } 
})