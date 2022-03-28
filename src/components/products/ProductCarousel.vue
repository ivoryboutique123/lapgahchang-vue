<template>
  <div class="block block-products-carousel" data-layout="grid-4">
      <div class="container">
        <div class="block-header">
          <h3 class="block-header__title">{{ name }}</h3>
          <div class="block-header__divider"></div>
          <ul v-if="hasOptions" class="block-header__groups-list">
            <li>
              <button
                  type="button"
                  class="block-header__group block-header__group--active"
              >
                All
              </button>
            </li>
            <li>
              <button type="button" class="block-header__group">
                Power Tools
              </button>
            </li>
            <li>
              <button type="button" class="block-header__group">
                Hand Tools
              </button>
            </li>
            <li>
              <button type="button" class="block-header__group">
                Plumbing
              </button>
            </li>
          </ul>
          <div class="block-header__arrows-list">
            <button
                class="block-header__arrow block-header__arrow--left"
                type="button"
                @click="prev()"
            >
              <svg width="7px" height="11px">
                <use
                    xlink:href="/resources/images/sprite.svg#arrow-rounded-left-7x11"
                ></use>
              </svg>
            </button>
            <button
                class="block-header__arrow block-header__arrow--right"
                type="button"
                @click="next()"
            >
              <svg width="7px" height="11px">
                <use
                    xlink:href="/resources/images/sprite.svg#arrow-rounded-right-7x11"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <slick
            ref="slick"
            :options="slickOptions"
        >
            <div v-for="product in $store.state.Product.products" :key="product.id" class="block-products-carousel__cell">
              <div class="product-card">
<!--                <button class="product-card__quickview" type="button">-->
<!--                  <svg width="16px" height="16px">-->
<!--                    <use-->
<!--                        xlink:href="/resources/images/sprite.svg#quickview-16"-->
<!--                    ></use>-->
<!--                  </svg>-->
<!--                  <span class="fake-svg-icon"></span>-->
<!--                </button>-->
                <div class="product-card__badges-list">
                  <div
                      class="product-card__badge product-card__badge--new"
                  >
                    New
                  </div>
                </div>
                <div class="product-card__image">
                  <a @click="setProduct(product)"
                  ><img :src="product.images[0].url" alt=""
                  /></a>
                </div>
                <div class="product-card__info">
                  <div class="product-card__name">
                    <a @click="setProduct(product)"
                    >{{ product.name }}</a
                    >
                  </div>
                  <div class="product-card__rating">
                    <div class="rating">
                      <div class="rating__body">
                        <svg
                            class="rating__star rating__star--active"
                            width="13px"
                            height="12px"
                        >
                          <g class="rating__fill">
                            <use
                                xlink:href="/resources/images/sprite.svg#star-normal"
                            ></use>
                          </g>
                          <g class="rating__stroke">
                            <use
                                xlink:href="/resources/images/sprite.svg#star-normal-stroke"
                            ></use>
                          </g>
                        </svg>
                        <div
                            class="
                                  rating__star
                                  rating__star--only-edge
                                  rating__star--active
                                "
                        >
                          <div class="rating__fill">
                            <div class="fake-svg-icon"></div>
                          </div>
                          <div class="rating__stroke">
                            <div class="fake-svg-icon"></div>
                          </div>
                        </div>
                        <svg
                            class="rating__star rating__star--active"
                            width="13px"
                            height="12px"
                        >
                          <g class="rating__fill">
                            <use
                                xlink:href="/resources/images/sprite.svg#star-normal"
                            ></use>
                          </g>
                          <g class="rating__stroke">
                            <use
                                xlink:href="/resources/images/sprite.svg#star-normal-stroke"
                            ></use>
                          </g>
                        </svg>
                        <div
                            class="
                                  rating__star
                                  rating__star--only-edge
                                  rating__star--active
                                "
                        >
                          <div class="rating__fill">
                            <div class="fake-svg-icon"></div>
                          </div>
                          <div class="rating__stroke">
                            <div class="fake-svg-icon"></div>
                          </div>
                        </div>
                        <svg
                            class="rating__star rating__star--active"
                            width="13px"
                            height="12px"
                        >
                          <g class="rating__fill">
                            <use
                                xlink:href="/resources/images/sprite.svg#star-normal"
                            ></use>
                          </g>
                          <g class="rating__stroke">
                            <use
                                xlink:href="/resources/images/sprite.svg#star-normal-stroke"
                            ></use>
                          </g>
                        </svg>
                        <div
                            class="
                                  rating__star
                                  rating__star--only-edge
                                  rating__star--active
                                "
                        >
                          <div class="rating__fill">
                            <div class="fake-svg-icon"></div>
                          </div>
                          <div class="rating__stroke">
                            <div class="fake-svg-icon"></div>
                          </div>
                        </div>
                        <svg
                            class="rating__star rating__star--active"
                            width="13px"
                            height="12px"
                        >
                          <g class="rating__fill">
                            <use
                                xlink:href="/resources/images/sprite.svg#star-normal"
                            ></use>
                          </g>
                          <g class="rating__stroke">
                            <use
                                xlink:href="/resources/images/sprite.svg#star-normal-stroke"
                            ></use>
                          </g>
                        </svg>
                        <div
                            class="
                                  rating__star
                                  rating__star--only-edge
                                  rating__star--active
                                "
                        >
                          <div class="rating__fill">
                            <div class="fake-svg-icon"></div>
                          </div>
                          <div class="rating__stroke">
                            <div class="fake-svg-icon"></div>
                          </div>
                        </div>
                        <svg
                            class="rating__star"
                            width="13px"
                            height="12px"
                        >
                          <g class="rating__fill">
                            <use
                                xlink:href="/resources/images/sprite.svg#star-normal"
                            ></use>
                          </g>
                          <g class="rating__stroke">
                            <use
                                xlink:href="/resources/images/sprite.svg#star-normal-stroke"
                            ></use>
                          </g>
                        </svg>
                        <div class="rating__star rating__star--only-edge">
                          <div class="rating__fill">
                            <div class="fake-svg-icon"></div>
                          </div>
                          <div class="rating__stroke">
                            <div class="fake-svg-icon"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="product-card__rating-legend">
                      9 Reviews
                    </div>
                  </div>
                  <ul class="product-card__features-list">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                  </ul>
                </div>
                <div class="product-card__actions">
                  <div class="product-card__availability">
                    Availability:
                    <span class="text-success">In Stock</span>
                  </div>
                  <div class="product-card__prices">{{getCurrency()}}{{currencyString(product.price)}}</div>
                  <div class="product-card__buttons">
                    <button
                        @click="addWishlist(product)"
                        class="
                              btn btn-light btn-svg-icon btn-svg-icon--fake-svg
                              product-card__wishlist
                            "
                        type="button"
                    >
                      <svg width="16px" height="16px">
                        <use
                            xlink:href="/resources/images/sprite.svg#wishlist-16"
                        ></use>
                      </svg>
                      <span
                          class="fake-svg-icon fake-svg-icon--wishlist-16"
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </slick>
      </div>
    <loader v-if="$store.state.Loading.loading"></loader>
  </div>
</template>

<script>
import 'slick-carousel/slick/slick.css';
import Slick from 'vue-slick';
import Loader from "@/components/Loader";

export default {
  name: "ProductCarousel",
  props: ['name', 'hasOptions'],
  components: { Slick, Loader },
  data() {
    return {
      slickOptions: {
        slidesToShow: 4,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
    }
  },
  mounted() {
    if (this.$refs.slick) {
      this.$refs.slick.destroy();
    }
    this.$store.dispatch('Product/get')
        .then((res) => {
          this.$store.commit('Product/SET_PRODUCTS', res.data);
          this.$nextTick(function () {
            if (this.$refs.slick) {
              this.$refs.slick.create(this.slickOptions);
            }
          });
        }).finally(() => this.$store.commit('Loading/SET_LOADING', false));
  },
  methods: {
    addWishlist(product) {
      this.$store.dispatch('Wishlist/add', {id: product.id})
          .then(
              () => this.$store.dispatch('Wishlist/get')
              .then((res) => this.$store.commit('Wishlist/SET_WISHLISTS', res))
              .catch(err => console.log(err))
          )
          .catch(err => console.log(err))
    },
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    setProduct(product) {
      this.$store.commit('Product/SET_PRODUCT', product);
      this.redirect(product);
    },

    redirect(product) {
      location.href = `/product/${product.id}/${product.name}`;
    },

    addToCart(product) {
      this.$store.dispatch('Cart/add', {product_id: product.id, quantity: 1})
          .then(res => console.log(res))
          .catch(err => console.log(err));
    }
  },
}
</script>

<style>
.slick-slide {
  padding: 0px 15px 60px 15px;
  box-sizing: border-box;
}
</style>