$(document).ready( function () {
    const idU = getCookie("idU")
    
    getUserByID(idU).then( user=> {

    const dateStandard = user.dateOfBirth ?moment(user.dateOfBirth).format("yyyy-MM-DD"): "Chưa cập nhật"

        $('#inputEmail').val(user.userEmail || "Chưa cập nhật")
        $('#inputDate').val(dateStandard)
        $('#inputPhone').val(user.cellPhone || "Chưa cập nhật")

    })
    $('#send').on("click", () => {
        updateUser()
    })

});

const updateUser = async () => {
    const idU = getCookie("idU")
    
    const user = {
        "id": idU,
        "userEmail": $('#inputEmail').val(),
        "dateOfBirth":  $('#inputDate').val() === "Chưa cập nhật"? new Date():$('#inputDate').val(),
        "cellPhone":  $('#inputPhone').val()
    }

    const response = await api({
        method: "put",
        url: "/admin/quantri/updateuser",
        data: user,
    })

    if(response.status === 200) {
        $.notify("Update thành công!", "success");
        // location.reload();
    }else{
        $.notify("Thử lại sau!", "error");
    }
    

}