<template>
  <div class="site__body">
    <bread-crumb></bread-crumb>
    <div class="block">
      <div class="container">
        <div class="page-header__title"><h1>Wishlist</h1></div>
        <table class="wishlist">
          <thead class="wishlist__head">
          <tr v-if="$store.state.Wishlist.wishlists.items.length > 0" class="wishlist__row">
            <th class="wishlist__column wishlist__column--image">Image</th>
            <th class="wishlist__column wishlist__column--product">Product</th>
<!--            <th class="wishlist__column wishlist__column&#45;&#45;stock">Stock Status</th>-->
            <th class="wishlist__column wishlist__column--price">Price</th>
            <th class="wishlist__column wishlist__column--tocart"></th>
            <th class="wishlist__column wishlist__column--remove"></th>
          </tr>
          </thead>
          <tbody v-if="$store.state.Wishlist.wishlists.items.length > 0" class="wishlist__body">
          <tr v-for="item in $store.state.Wishlist.wishlists.items"
              :key="item.id"
              class="wishlist__row">
            <td class="wishlist__column wishlist__column--image"><a href="#"><img
                :src="$store.getters['Wishlist/firstImage'](item)" alt=""></a></td>
            <td class="wishlist__column wishlist__column--product">
              <a :href="`/product/${item.product.id}/${item.product.name}`" class="wishlist__product-name">{{ item.product.name }}</a>
<!--              <div class="wishlist__product-rating">-->
<!--                <div class="rating">-->
<!--                  <div class="rating__body">-->
<!--                    <svg class="rating__star rating__star&#45;&#45;active" width="13px" height="12px">-->
<!--                      <g class="rating__fill">-->
<!--                        <use xlink:href="/resources/images/sprite.svg#star-normal"></use>-->
<!--                      </g>-->
<!--                      <g class="rating__stroke">-->
<!--                        <use xlink:href="/resources/images/sprite.svg#star-normal-stroke"></use>-->
<!--                      </g>-->
<!--                    </svg>-->
<!--                    <div class="rating__star rating__star&#45;&#45;only-edge rating__star&#45;&#45;active">-->
<!--                      <div class="rating__fill">-->
<!--                        <div class="fake-svg-icon"></div>-->
<!--                      </div>-->
<!--                      <div class="rating__stroke">-->
<!--                        <div class="fake-svg-icon"></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <svg class="rating__star rating__star&#45;&#45;active" width="13px" height="12px">-->
<!--                      <g class="rating__fill">-->
<!--                        <use xlink:href="/resources/images/sprite.svg#star-normal"></use>-->
<!--                      </g>-->
<!--                      <g class="rating__stroke">-->
<!--                        <use xlink:href="/resources/images/sprite.svg#star-normal-stroke"></use>-->
<!--                      </g>-->
<!--                    </svg>-->
<!--                    <div class="rating__star rating__star&#45;&#45;only-edge rating__star&#45;&#45;active">-->
<!--                      <div class="rating__fill">-->
<!--                        <div class="fake-svg-icon"></div>-->
<!--                      </div>-->
<!--                      <div class="rating__stroke">-->
<!--                        <div class="fake-svg-icon"></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <svg class="rating__star rating__star&#45;&#45;active" width="13px" height="12px">-->
<!--                      <g class="rating__fill">-->
<!--                        <use xlink:href="/resources/images/sprite.svg#star-normal"></use>-->
<!--                      </g>-->
<!--                      <g class="rating__stroke">-->
<!--                        <use xlink:href="/resources/images/sprite.svg#star-normal-stroke"></use>-->
<!--                      </g>-->
<!--                    </svg>-->
<!--                    <div class="rating__star rating__star&#45;&#45;only-edge rating__star&#45;&#45;active">-->
<!--                      <div class="rating__fill">-->
<!--                        <div class="fake-svg-icon"></div>-->
<!--                      </div>-->
<!--                      <div class="rating__stroke">-->
<!--                        <div class="fake-svg-icon"></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <svg class="rating__star rating__star&#45;&#45;active" width="13px" height="12px">-->
<!--                      <g class="rating__fill">-->
<!--                        <use xlink:href="/resources/images/sprite.svg#star-normal"></use>-->
<!--                      </g>-->
<!--                      <g class="rating__stroke">-->
<!--                        <use xlink:href="/resources/images/sprite.svg#star-normal-stroke"></use>-->
<!--                      </g>-->
<!--                    </svg>-->
<!--                    <div class="rating__star rating__star&#45;&#45;only-edge rating__star&#45;&#45;active">-->
<!--                      <div class="rating__fill">-->
<!--                        <div class="fake-svg-icon"></div>-->
<!--                      </div>-->
<!--                      <div class="rating__stroke">-->
<!--                        <div class="fake-svg-icon"></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <svg class="rating__star" width="13px" height="12px">-->
<!--                      <g class="rating__fill">-->
<!--                        <use xlink:href="/resources/images/sprite.svg#star-normal"></use>-->
<!--                      </g>-->
<!--                      <g class="rating__stroke">-->
<!--                        <use xlink:href="/resources/images/sprite.svg#star-normal-stroke"></use>-->
<!--                      </g>-->
<!--                    </svg>-->
<!--                    <div class="rating__star rating__star&#45;&#45;only-edge">-->
<!--                      <div class="rating__fill">-->
<!--                        <div class="fake-svg-icon"></div>-->
<!--                      </div>-->
<!--                      <div class="rating__stroke">-->
<!--                        <div class="fake-svg-icon"></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="wishlist__product-rating-legend">9 Reviews</div>-->
<!--              </div>-->
            </td>
<!--            <td class="wishlist__column wishlist__column&#45;&#45;stock">-->
<!--              <div class="badge badge-success">In Stock</div>-->
<!--            </td>-->
            <td class="wishlist__column wishlist__column--price">{{ getCurrency() }}{{ currencyString(item.product.price)}}</td>
            <td class="wishlist__column wishlist__column--tocart">
              <a :href="`/product/${item.product.id}/${item.product.name}`" class="btn btn-primary btn-sm">Details</a>
            </td>
            <td class="wishlist__column wishlist__column--remove">
              <button @click="remove(item)" type="button" class="btn btn-light btn-sm btn-svg-icon">
                <svg width="12px" height="12px">
                  <use xlink:href="/resources/images/sprite.svg#cross-12"></use>
                </svg>
              </button>
            </td>
          </tr>
          </tbody>
          <tbody v-else>
            Your wishlist is empty.
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/headers/BreadCrumb";
export default {
  name: "Wishlist",
  components: { BreadCrumb },
  methods: {
    remove(item) {
      this.$store.dispatch('Wishlist/delete', {id: item.product.id})
          .then((res) => {
            if(res.result) {
              this.$store.dispatch('Wishlist/get')
                  .then((res) => this.$store.commit('Wishlist/SET_WISHLISTS', res))
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