<template>
  <div class="site__body">
    <bread-crumb></bread-crumb>
    <div class="container">
      <div class="shop-layout shop-layout--sidebar--start">
        <div class="shop-layout__sidebar">
          <div class="block block-sidebar">
            <div class="block-sidebar__item">
              <div class="widget-filters widget" data-collapse
                   data-collapse-opened-class="filter--opened"><h4 class="widget__title">Filters</h4>
                <div class="widget-filters__list">
                  <div class="widget-filters__item">
                    <div class="filter filter--opened" data-collapse-item>
                      <button type="button" class="filter__title" data-collapse-trigger>Category
                        <svg class="filter__arrow" width="12px" height="7px">
                          <use xlink:href="/resources/images/sprite.svg#arrow-rounded-down-12x7"></use>
                        </svg>
                      </button>
                      <div class="filter__body" data-collapse-content>
                        <div class="filter__container">
                          <div class="filter-list">
                            <div class="filter-list__list">
                              <label v-for="category in categories" :key="category.id" class="filter-list__item">
                                <span class="filter-list__input input-check">
                                  <span class="input-check__body">
                                    <input class="input-check__input" type="checkbox" v-model="category.checked">
                                    <span class="input-check__box"></span>
                                    <svg class="input-check__icon" width="9px" height="7px">
                                      <use xlink:href="/resource/images/sprite.svg#check-9x7"></use>
                                    </svg>
                                  </span>
                                </span>
                                <span class="filter-list__title">{{ category.name }} </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="widget-filters__item">
                    <div class="filter filter--opened" data-collapse-item>
                      <button type="button" class="filter__title" data-collapse-trigger>Price
                        <svg class="filter__arrow" width="12px" height="7px">
                          <use xlink:href="/resources/images/sprite.svg#arrow-rounded-down-12x7"></use>
                        </svg>
                      </button>
                      <div class="filter__body" data-collapse-content>
                        <div class="filter__container">
                          <vue-slider class="filter-price" v-model="price" v-bind="options"/>
                            <div class="filter-price__title">Price: {{getCurrency()}}{{price[0]}}<span
                                class="filter-price__min-value"></span> – {{ getCurrency() }}{{price[1]}}<span
                                class="filter-price__max-value"></span>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="widget-filters__actions d-flex">
                  <button @click="get()" class="btn btn-primary btn-sm">Filter</button>
                  <button @click="resetFilter()" class="btn btn-secondary btn-sm ml-2">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="shop-layout__content">
          <div class="block">
            <div class="products-view">
              <div class="products-view__options">
                <div class="view-options">
                  <div v-if="$store.state.Product.products" class="view-options__legend">Total result: {{ $store.state.Product.products.meta.total }}</div>
                  <div class="view-options__divider"></div>
                  <div class="view-options__control"><label for="">Sort By</label>
                    <div>
                      <select v-model="sortValue" @change="get()" class="form-control form-control-sm" name="" id="">
                        <option v-for="(option, key) in sortOptions" :key="key" :value="option">{{ key }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="products-view__list products-list" data-layout="grid-3-sidebar"
                   data-with-features="false">
                <div v-if="$store.state.Product.products" class="products-list__body">
                  <div v-for="product in $store.state.Product.products.data" :key="product.id" class="products-list__item">
                    <div class="product-card">
<!--                      <button class="product-card__quickview" type="button">-->
<!--                        <svg width="16px" height="16px">-->
<!--                          <use xlink:href="/resources/images/sprite.svg#quickview-16"></use>-->
<!--                        </svg>-->
<!--                        <span class="fake-svg-icon"></span></button>-->
                      <div class="product-card__badges-list">
                        <div class="product-card__badge product-card__badge--new">New</div>
                      </div>
                      <div class="product-card__image"><a :href="`/product/${product.id}/${product.name}`"><img
                          :src="product.images[0].url" alt=""></a></div>
                      <div class="product-card__info">
                        <div class="product-card__name"><a :href="`/product/${product.id}/${product.name}`">{{
                            product.name
                          }}</a></div>
                        <div class="product-card__rating">
                          <div class="rating">
                            <div class="rating__body">
                              <svg class="rating__star rating__star--active" width="13px"
                                   height="12px">
                                <g class="rating__fill">
                                  <use xlink:href="/resources/images/sprite.svg#star-normal"></use>
                                </g>
                                <g class="rating__stroke">
                                  <use xlink:href="/resources/images/sprite.svg#star-normal-stroke"></use>
                                </g>
                              </svg>
                              <div class="rating__star rating__star--only-edge rating__star--active">
                                <div class="rating__fill">
                                  <div class="fake-svg-icon"></div>
                                </div>
                                <div class="rating__stroke">
                                  <div class="fake-svg-icon"></div>
                                </div>
                              </div>
                              <svg class="rating__star rating__star--active" width="13px"
                                   height="12px">
                                <g class="rating__fill">
                                  <use xlink:href="/resources/images/sprite.svg#star-normal"></use>
                                </g>
                                <g class="rating__stroke">
                                  <use xlink:href="/resources/images/sprite.svg#star-normal-stroke"></use>
                                </g>
                              </svg>
                              <div class="rating__star rating__star--only-edge rating__star--active">
                                <div class="rating__fill">
                                  <div class="fake-svg-icon"></div>
                                </div>
                                <div class="rating__stroke">
                                  <div class="fake-svg-icon"></div>
                                </div>
                              </div>
                              <svg class="rating__star rating__star--active" width="13px"
                                   height="12px">
                                <g class="rating__fill">
                                  <use xlink:href="/resources/images/sprite.svg#star-normal"></use>
                                </g>
                                <g class="rating__stroke">
                                  <use xlink:href="/resources/images/sprite.svg#star-normal-stroke"></use>
                                </g>
                              </svg>
                              <div class="rating__star rating__star--only-edge rating__star--active">
                                <div class="rating__fill">
                                  <div class="fake-svg-icon"></div>
                                </div>
                                <div class="rating__stroke">
                                  <div class="fake-svg-icon"></div>
                                </div>
                              </div>
                              <svg class="rating__star rating__star--active" width="13px"
                                   height="12px">
                                <g class="rating__fill">
                                  <use xlink:href="/resources/images/sprite.svg#star-normal"></use>
                                </g>
                                <g class="rating__stroke">
                                  <use xlink:href="/resources/images/sprite.svg#star-normal-stroke"></use>
                                </g>
                              </svg>
                              <div class="rating__star rating__star--only-edge rating__star--active">
                                <div class="rating__fill">
                                  <div class="fake-svg-icon"></div>
                                </div>
                                <div class="rating__stroke">
                                  <div class="fake-svg-icon"></div>
                                </div>
                              </div>
                              <svg class="rating__star" width="13px" height="12px">
                                <g class="rating__fill">
                                  <use xlink:href="/resources/images/sprite.svg#star-normal"></use>
                                </g>
                                <g class="rating__stroke">
                                  <use xlink:href="/resources/images/sprite.svg#star-normal-stroke"></use>
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
                          <div class="product-card__rating-legend">9 Reviews</div>
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
                        <div class="product-card__availability">Availability: <span
                            class="text-success">In Stock</span></div>
                        <div class="product-card__prices">{{ getCurrency() }}{{currencyString(product.price)}}</div>
                        <div class="product-card__buttons">
                          <button class="btn btn-primary product-card__addtocart"
                                  type="button">Add To Cart
                          </button>
                          <button class="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                  type="button">Add To Cart
                          </button>
                          <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                  type="button">
                            <svg width="16px" height="16px">
                              <use xlink:href="/resources/images/sprite.svg#wishlist-16"></use>
                            </svg>
                            <span class="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="products-view__pagination">
                <pagination
                    v-model="page"
                    :records="$store.state.Product.products ? $store.state.Product.products.meta.total : 0"
                    :per-page="$store.state.Product.products ? $store.state.Product.products.meta.per_page : 25"
                    @paginate="setPage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <loader v-if="$store.state.Loading.loading"></loader>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import BreadCrumb from "@/components/headers/BreadCrumb";
import Pagination from 'vue-pagination-2';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
export default {
  name: "List",
  components: {BreadCrumb, Pagination, VueSlider, Loader},
  data() {
    return {
      page: 1,
      price: [0, 5000],
      filters: {
        price: null,
        categories: null
      },
      search: null,
      categories: null,
      sortOptions: {
        'Default': {
          'sort_by': 'created_at',
          'sort_desc': true,
        },
        'Name (A-Z)': {
          'sort_by': 'name',
          'sort_desc': false,
        },
        'Name (Z-A)': {
          'sort_by': 'name',
          'sort_desc': true,
        },
        'Lowest Price': {
          'sort_by': 'price',
          'sort_desc': false,
        },
        'Highest Price': {
          'sort_by': 'price',
          'sort_desc': true,
        },
      },
      sortValue: {
        'sort_by': 'created_at',
        'sort_desc': true,
      },
      options: {
        dotSize: 14,
        width: 'auto',
        height: 4,
        min: 0,
        max: 5000,
        tooltip: 'none',
      }
    }
  },
  mounted() {
    this.search = this.$route.params.search ?? null;
    this.get();
    this.getCategories();
  },
  methods: {
    get() {
      let categories = [];

      if(this.$store.state.Category.categories) {
        categories = this.$store.state.Category.categories.filter((category) => {
            return category.checked === true ?? category.id;
          }).map((category) => {
            return category.id
          });
      }

      let filterObj = {
        price: this.price,
      }

      if(categories.length > 0) {
        filterObj['categories'] = categories;
      }

      let payload = {
        page: this.page,
        filter: JSON.stringify(filterObj),
        sort_by: this.sortValue.sort_by,
        sort_desc: this.sortValue.sort_desc
      }

      if(this.search) {
        payload['search'] = this.search;
      }

      this.$store.dispatch('Product/get', payload)
          .then(res => this.$store.commit('Product/SET_PRODUCTS', res))
          .catch(() => this.$store.commit('Product/SET_PRODUCTS', null))
          .finally(() => this.$store.commit('Loading/SET_LOADING', false));
    },
    getCategories() {
      this.$store.dispatch('Category/get')
          .then((res) => {
            this.$store.commit('Category/SET_CATEGORIES', res)
            this.categories = this.$store.state.Category.categories;
          })
          .catch(() => this.$store.commit('Category/SET_CATEGORIES', null));
    },
    resetFilter() {
      this.price = [0, 5000];
      this.categories.forEach((category) => {
        category.checked = false;
      });
      this.get();
    },
    setPage(page) {
      this.page = page;
      this.get();
    }
  }
}
</script>

<style>
.view-options__legend {
  margin-left: 0px;
}
.products-view__pagination .pagination {
  justify-content: center;
}
.products-view__pagination .VuePagination__count {
  display: none;
}
.vue-slider-process {
  background-color: #ffd333 !important;
}
.vue-slider-dot-handle {
  background-color: #ffd333;
  border: 2px solid #3d464c;
}
.vue-slider:hover .vue-slider-dot-handle{
  border-color: #d9ac0b !important;
}
.vue-slider-dot-handle:hover {
  border-color: #d9ac0b !important;
}
</style>