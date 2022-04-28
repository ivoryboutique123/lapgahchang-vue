<template>
  <div class="site__body">
    <bread-crumb></bread-crumb>
    <div class="container">
      <div class="table-responsive" v-if="$store.state.Address.addresses">
        <table v-if="$store.state.Address.addresses" class="table table-bordered">
          <tr>
            <th>Company</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>State</th>
            <th>Postcode</th>
            <th>Action</th>
          </tr>
          <tr v-for="address in $store.state.Address.addresses.data" :key="address.id">
            <td>{{ address.company ? address.company : 'Not Set' }}</td>
            <td>{{ address.name }}</td>
            <td>{{ address.mobile }}</td>
            <td>{{ address.address_1 }} {{ address.address_2 }}</td>
            <td>{{ address.city }}</td>
            <td>{{ address.country }}</td>
            <td>{{ address.state }}</td>
            <td>{{ address.postcode }}</td>
            <td>
              <router-link :to="`/address/${address.id}`">
                <button class="btn btn-sm btn-info">Edit</button>
              </router-link>
            </td>
          </tr>
        </table>
      </div>
      <div v-else>
        You have no address.
      </div>
      <div  class="products-view__pagination">
        <pagination
            v-model="page"
            :records="$store.state.Address.addresses ? $store.state.Address.addresses.meta.total : 0"
            :per-page="$store.state.Address.addresses ? $store.state.Address.addresses.meta.per_page : 25"
            @paginate="setPage"
        />
      </div>
    </div>
    <loader v-if="$store.state.Loading.loading"></loader>
  </div>


</template>

<script>
import BreadCrumb from "@/components/headers/BreadCrumb";
import Pagination from 'vue-pagination-2';
import Loader from "@/components/Loader";

export default {
  name: "List",
  components: {Loader, BreadCrumb, Pagination },
  data() {
    return {
      page: 1,
    }
  },
  mounted() {
    this.getAddresses();
  },
  methods: {
    getAddresses() {
      this.$store.dispatch('Address/get')
          .then((res) => {
            this.$store.commit('Address/SET_ADDRESSES', res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => this.$store.commit('Loading/SET_LOADING', false, { root: true }));
    },
    setPage(page) {
      this.page = page;
      this.getAddresses();
    }
  }
}
</script>

<style scoped>

</style>