let listQuestion = [];
let listSpecalist = []

const getData = async () => {
    listQuestion = await getRawQuestion();
    listSpecalist = await getSpecailist()

    htmlContent()
}
getData().then(() => {
    setTimeout(() => {
        $('#table').DataTable();
    }, 7000);
    
})

function htmlContent () {
for (let i = 0 ; i < listQuestion.length ; i ++) {
    
    const idUser = listQuestion[i]["idUser"]
    
    getUserByID(idUser).then( userQ => {
        getImagesById(listQuestion[i].idImage).then(imageData => {
            document.getElementById('tbody').innerHTML += 
            `
            <tr>
                <td><a href="/detail-question/detail-question.php?id=${listQuestion[i].id}">${i + 1}</a></td>
                <td>${listQuestion[i]['content']}</td>
                <td>${userQ? userQ.userName + " / " + userQ.userEmail: "Lỗi xảy ra khi lấy thông tin user"}</td>
                <td>
                    <img src="data:image/png;base64, ${imageData}" alt="Ảnh chi tiết về câu hỏi" />
                </td>
                <td>${listQuestion[i]['view']}</td>
                <td>${listQuestion[i]['status']}</td>
                <td><button onClick="drawCardQuestion('${listQuestion[i]["id"]}')"><i class="fas fa-eye"></i></button></td>
            </tr>
                `
        })
    })                  
}
}

const drawCardQuestion = (idquestion) => {
document.getElementById("card"). style.display = "block"
let content = listQuestion.filter(function(obj){
    return obj.id === idquestion
})

let optionSpecalist = ""

listSpecalist.forEach(s_p => {
    content[0]['idSpecialist'] === s_p.id
    ? optionSpecalist += `<option value="${s_p.id}" selected>${s_p.name}</option>`
    : optionSpecalist += `<option value="${s_p.id}" >${s_p.name}</option>`
});

if (content[0].idSpecialist == 0)        
    optionSpecalist += "<option selected>Chưa cập nhật</option>"

document.getElementById("card-body").innerHTML = `
    <div>
        <label class='form-label' for='idQuestion'> Id Question :</label>
        <input type='text' id='idQuestion' class='' value='${content[0]["id"]}' autofocus>    
    </div>
    <div>
        <label class='form-label' for='idUser'> User Question :</label>
        <input type='text' id='idUser' class='' value='Name user'>    
    </div>
    <div>
        <label class="my-1 mr-2" for="idSpecialist">Danh mục khoa</label>
        <select class="custom-select my-1 mr-sm-2" id="idSpecialist">
           ${optionSpecalist}
        </select>
    </div>
    <div>
        <label class='form-label' for='status'> Status :</label>
        <div class="d-flex justify-content-between">
            <input type="radio" id="male" class="status" ${content[0].status === 'APPROVED'? 'checked': ''} name="status[]" value="APPROVED">
            <label for="male">APPROVED</label><br>
            <input type="radio" id="female" name="status[]" class="status" ${content[0].status === 'UNAPPROVED'? 'checked': ''}  value="UNAPPROVED">
            <label for="female">UNAPPROVED</label><br>
            <input type="radio" id="other" name="status[]" class="status" ${content[0].status === 'DONE'? 'checked': ''}  value="DONE">
            <label for="other">DONE</label> 
        </div>
         
    </div>
    <div>
        <label class='form-label' for='view'>View :</label>
        <input type='text' id='view' class='' value='${content[0]["view"]}'>    
    </div>
    <div class='row'>
        <div class='col-6'>
            <button class='btn btn-primary' onClick = "update('${idquestion}')" id='sucessupdate' style='width: 100%' >Update</button>    
        </div>
        <div class='col-6'>
            <button class='btn btn-primary' onClick = "delQuestion('${idquestion}')" id='sucessdelete' style='width: 100%' >Delete</button>    
        </div>
    </div>
`
}

const update = async (id_q) => {
    const status = $('input[name="status[]"]:checked').attr('value')

    const newQuestion = {
            "id" : id_q,
            "status" : status,
            "idSpecialist": $("#idSpecialist").val()
    }
    console.log(newQuestion)
    await updateQuestion(newQuestion)
        
    document.getElementById('card').style.display = 'none'
    document.getElementById('tbody').innerHTML = ''
    getData()
}

const delQuestion = (idQuestion) => {

    document.getElementById('container').style.display = 'block'
    document.getElementById('card').style.display = 'none'
    document.getElementById('yes-delete').onclick = async function() {
        const isDelete = await deleteQuestion(idQuestion);
        if(!isDelete) return;
        
        for(j = 0 ; j < listQuestion.length ; j ++) {
            if(listQuestion[j]['id'] === idQuestion) {
                listQuestion.splice(j,1);
            }
        }
        document.getElementById('container').style.display = 'none'
        document.getElementById('tbody').innerHTML = ''
        htmlContent()
    }
    document.getElementById('no-delete').onclick = function() {
    document.getElementById('container').style.display = 'none'
    }

}

document.getElementById('close').onclick = function() {
    document.getElementById('card').style.display = 'none'
}

const getImagesById = async (id) => {
    try{
        const response = await api({
            method: 'get',
            url: `/image/id/${id}`,
            data: {},
            headers: {
            }
        })   
        // const imageData = `data:image/png;base64,${response.data}`
        
        // let image = new Image();
        // image.src = imageData;
        // document.getElementById(id).appendChild(image);
        return response.data

    }catch{
        return false
    }
}

const getSpecailist = async () => {
const res = await api({
    method: 'get',
    url: "/specialist/list",
    data: {},
    headers
})
return res.data
}