<template>
 <div>
    <div v-if="Object.keys(bean).length === 0">Chargement en cours</div>
    <div v-else class="panel panel-info">
      <div class="panel-heading">
          <div class="row">
              <div class="col col-xs-6">
                  <h3 class="panel-title">{{bean.firstname}} {{bean.lastname}}</h3>
              </div>
              <div v-if="modelChanged" class="col col-xs-6 text-right">
                  <button type="button" @click="save" class="btn btn-sm btn-success">Save</button>
              </div>
          </div>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-md-3 col-lg-3" align="center">
            <img alt="User Pic" class="img-circle img-responsive"/>
          </div>
          <div class="col-md-9 col-lg-9">
            <table class="table table-user-information">
            <tbody>
                <tr>
                  <td>Gender</td>
                    <td>
                        <!-- v-model for two-way data-binding (use sync for the same feature with components) -->
                        <input type="radio" name="gender"
                               value="Male" v-model="bean.gender"/>Male
                        <input type="radio" name="gender"
                               value="Female" v-model="bean.gender"/>Female
                    </td>
                </tr>
                <tr>
                  <td>Home Address</td>
                  <td>
                      <p><input type="text" v-model="bean.address.street"></p>
                      <p>
                          <input type="text" v-model="bean.address.city">
                          <input type="text" v-model="bean.address.zipcode">
                      </p>
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><input type="text" v-model="bean.contact.email"></td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td><input type="text" v-model="bean.contact.phone">(Landline)</td>
                </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./customer-sheet-edit.js"></script>
