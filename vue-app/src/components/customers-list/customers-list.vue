<template>
    <div class="panel panel-default panel-table">
    <div class="panel-heading">
      <div class="row">
        <div class="col col-xs-6">
          <h3 class="panel-title">Customers list</h3>
        </div>
        <div class="col col-xs-6 text-right">
          <button v-if="customers.list && customers.list.length > 0"
                  @click="clearCustomers" type="button" class="btn btn-sm btn-danger">Clear</button>
          <button type="button" @click="createCustomer"
                  class="btn btn-sm btn-success">Create</button>
        </div>
      </div>
    </div>
    <div class="panel-body">
      <div v-if="customers.list && customers.list.length <= 0">Pas de clients</div>
      <customers-list-display v-else :customers="customers.list" :deleteCustomer="deleteCustomer"/>
    </div>
  </div>
</template>
<script src="./customers-list.js"></script>
