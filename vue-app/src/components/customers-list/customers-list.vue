<template>
    <div class="panel panel-default panel-table">
    <div class="panel-heading">
      <div class="row">
        <div class="col col-xs-6">
          <h3 class="panel-title">Customers list</h3>
        </div>
        <div class="col col-xs-6 text-right">
          <button v-if="customers.list.length > 0" @click="clearCustomers" type="button" class="btn btn-sm btn-danger">Clear</button>
          <button type="button" @click="createCustomer" class="btn btn-sm btn-success">Create</button>
        </div>
      </div>
    </div>
    <div class="panel-body">
      <div v-if="customers.list.length <= 0">Pas de clients</div>
      <table v-else class="table table-hover table-condensed">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <customers-list-item v-for="customer in customers.list" :key="customer.id" :customer="customer"/>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script src="./customers-list.js"></script>