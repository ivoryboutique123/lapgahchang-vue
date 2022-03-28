<template>
  <div class="site__body">
    <bread-crumb></bread-crumb>
    <div class="checkout block">
      <div class="container">
        <div class="page-header__title"><h1>Cart Checkout</h1></div>
        <div v-if="$store.state.Cart.carts.items.length > 0" class="row">
          <div class="col-12 col-lg-6 col-xl-7">
            <div class="card mb-lg-0">
              <div class="card-body"><h3 class="card-title">Billing details</h3>
                <div class="form-row">
                  <div class="form-group col-md-6"><label for="checkout-first-name">First Name</label>
                    <input v-model="shipping_address.first_name" type="text" class="form-control" id="checkout-first-name"
                           placeholder="First Name">
                    <span v-if="errors['shipping_address.first_name']" class="text-danger">{{ errors['shipping_address.first_name'][0] }}</span>
                  </div>
                  <div class="form-group col-md-6"><label for="checkout-last-name">Last Name</label>
                    <input v-model="shipping_address.last_name" type="text" class="form-control" id="checkout-last-name"
                           placeholder="Last Name">
                    <span v-if="errors['shipping_address.last_name']" class="text-danger">{{ errors['shipping_address.last_name'][0] }}</span>
                  </div>
                </div>
                <div class="form-group"><label for="checkout-company-name">Mobile</label>
                  <input v-model="shipping_address.mobile" type="text" class="form-control" id="checkout-mobile" placeholder="Mobile(e.g 0123456789)">
                </div>
                <div class="form-group"><label for="checkout-company-name">Company Name <span
                    class="text-muted">(Optional)</span></label>
                  <input v-model="shipping_address.company" type="text" class="form-control" id="checkout-company-name" placeholder="Company Name">
                </div>
                <div class="form-group"><label for="checkout-country">Country</label>
                  <select v-model="shipping_address.country" id="checkout-country" class="form-control">
                    <option v-for="(country, key) in countries" :key="key" :value="country.value">{{ country.label }}</option>
                  </select>
                  <span v-if="errors['shipping_address.country']" class="text-danger">{{ errors['shipping_address.country'][0] }}</span>
                </div>
                <div class="form-group"><label for="checkout-street-address">Address 1</label>
                  <input v-model="shipping_address.address_1" type="text" class="form-control" id="checkout-street-address"
                         placeholder="Street Address">
                  <span v-if="errors['shipping_address.address_1']" class="text-danger">{{ errors['shipping_address.address_1'][0] }}</span>
                </div>
                <div class="form-group"><label for="checkout-address">Address 2<span
                    class="text-muted">(Optional)</span></label>
                  <input v-model="shipping_address.address_2" type="text" class="form-control" id="checkout-address">
                </div>
                <div class="form-group"><label for="checkout-city">City</label>
                  <input v-model="shipping_address.city" type="text" class="form-control" id="checkout-city">
                  <span v-if="errors['shipping_address.city']" class="text-danger">{{ errors['shipping_address.city'][0] }}</span>
                </div>
                <div class="form-group"><label for="checkout-state">State</label>
                  <input v-model="shipping_address.state" type="text" class="form-control" id="checkout-state">
                  <span v-if="errors['shipping_address.state']" class="text-danger">{{ errors['shipping_address.state'][0] }}</span>
                </div>
                <div class="form-group"><label for="checkout-postcode">Postcode</label>
                  <input v-model="shipping_address.postcode" type="text" class="form-control" id="checkout-postcode">
                  <span v-if="errors['shipping_address.postcode']" class="text-danger">{{ errors['shipping_address.postcode'][0] }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0">
            <div class="card mb-0">
              <div class="card-body"><h3 class="card-title">Your Order</h3>
                <table class="checkout__totals">
                  <thead class="checkout__totals-header">
                  <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                  </thead>
                  <tbody class="checkout__totals-products">
                  <tr v-for="item in $store.state.Cart.carts.items" :key="item.id">
                    <td>{{ item.product.name }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ getCurrency() }}{{ currencyString(item.product.price * item.quantity) }}</td>
                  </tr>
                  </tbody>
                  <tbody class="checkout__totals-subtotals">
                  <tr>
                    <th>Subtotal</th>
                    <td></td>
                    <td>$5,877.00</td>
                  </tr>
                  <tr>
                    <th>Shipping</th>
                    <td></td>
                    <td>$25.00</td>
                  </tr>
                  </tbody>
                  <tfoot class="checkout__totals-footer">
                  <tr>
                    <th>Total</th>
                    <td></td>
                    <td>{{ getCurrency() }}{{ currencyString($store.getters['Cart/totalPrice']) }}</td>
                  </tr>
                  </tfoot>
                </table>
                <div class="payment-methods">
                  <ul class="payment-methods__list">
                    <li class="payment-methods__item payment-methods__item--active"><label
                        class="payment-methods__item-header"><span
                        class="payment-methods__item-radio input-radio"><span
                        class="input-radio__body"><input class="input-radio__input"
                                                         name="checkout_payment_method"
                                                         type="radio" checked="checked"> <span
                        class="input-radio__circle"></span> </span></span><span
                        class="payment-methods__item-title">Direct bank transfer</span></label>
                      <div class="payment-methods__item-container">
                        <div class="payment-methods__item-description text-muted">Make your
                          payment directly into our bank account. Please use your Order ID as
                          the payment reference. Your order will not be shipped until the
                          funds have cleared in our account.
                        </div>
                      </div>
                    </li>
                    <li class="payment-methods__item"><label
                        class="payment-methods__item-header"><span
                        class="payment-methods__item-radio input-radio"><span
                        class="input-radio__body"><input class="input-radio__input"
                                                         name="checkout_payment_method"
                                                         type="radio"> <span
                        class="input-radio__circle"></span> </span></span><span
                        class="payment-methods__item-title">Check payments</span></label>
                      <div class="payment-methods__item-container">
                        <div class="payment-methods__item-description text-muted">Please send a
                          check to Store Name, Store Street, Store Town, Store State / County,
                          Store Postcode.
                        </div>
                      </div>
                    </li>
                    <li class="payment-methods__item"><label
                        class="payment-methods__item-header"><span
                        class="payment-methods__item-radio input-radio"><span
                        class="input-radio__body"><input class="input-radio__input"
                                                         name="checkout_payment_method"
                                                         type="radio"> <span
                        class="input-radio__circle"></span> </span></span><span
                        class="payment-methods__item-title">Cash on delivery</span></label>
                      <div class="payment-methods__item-container">
                        <div class="payment-methods__item-description text-muted">Pay with cash
                          upon delivery.
                        </div>
                      </div>
                    </li>
                    <li class="payment-methods__item"><label
                        class="payment-methods__item-header"><span
                        class="payment-methods__item-radio input-radio"><span
                        class="input-radio__body"><input class="input-radio__input"
                                                         name="checkout_payment_method"
                                                         type="radio"> <span
                        class="input-radio__circle"></span> </span></span><span
                        class="payment-methods__item-title">PayPal</span></label>
                      <div class="payment-methods__item-container">
                        <div class="payment-methods__item-description text-muted">Pay via
                          PayPal; you can pay with your credit card if you don’t have a PayPal
                          account.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="checkout__agree form-group">
                  <div class="form-check"><span class="form-check-input input-check"><span
                      class="input-check__body"><input class="input-check__input" v-model="tnc" type="checkbox"
                                                       id="checkout-terms"> <span
                      class="input-check__box"></span> <svg class="input-check__icon" width="9px"
                                                            height="7px"><use
                      xlink:href="/resources/images/sprite.svg#check-9x7"></use></svg> </span></span><label
                      class="form-check-label" for="checkout-terms">I have read and agree to the
                    website <a target="_blank" href="terms-and-conditions.html">terms and
                      conditions</a>*</label></div>
                </div>
                <button @click="submit()" :disabled="!tnc" class="btn btn-primary btn-xl btn-block">Place Order</button>
              </div>
            </div>
          </div>
        </div>
        <div v-else>No cart to checkout.</div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/headers/BreadCrumb";
// import axios from "axios";
export default {
  name: "Checkout",
  components: { BreadCrumb },
  data() {
    return {
      shipping_address: {
        first_name: null,
        last_name: null,
        mobile: null,
        company: null,
        address_1: null,
        address_2: null,
        city: null,
        state: null,
        country: null,
        postcode: null,
      },
      countries: {
        0: {
          label: 'Select country',
          value: null
        },
        1: {
          label: 'Malaysia',
          value: 'malaysia'
        }
      },
      tnc: false,
      currency: 'myr',
      errors: {}
    }
  },
  methods: {
    submit() {
      this.errors = {};

      // axios.post('/checkout',
      //     {shipping_address: this.shipping_address, currency: this.currency})
      //     .then((res) => {
      //       if(res.data['url']) {
      //         location.href = res.data['url'];
      //       }
      //     })
      //     .catch((err) => {
      //       console.log(err.response);
      //     })

      this.$store.dispatch('Checkout/submit',
          {shipping_address: this.shipping_address, currency: this.currency})
          .then((res) => {
            if(res.data['url']) {
              location.href = res.data['url'];
            }
          })
          .catch((err) => {
            if(err.response.status === 422) {
              this.errors = err.response.data.errors;
            }
          });
    }
  }
}
</script>

<style scoped>

</style>