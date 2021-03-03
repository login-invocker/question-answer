<?php
include('header.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>manager question</title>
    <link rel="stylesheet" href="./css/managequestion.css">
    <link rel="stylesheet" href="./vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-
    hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
</head>
<body>
    <br>
    <div class="bg-warring " style="margin: 0;">
        <h3>Manager Questions</h3>
    </div>
    <br>
    <table class="table" style="margin: 0;">
        <thead id="thedh">
            <th>No</th>
            <th>Content Question</th>
            <th>User Question</th>
            <th>View</th>
            <th>Status</th>
            <th>Action</th>
        </thead>
        <tbody id="tbody">
           
        </tbody>
    </table>
    <div class="card border-dark" id="card">
        <div class="card-header" id="card-header">
           <h5> View Question</h5>
           <button id="close" class="btn btn-primary"><i class="fas fa-times"></i></button>
        </div>
        <div class="card-body" id="card-body">

        </div>

    </div>

    <div id="container">
        <div class="card border border-secondary rounded" id="card-question-delete">
            <div class="card-header " id="card-delete-header">
                <h4>Chắc chắn muốn xoá question này ???</h4> 
            </div>
            <div class="card-body" id="card-delete-body">
                <div class="row">
                    <div class="col-md-6">
                        <button class="btn btn-primary" id="yes-delete">
                            YES
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-dark" id="no-delete">
                            NO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        let listQuestion = [
            {
                "id" : "q1",
                "content" : "toi bị kho tiêu",
                "idUser" : "user01",
                "status" : "okeeeeeee",
                "view" : 12,
                "idSpeacialist": "speacialist001"
            }
        ];
        
        const getData = async () => {
            listQuestion = await getRawQuestion();
        }
        getData().then(() => {
        htmlContent()
    })

    function htmlContent () {
        for (let i = 0 ; i < listQuestion.length ; i ++) {
            
            const idUser = listQuestion[i]["idUser"]
            getUserByID(idUser).then( userQ => {
                document.getElementById('tbody').innerHTML += 
                    `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${listQuestion[i]['content']}</td>
                        <td>${userQ? userQ.userName + " / " + userQ.userEmail: "Lỗi xảy ra khi lấy thông tin user"}</td>
                        <td>${listQuestion[i]['view']}</td>
                        <td>${listQuestion[i]['status']}</td>
                        <td><button onClick="drawQuestion('${listQuestion[i]["id"]}')"><i class="fas fa-eye"></i></button></td>
                    </tr>
                    `
                })
        }
    }

    const drawQuestion = (idquestion) => {
        document.getElementById("card"). style.display = "block"
        let content = listQuestion.filter(function(obj){
            return obj.id === idquestion
        })

        document.getElementById("card-body").innerHTML = `
            <div>
                <label class='form-label' for='idQuestion'> Id Question :</label>
                <input type='text' id='idQuestion' class='' value='${content[0]["id"]}' autofocus>    
            </div>
            <div>
                <label class='form-label' for='contentQuestion'> Content Question :</label>
                <input type='text' id='contentQuestion' class='' value='${content[0]["content"]}'>    
            </div>
            <div>
                <label class='form-label' for='idUser'> User Question :</label>
                <input type='text' id='idUser' class='' value='Name user'>    
            </div>
            <div>
                <label class='form-label' for='idSpeacialist'> Speacialist :</label>
                <input type='text' value='${content[0]['idSpeacialist']}' id='idSpeacialist'>
            </div>
            <div>
                <label class='form-label' for='status'> Status :</label>
                <div class="d-flex justify-content-between">
                    <input type="radio" id="male" class="status" ${content[0].status === 'APPROVED'? 'checked': ''} name="status" value="APPROVED">
                    <label for="male">APPROVED</label><br>
                    <input type="radio" id="female" name="status" class="status" ${content[0].status === 'UNAPPROVED'? 'checked': ''}  value="UNAPPROVED">
                    <label for="female">UNAPPROVED</label><br>
                    <input type="radio" id="other" name="status" class="status" ${content[0].status === 'DONE'? 'checked': ''}  value="DONE">
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

        const update = (idq) => {
                    
            var newinfo = {
                    "id" : document.getElementById('idQuestion').value,
                    "content" : document.getElementById('contentQuestion').value,
                    // "idUser" : document.getElementById('idUser').value,
                    "status" : document.getElementById('status').value,
                    "view" : document.getElementById('view').value,
                    "idSpeacialist": document.getElementById('idSpeacialist').value
                }
                for(j = 0 ; j < listQuestion.length ; j ++) {
                    if(listQuestion[j]['id'] === idq) {
                        listQuestion[j] = newinfo
                    }
                }
                
            document.getElementById('card').style.display = 'none'
            document.getElementById('tbody').innerHTML = ''
            htmlContent()
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
    </script>
</body>
</html>