<template functional>
  <tr>
    <th scope="row">{{props.customer.id}}</th>
    <td>{{props.customer.firstname}}</td>
    <td>{{props.customer.lastname}}</td>
    <td align="center">
      <router-link :to="`/customer/${props.customer.id}`" class="btn btn-default">
        <i class="fa fa-eye"></i>
      </router-link>

      <router-link :to="`/customer/${props.customer.id}/edit`" exact class="btn btn-default">
        <i class="fa fa-pencil"></i>
      </router-link>

        <a class="btn btn-default" @click="props.deleteCustomer(props.customer.id)">
            <i class="fa fa-trash"></i>
        </a>
    </td>
  </tr>
</template>
