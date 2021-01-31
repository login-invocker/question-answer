<link rel="stylesheet" href="./specialist-manager.css">
<link rel="stylesheet" href="../vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-
    hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

<!--  start -->
<div id="app">
    <nav class="navbar navbar-light bg-light">   
           <a class="navbar-brand" href="#">Specialist Manager</a>

             </ul>
             <form class="form-inline">
               <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
               <button type="button" v-on:click="openModalNewSpecialist" style="float: right" class="btn btn-outline-primary">Thêm một chuyên khoa</button>
             </form>
         </nav>
         <br>

         <!-- <input type="text" id="name-specialist"/> -->
         <div class="jumbotron bg-white">
         <table class="table" id="table">
        <thead class="thead-dark">
            <tr>
                <th>STT</th>
                <th>Name Specialist</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <tr v-for="(specialist, index) in specialists">
            <td>{{index+1}}</td>
            <td>{{specialist.name}}</td>
            <td >
            <button type="button" v-on:click="openAction(index)" class="btn btn-info">Actions</button>
            </td>
            </tr>
        </tbody>
    </table>
          <div id="container">
              <div class="card border border-secondary rounded" id="card">
                  <div class="card-header" id="card-header">
                      <h4>Specialist</h4> 
                      <button id="close" v-on:click="closeAction" class="btn btn-primary"><i class="fas fa-times"></i></button>
                  </div>
                  <div class="card-body" id="card-body">
                   <div>Specialist Name : <input type="text" id="name-specialist" v-bind:value="specialist.name || ''"/></div>
                  </div>
                  <div class="card-footer" id="card-footer" >
                  <button type="button" v-on:click="updateSpecialist" class="btn btn-primary">Update</button>
                  <button type="button" v-on:click="removeSpecialist()" class="btn btn-danger float-right">Delete</button>
                  </div>
              </div>
                          <!-- new -->

              <div class="card border border-secondary rounded" id="card-new">
                  <div class="card-header " id="card-header">
                      <h4>Specialist</h4>   
                      <button id="close" v-on:click="closeNewSpecialist" class="btn btn-primary"><i class="fas fa-times"></i></button>
                  </div>
                  <div class="card-body" id="card-body">
                   <div>Specialist Name : <input type="text" id="new-name-specialist" /></div>
                  </div>
                  <div class="card-footer" id="card-footer" >
                  <button type="button" v-on:click="addSpecialist" class="btn btn-primary">Xác nhận thêm mới</button>
                  </div>
                
              </div>
            </div>
      </div>


         
</div>

<script src="../vendors/axios.min.js"></script>
<script src="../vendors/vue.js"></script>
<script src="../serviceAPI/specialist-service.js"></script>
<script src="../serviceAPI/config/config.js"></script>

<script src="./specialist-manager.js"></script>