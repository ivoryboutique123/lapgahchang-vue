<template>
  <div class="page-header">
    <div class="page-header__container container">
      <div class="page-header__breadcrumb">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li v-for="(crumb, index) in breadCrumbs" :key="crumb.text" class="breadcrumb-item text-capitalize"><a :href="crumb.to">{{crumb.text}}</a>
              <svg v-if="index !== breadCrumbs.length - 1" class="breadcrumb-arrow" width="6px" height="9px">
                <use xlink:href="/resources/images/sprite.svg#arrow-rounded-right-6x9"></use>
              </svg>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  computed: {
    breadCrumbs() {
      if (typeof this.$route.meta.breadCrumb === "function") {
        return this.$route.meta.breadCrumb.call(this, this.$route);
      }
      return this.$route.meta.breadCrumb;
    },
  },
}
</script>

<style scoped>

</style>