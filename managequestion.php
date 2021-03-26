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
    <link rel="stylesheet" href="//cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css">
</head>
<body>
    <br>
    <div class="bg-warring " style="margin: 0;">
        <h3>Manager Questions</h3>
    </div>
    <br>
    <table id="table" class="display table" style="margin: 0;">
        <thead id="thedh">
            <th>No</th>
            <th>Content Question</th>
            <th>User Question</th>
            <th>Image</th>
            <th>View</th>
            <th>Status</th>
            <th>Action</th>
        </thead>
        <tbody id="tbody">
           
        </tbody>
        <tfoot>
            <tr>
            <th>No</th>
            <th>Content Question</th>
            <th>User Question</th>
            <th>Image</th>
            <th>View</th>
            <th>Status</th>
            <th>Action</th>
            </tr>
        </tfoot>
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
    <script src="serviceAPI/manager-question.js"></script>
</body>
</html>