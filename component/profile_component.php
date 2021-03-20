<form style="margin: 40px 0 0 0 "> 
  <div class="form-group row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputDate" class="col-sm-2 col-form-label">Date Of Birth :</label>
    <div class="col-sm-10">
      <input type="date" class="form-control" id="inputDate">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPhone" class="col-sm-2 col-form-label">Phone:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPhone">
    </div>
  </div>
  
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Sex:</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            Nam
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Nữ
          </label>
        </div>

      </div>
    </div>
  </fieldset>
  <div class="form-group row float-right">
    <div class="col-sm-10" >
      <button onClick="" id="send" type="button" class="btn btn-primary">Cập nhật</button>
    </div>
  </div>
</form>
