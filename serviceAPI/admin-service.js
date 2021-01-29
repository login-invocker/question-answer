// const Roles = [
//     'ADMIN'
//     ,'CENTOR'
//     ,'DOCTOR'
//     ,'USER'
// ]
// let arr1 = [
//     {
//         "id": 01,
//         "userName":"tienvu112",
//         "fullName": "vu tien",
//         "userPass": "deptrai",
//         "userEmail": "vutiendzil@gmail.com",
//         "cellPhone": "0338660122",
//         "dateOfBirth": "2000-07-15",
//         "sex": "nam",
//         "role": [
//             "ADMIN",
//             "DOCTOR"
//         ]
//     },
//     {
//         "id": 02,
//         "userName":"tungnui221",
//         "fullName": "thanh tung",
//         "userPass": "deptrai",
//         "userEmail": "tung@gmail.com",
//         "cellPhone": "0338660122",
//         "dateOfBirth": "2000-07-15",
//         "sex": "nam",
//         "role": null
//     },
//     {
//         "id": 03,
//         "userName":"oaiker222",
//         "fullName": "thanh tung",
//         "userPass": "deptrai",
//         "userEmail": "tung@gmail.com",
//         "cellPhone": "0338660122",
//         "dateOfBirth": "2000-07-15",
//         "sex": "nam",
//         "role": null
//     },
//     {
//         "id": 04,
//         "userName":"vuongkim222",
//         "fullName": "thanh tung",
//         "userPass": "deptrai",
//         "userEmail": "tung@gmail.com",
//         "cellPhone": "0338660122",
//         "dateOfBirth": "2000-07-15",
//         "sex": "nam",
//         "role": null
//     }
// ]

const getUsersApi =  async () =>{
    const users = await api({
        method: 'get',
        url: "/admin/quantri/listuser",
        data: {},
        headers
    });
    return users.data
}
const loadUsers = async () => {
    const users = await getUsersApi();
    for ( i = 0 ; i < users.length ; i++) {
        document.getElementById("tbody").innerHTML +=
        "<td>"+(i+1)+"</td><td>"+
        users[i]["userName"]+
        "</td><td>"+users[i]["userEmail"]+
        "</td><td>"+
        users[i]["cellPhone"] + 
        "</td><td>"+users[i]["role"]+
        "</td><td>"
        +`
        <button class='btn' id='view' onClick="getInfoUser('${users[i]["id"]}')" >
        <i class='fas fa-eye'></i></button>
        <button class='btn' id='delete'>
        <i class='fas fa-trash'></i>
        </button></td>`
    }
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

    document.getElementById("card-body").innerHTML = 
    `<div>User Name : ${content[0]["userName"]}</div>
    <div>Full Name : ${content[0]["fullName"]}</div>
    <div>User Email : ${content[0]["userEmail"]}</div>
    <div>Phone Number : ${content[0]["cellPhone"]}</div>
    <div>User Pass : ${content[0]["userPass"]}</div>
    <div>Sex : ${content[0]["sex"]}</div>
    <div>Role : ${content[0]["role"]}</div>
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
   
const updateRoles = async(user)=> {
    const newRoles = setNewRoles()
    user.role = newRoles
    console.log(user)
    const response = await api({
        method: 'put',
        url: "/admin/quantri/updateuser",
        data: user,
        headers
    });
    if(response.status === 200) {
        alert("Update Success")
        location.reload();
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

const btnClose =  document.getElementById('close')
    if(btnClose){
    btnClose.onclick = () => { 
        document.getElementById('card').style.display = 'none' 
    } 
}