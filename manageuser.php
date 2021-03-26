<?php
include('header.php');
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/manageuser.css">
    <link rel="stylesheet" href="./vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-
    hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="//cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css">
</head>
<body>
   <div behavior="" direction="" class="p-3 bg-primary text-white">
        <h3 class="" id="header">
            User Management
        </h3>
   </div>
    <table class="display table" id="table" style="width:100%">
        <thead>
            <tr>
                <th>STT</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
        <tfoot>
            <tr>
                <th>STT</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
            </tr>
        </tfoot>
    </table>
    <div id="container">
        <div class="card border border-secondary rounded" id="card">
            <div class="card-header " id="card-header">
                <h4>InfoUser</h4> 
                <button id="close" class="btn btn-primary"><i class="fas fa-times"></i></button>
            </div>
            <div class="card-body" id="card-body">
    
            </div>
            <div class="card-footer" id="card-footer">

            </div>
        </div>
    </div>
    <script src="./serviceAPI/admin-service.js"></script>
</body>