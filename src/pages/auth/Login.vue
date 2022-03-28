<template>
  <div>
      <h1>Sign in</h1>
      <label>Email</label>
      <input required v-model="email" type="email" placeholder="Name"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      <hr/>
      <div class="btn" @click="login">Login</div>
    <loader v-if="$store.state.Loading.loading"></loader>
  </div>
</template>

<script>
import storage from '../../commons/constant/storage';
import Loader from "@/components/Loader";

export default {
  name: "Login",
  components: {Loader},
  data(){
    return {
      email : "",
      password : "",
    }
  },
  methods: {
    login() {
      let email = this.email;
      let password = this.password;

      this.$store.dispatch('Auth/login', { email, password })
        .then((res) => {
          this.$store.commit('Auth/SET_AUTH', res);

          localStorage.setItem(storage.token, res.token);

          location.href = '/';
        })
        .catch(() => {
          this.$store.commit('Auth/SET_AUTH', null)

          let token = localStorage.getItem(storage.token);
          if(token) {
            localStorage.removeItem(storage.token);
          }
        })
        .finally(() => this.$store.commit('Loading/SET_LOADING', false, { root: true }));
    }
  }
}
</script>

<style scoped>

</style>