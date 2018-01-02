<template>
 <div>
    <div v-if="!customer.item || Object.keys(customer.item).length === 0">Chargement en cours</div>
    <div v-else class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{customer.item.firstname}} {{customer.item.lastname}}</h3>
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
                  <td>{{customer.item.gender}}</td>
                </tr>
                <tr>
                  <td>Home Address</td>
                  <td>
                    <p>{{customer.item.address.street}}</p>
                    <p>{{customer.item.address.zipcode}} {{customer.item.address.city}}</p>
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{{customer.item.contact.email}}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{{customer.item.contact.phone}}(Landline)</td>
                </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./customer-sheet.js"></script>
