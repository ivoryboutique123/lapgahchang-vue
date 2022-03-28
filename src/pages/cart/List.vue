<template>
  <div class="site__body">
    <bread-crumb></bread-crumb>
    <div class="cart block">
      <div class="container">
        <div class="page-header__title"><h1>Shopping Cart</h1></div>
        <table class="cart__table cart-table">
          <thead class="cart-table__head">
          <tr class="cart-table__row">
            <th class="cart-table__column cart-table__column--image">Image</th>
            <th class="cart-table__column cart-table__column--product">Product</th>
            <th class="cart-table__column cart-table__column--price">Price</th>
            <th class="cart-table__column cart-table__column--quantity">Quantity</th>
            <th class="cart-table__column cart-table__column--total">Total</th>
            <th class="cart-table__column cart-table__column--remove"></th>
          </tr>
          </thead>
          <tbody v-if="$store.state.Cart.carts.items.length > 0" class="cart-table__body">
          <tr v-for="item in $store.state.Cart.carts.items"
              :key="item.id"
              class="cart-table__row"
          >
            <td class="cart-table__column cart-table__column--image"><a href="#"><img
                :src="item.product.images[0].url" alt=""></a></td>
            <td class="cart-table__column cart-table__column--product">
              <a href="#" class="cart-table__product-name">{{ item.product.name }}</a>
              <ul class="cart-table__options">
                <li>Color: Yellow</li>
                <li>Material: Aluminium</li>
              </ul>
            </td>
            <td class="cart-table__column cart-table__column--price" data-title="Price">{{ getCurrency() }}{{currencyString(item.product.price)}}</td>
            <td class="cart-table__column cart-table__column--quantity" data-title="Quantity">
              <div class="input-number">
                <input class="form-control input-number__input" type="number" min="1" :value="item.quantity">
                <div class="input-number__add" @click="addQty(item)"></div>
                <div class="input-number__sub" @click="subQty(item)"></div>
              </div>
            </td>
            <td class="cart-table__column cart-table__column--total" data-title="Total">{{ getCurrency() }}{{currencyString(item.product.price * item.quantity)}}</td>
            <td class="cart-table__column cart-table__column--remove">
              <button @click="remove(item)" type="button" class="btn btn-light btn-sm btn-svg-icon">
                <svg width="12px" height="12px">
                  <use xlink:href="/resources/images/sprite.svg#cross-12"></use>
                </svg>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="cart__actions">
          <form class="cart__coupon-form"><label for="input-coupon-code" class="sr-only">Password</label>
<!--            <input type="text" class="form-control" id="input-coupon-code" placeholder="Coupon Code">-->
<!--            <button type="submit" class="btn btn-primary">Apply Coupon</button>-->
          </form>
          <div class="cart__buttons">
            <a href="/" class="btn btn-primary">Continue Shopping</a>
<!--            <a href="index.html" class="btn btn-light">Continue Shopping</a>-->
<!--            <a href="#" class="btn btn-primary cart__update-button">Update Cart</a>-->
          </div>
        </div>
        <div class="row justify-content-end pt-5">
          <div class="col-12 col-md-7 col-lg-6 col-xl-5">
            <div class="card">
              <div class="card-body"><h3 class="card-title">Cart Totals</h3>
                <table class="cart__totals">
                  <thead class="cart__totals-header">
                  <tr>
                    <th>Subtotal</th>
                    <td>$5,877.00</td>
                  </tr>
                  </thead>
                  <tbody class="cart__totals-body">
                  <tr>
                    <th>Shipping</th>
                    <td>$25.00
<!--                      <div class="cart__calc-shipping"><a href="#">Calculate Shipping</a></div>-->
                    </td>
                  </tr>
                  </tbody>
                  <tfoot class="cart__totals-footer">
                  <tr>
                    <th>Total</th>
                    <td>{{ getCurrency() }}{{currencyString($store.getters['Cart/totalPrice'])}}</td>
                  </tr>
                  </tfoot>
                </table>
                <a class="btn btn-primary btn-xl btn-block cart__checkout-button" href="/checkout">Proceed
                  to checkout</a></div>
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
  name: "List",
  components: { BreadCrumb },
  mounted() {
    this.$store.dispatch('Cart/get')
        .then((res) => this.$store.commit('Cart/SET_CARTS', res))
        .finally(() => this.$store.commit('Loading/SET_LOADING', false));
  },
  methods: {
    addQty(item) {
      let params = {
        id: item.id,
        product_id: item.product_id,
        product_stock_id: item.product_stock_id,
        quantity: item.quantity + 1
      };

      this.$store.dispatch('Cart/addQty', params)
          .then((res) => this.$store.commit('Cart/UPDATE_CART', res))
          .catch(err => console.log(err));
    },
    subQty(item) {
      let params = {
        id: item.id,
        product_id: item.product_id,
        product_stock_id: item.product_stock_id,
        quantity: item.quantity - 1
      };

      this.$store.dispatch('Cart/subQty', params)
          .then((res) => this.$store.commit('Cart/UPDATE_CART', res))
          .catch(err => console.log(err));
    },
    remove(item) {
      this.$store.dispatch('Cart/delete', {id: item.id})
          .then((res) => {
            if(res.result) {
              this.$store.dispatch('Cart/get')
                  .then((res) => this.$store.commit('Cart/SET_CARTS', res))
                  .catch(err => console.log(err))
            }
          })
          .catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>

</style>