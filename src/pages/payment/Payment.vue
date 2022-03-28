<template>
  <div>This page will redirect in {{counter}}. Please do not do any action on this page.</div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      counter: 5
    }
  },
  mounted() {
    this.countDown();
  },
  methods: {
    countDown() {
      if(this.counter > 0) {
        setTimeout(()=>{
          this.counter--;
          this.countDown();
        },1000)
      } else {
        location.href = '/order';
      }
    }
  }
}
</script>

<style scoped>

</style>