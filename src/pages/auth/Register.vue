<template>
  <div class="login-container">
      <div class="login-container-wrapper">
        <img src="resources/images/lgc_logo_white_slogan.png" alt="">
        <h2>Register Account</h2>
        <div class="login-form-group">
          <label class="title">Email</label>
          <input required v-model="email" type="email" placeholder="Name" class="form-input"/>
        </div>
        <div class="login-form-group">
          <label class="title">Password</label>
          <input required v-model="password" type="password" placeholder="Password" class="form-input"/>
        </div>
        <div class="divider"></div>
        <div class="btn btn-default" @click="register">Register</div>
      </div>
      <loader v-if="$store.state.Loading.loading"></loader>
  </div>
</template>

<script>
import storage from '../../commons/constant/storage';
import Loader from "@/components/Loader";

export default {
  name: "Register",
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
.login-container  {
  display: flex;
  width: 100%;
  height: 100;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%),url('/resources/images/login_background.jpg');
  background-size: cover;
  color: #fff;
}

.login-container-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 275px;
}

.login-container-wrapper img {
  max-width: 100%;
}

.login-container-wrapper h2 {
  font-size: 1.5rem;
  margin-top: 0.75em;
  margin-bottom: 0.5em;
  color: #ffd333;
}

.login-container-wrapper .login-form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

.login-container-wrapper .login-form-group .form-input {
  padding: 5px 15px;
  border-radius: 8px;
  border: 1px solid #ffd333;
  background-color: #000;
  color: #fff;
  outline: none;
  box-shadow: 2px 2px 3px rgba(100,83,20,1);
  font-size: 14px;
}

.divider {
  display: flex;
  width: 100%;
  height: 1px;
  background-color: #ffd333;
  margin-top: 0.25em;
  margin-bottom: 1.5em;
}

.btn.btn-default {
  background-color: #ffd333;
  color: #000;
  width: 100%;
  border: 1px solid #ffd333;
  border-radius: 8px;
}

.btn.btn-default:hover,
.btn.btn-default:focus {
  background-color: #000;
  color: #ffd333;
  border: 1px solid #ffd333;
}

@media only screen and (max-width: 768px) {
  .login-container {
    background-position: center center;
  }
}
</style>