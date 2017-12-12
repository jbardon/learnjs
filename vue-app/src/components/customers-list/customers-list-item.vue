<template functional>
  <tr>
    <th scope="row">{{props.customer.id}}</th>
    <td>{{props.customer.firstname}}</td>
    <td>{{props.customer.lastname}}</td>
    <td align="center">
      <router-link :to="'/customer/' + props.customer.id" class="btn btn-default">
        <i class="fa fa-pencil"></i>
      </router-link>
    </td>
  </tr>
</template>
