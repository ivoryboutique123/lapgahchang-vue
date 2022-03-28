<template>
  <div :class="cartClass">
    <a href="/carts" class="indicator__button"
    ><span class="indicator__area"
    ><svg width="20px" height="20px">
                            <use xlink:href="/resources/images/sprite.svg#cart-20"></use>
                          </svg>
                          <span class="indicator__value">{{$store.getters['Cart/qty']}}</span></span
    ></a
    >

    <div v-if="from === 'desktop' && $store.state.Cart.carts.items.length > 0" class="indicator__dropdown">
      <!-- .dropcart -->
      <div class="dropcart">
        <div v-if="$store.state.Cart.carts.items.length > 0" class="dropcart__products-list">
          <div v-for="item in $store.state.Cart.carts.items"
               :key="item.id"
               class="dropcart__product">
            <div class="dropcart__product-image">
              <a :href="`/product/${item.product.id}/${item.product.name}`"
              ><img
                  :src="item.product.images[0].url"
                  alt=""
              /></a>
            </div>
            <div class="dropcart__product-info">
              <div class="dropcart__product-name">
                <a :href="`/product/${item.product.id}/${item.product.name}`"
                >{{
                    item.product.name
                  }}</a
                >
              </div>
              <ul class="dropcart__product-options">
                <li>Color: Yellow</li>
                <li>Material: Aluminium</li>
              </ul>
              <div class="dropcart__product-meta">
                                  <span class="dropcart__product-quantity"
                                  >{{item.quantity}}</span
                                  >
                x
                <span class="dropcart__product-price"
                >{{getCurrency()}}{{ currencyString(item.product.price) }}</span
                >
              </div>
            </div>
            <button
                @click="remove(item)"
                class="
                                  dropcart__product-remove
                                  btn btn-light btn-sm btn-svg-icon
                                "
            >
              <svg width="10px" height="10px">
                <use
                    xlink:href="/resources/images/sprite.svg#cross-10"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div v-else class="dropcart__products-list">
          No item in cart.
        </div>
        <div v-if="$store.state.Cart.carts.items.length > 0" class="dropcart__totals">
          <table>
            <!--              <tr>-->
            <!--                <th>Subtotal</th>-->
            <!--                <td>$5,877.00</td>-->
            <!--              </tr>-->
            <!--              <tr>-->
            <!--                <th>Shipping</th>-->
            <!--                <td>$25.00</td>-->
            <!--              </tr>-->
            <tr>
              <th>Total</th>
              <td>{{getCurrency()}}{{ currencyString($store.getters['Cart/totalPrice']) }}</td>
            </tr>
          </table>
        </div>
        <div v-if="$store.state.Cart.carts.items.length > 0" class="dropcart__buttons">
          <a class="btn btn-secondary" href="/carts"
          >View Cart</a
          >
          <a class="btn btn-primary" href="/checkout"
          >Checkout</a
          >
        </div>
      </div>
      <!-- .dropcart / end -->
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  props: ['from'],
  methods: {
    remove(item) {
      this.$store.dispatch('Cart/delete', {id: item.id})
          .then(() => {
            this.$store.dispatch('Cart/get').then(res => {
              this.$store.commit('Cart/SET_CARTS', res)
            })
          })
          .catch(err => console.log(err));
    }
  },
  computed: {
    cartClass: function () {
      return this.from === 'desktop' ? 'indicator indicator--trigger--click' : 'indicator indicator--mobile';
    }
  }
}
</script>

<style scoped>

</style>