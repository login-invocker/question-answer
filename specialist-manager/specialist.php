<link rel="stylesheet" href="./specialist-manager.css">
<link rel="stylesheet" href="../vendors/bootstrap/css/bootstrap.min.css">


<!--  start -->
<div id="app">
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
           
           <a class="navbar-brand" href="#">Specialist Manager</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
         
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav mr-auto">
         
             </ul>
             <form class="form-inline my-2 my-lg-0">
               <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
               <button type="button" style="float: right" class="btn btn-outline-primary">Thêm một chuyên khoa</button>
             </form>
           </div>
         </nav>
         <br>

         <!-- <input type="text" id="name-specialist"/> -->
         <table class="table" id="table">
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
    </table>



         
</div>

<button onclick = "addSpecialist()">add specialist</button> 
<button onclick = "viewAllSpecialist()">view all specialist</button> 
<button onclick = "removeSpecialist()">remove specialist</button> 
<button onclick = "getOneSpecialist()">get one by id specialist</button> 
<button onclick = "updateOneSpecialist()">update by id specialist</button> 

<script src="../vendors/axios.min.js"></script>
<script src="../vendors/vue.js"></script>
<script src="./serviceAPI/specialist-service.js"></script>
<script src="./specialist-manager.js"></script>