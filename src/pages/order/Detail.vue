<template>
  <div class="site__body">
    <bread-crumb></bread-crumb>
    <div v-if="$store.state.Order.order" class="block">
      <div class="container">
        <div class="row">
          <div class="col-md-4 d-flex">
            <div class="card flex-grow-1 mb-md-0">
              <div class="card-body"><h3 class="card-title">Details</h3>
                <div>
                  <h6 style="display: inline">ID: </h6>
                  <label>{{$store.state.Order.order.id}}</label>
                </div>
                <div>
                  <h6 style="display: inline">NAME: </h6>
                  <label>{{$store.state.Order.order.shipping_address.first_name}} {{$store.state.Order.order.shipping_address.last_name}}</label>
                </div>
                <div>
                  <h6 style="display: inline">MOBILE: </h6>
                  <label>{{$store.state.Order.order.shipping_address.mobile}}</label>
                </div>
                <div>
                  <h6 style="display: inline">ADDRESS 1: </h6>
                  <label>{{$store.state.Order.order.shipping_address.address_1}}</label>
                </div>
                <div v-if="$store.state.Order.order.shipping_address.address_2">
                  <h6 style="display: inline">ADDRESS 2: </h6>
                  <label>{{$store.state.Order.order.shipping_address.address_2}}</label>
                </div>
                <div>
                  <h6 style="display: inline">CITY: </h6>
                  <label>{{$store.state.Order.order.shipping_address.city}}</label>
                </div>
                <div>
                  <h6 style="display: inline">POSTCODE: </h6>
                  <label>{{$store.state.Order.order.shipping_address.postcode}}</label>
                </div>
                <div>
                  <h6 style="display: inline">STATE: </h6>
                  <label>{{$store.state.Order.order.shipping_address.state}}</label>
                </div>
                <div>
                  <h6 style="display: inline">COUNTRY: </h6>
                  <label>{{$store.state.Order.order.shipping_address.country}}</label>
                </div>
                <div>
                  <h6 style="display: inline">AMOUNT: </h6>
                  <label>{{$store.state.Order.order.amount}}</label>
                </div>
                <div>
                  <h6 style="display: inline">STATUS: </h6>
                  <label :class="`${$options.filters.textColor($store.state.Order.order.status)} text-uppercase`">{{$store.state.Order.order.status}}</label>
                </div>
                <div>
                  <h6 style="display: inline">PAID AT: </h6>
                  <td v-html="$store.state.Order.order.paid_at ? $options.filters.utcDate($store.state.Order.order.paid_at) : ''"></td>
                </div>
                <div>
                  <h6 style="display: inline">SHIPPED AT: </h6>
                  <td v-html="$store.state.Order.order.shipped_at ? $options.filters.utcDate($store.state.Order.order.shipped_at) : ''"></td>
                </div>
                <div>
                  <h6 style="display: inline">REASON: </h6>
                  <td>{{$store.state.Order.order.reason}}</td>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 d-flex mt-4 mt-md-0">
            <div class="card flex-grow-1 mb-0">
              <div class="card-body"><h3 class="card-title">Items</h3>
                <div class="table-responsive">
                  <table class="table table-bordered">
                    <tr>
                      <th>IMAGE</th>
                      <th>NAME</th>
                      <th>QTY</th>
                      <th>UNIT</th>
                      <th>TOTAL</th>
                    </tr>
                    <tr v-for="(item, key) in $store.state.Order.order.items" :key="key">
                      <td class="align-middle">
                        <div class="product-card__image" style="padding: 0px;">
                          <a :href="`/product/${item.product.id}/${item.product.name}`">
                            <img :src="$store.getters['Order/getImage'](item)" alt="">
                          </a>
                        </div>
                      </td>
                      <td class="align-middle">
                        <a :href="`/product/${item.product.id}/${item.product.name}`">
                          {{item.product.name}}
                        </a>
                      </td>
                      <td class="align-middle">{{item.quantity}}</td>
                      <td class="align-middle">{{item.unit_price}}</td>
                      <td class="align-middle">{{item.unit_price * item.quantity}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import BreadCrumb from "@/components/headers/BreadCrumb";

export default {
  name: "Order",
  components: { BreadCrumb },
  props: ['id'],
  mounted() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      this.$store.dispatch('Order/detail', { id: this.id })
          .then((res) => {
            this.$store.commit('Order/SET_ORDER', res);
          })
          .catch((err) => {
            console.log(err);
          })
    }
  }
}
</script>

<style scoped>

</style>