<template functional>
  <table class="table table-hover table-condensed">
    <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
      <!-- Use component (name in kebab case) -->
      <!-- Bind values (one-way) :key is a shorthand for v-bind:key -->
      <customers-list-item v-for="customer in props.customers"
                           :key="customer.id"
                           :customer="customer"
                           :deleteCustomer="props.deleteCustomer"/>
    </tbody>
  </table>
</template>
