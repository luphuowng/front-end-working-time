<template>
  <div class="Login">
    <h3>{{ msg }}</h3>
     <div class="row">
        <div class="col-md-6 col-md-push-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <strong>Log in</strong>
                </div>
                <div class="panel-body">
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label>Email:</label>
                            <input class="form-control" name="email" placeholder="Enter your email address" type="text" v-model="email">
                        </div>
                        <div class="form-group">
                            <label>Password:</label>
                            <input class="form-control" name="password" placeholder="Enter your email password" type="password" v-model="password">
                        </div>
                        <a href="http://localhost:8080/Forgot_Password" style="margin-top:10px;font-size:13px; text-decoration:none">Forgot password?</a>
                        <button type="submit" @click="login()" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          console.log('is running...')
          this.$router.push({ name: 'admin' }) 
        })
        .catch(err => {
          console.log(err)
        })
    },
    created () {
      const userInfo = localStorage.getItem('user')
      if (userInfo) {
        const userData = JSON.parse(userInfo)
        this.$store.commit('setUserData', userData)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Login{
  margin: 210px 0px 0px 360px;
  padding-top:20px;
  width:800px;
  height:auto;
  background-color: Azure;
}
h3 {
  color: gray;
  text-align: center;
}
.panel-heading{
  font-size:16px;
  font-style: italic;
}
.row{
  margin-left: 160px;
}
form{
  margin-bottom:20px;
  margin-top:20px;
}
.panel-body input{
  width:350px;
  margin-left:75px;
}
.form-group{
  margin: 5px 0px 10px 0px;
}
.panel-body button{
  margin-left:200px;
  margin-top:10px;
}

</style>
