<template>
  <div class="site__body">
    <bread-crumb></bread-crumb>
    <div class="container">
      <div class="table-responsive">
        <table v-if="$store.state.Order.orders" class="table table-bordered">
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Paid At</th>
            <th>Shipped At</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
          <tr v-for="order in $store.state.Order.orders.data" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.amount }}</td>
            <td :class="$options.filters.textColor(order.status)">{{ order.status }}</td>
            <td v-html="order.paid_at ? $options.filters.utcDate(order.paid_at) : ''"></td>
            <td v-html="order.shipped_at ? $options.filters.utcDate(order.shipped_at) : ''"></td>
            <td>{{ order.reason }}</td>
            <td>
              <button class="btn btn-sm btn-info">
                <router-link to="/order">View</router-link>
              </button>
              <button class="btn btn-sm btn-info">View</button>
            </td>
          </tr>
        </table>
      </div>
      <div  class="products-view__pagination">
        <pagination
            v-model="page"
            :records="$store.state.Order.orders ? $store.state.Order.orders.meta.total : 0"
            :per-page="$store.state.Order.orders ? $store.state.Order.orders.meta.per_page : 25"
            @paginate="setPage"
        />
      </div>
    </div>
  </div>


</template>

<script>
import BreadCrumb from "@/components/headers/BreadCrumb";
import Pagination from 'vue-pagination-2';

export default {
  name: "Order",
  components: { BreadCrumb, Pagination },
  data() {
    return {
      page: 1,
    }
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders() {
      this.$store.dispatch('Order/get')
          .then((res) => {
            this.$store.commit('Order/SET_ORDERS', res);
          })
          .catch((err) => {
            console.log(err);
          })
    },
    setPage(page) {
      this.page = page;
      this.getOrders();
    }
  }
}
</script>

<style scoped>

</style>