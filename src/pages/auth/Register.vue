<template>
  <div class="login-container">
      <div class="login-container-wrapper">
        <img src="resources/images/lgc_logo_white_slogan.png" alt="">
        <h2>Register Account</h2>
        <div class="login-form-group">
          <label class="title">Email</label>
          <input required v-model="email" type="email" placeholder="Email" class="form-input"/>
          <span v-if="errors['email']" class="text-danger">{{ errors['email'][0] }}</span>
        </div>
        <div class="login-form-group">
          <label class="title">Password</label>
          <input required v-model="password" type="password" placeholder="Password" class="form-input"/>
          <span v-if="errors['password']" class="text-danger">{{ errors['password'][0] }}</span>
        </div>
        <div class="login-form-group">
          <label class="title">Password Confirmation</label>
          <input required v-model="password_confirmation" type="password" placeholder="Password Confirmation" class="form-input"/>
          <span v-if="errors['password_confirmation']" class="text-danger">{{ errors['password_confirmation'][0] }}</span>
        </div>
        <div class="login-form-group">
          <label class="title">Name</label>
          <input required v-model="profile.first_name" type="input" placeholder="Name" class="form-input"/>
          <span v-if="errors['profile.first_name']" class="text-danger">{{ errors['profile.first_name'][0] }}</span>
        </div>
        <div class="login-form-group">
          <label class="title">Mobile</label>
          <input required v-model="profile.mobile" type="input" placeholder="Mobile" class="form-input"/>
          <span v-if="errors['profile.mobile']" class="text-danger">{{ errors['profile.mobile'][0] }}</span>
        </div>
        <div class="divider"></div>
        <div class="btn btn-default" @click="register">Register</div>
      </div>
      <loader v-if="$store.state.Loading.loading"></loader>
  </div>
</template>

<script>
import Loader from "@/components/Loader";

export default {
  name: "Register",
  components: {Loader},
  data(){
    return {
      email : "",
      password : "",
      password_confirmation : "",
      profile: {
        first_name: "",
        mobile: ""
      },
      errors: {}
    }
  },
  methods: {
    register() {
      this.errors = {};

      let email = this.email;
      let password = this.password;
      let password_confirmation = this.password_confirmation;
      let profile = this.profile;

      this.$store.dispatch('Register/register', { email, password, password_confirmation, profile })
        .then(() => {
          this.$store.commit('Register/SET_EMAIL', email);

          location.href = '/login';
        })
        .catch((err) => {
          if(err.response.status === 422) {
            this.errors = err.response.data.errors;
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