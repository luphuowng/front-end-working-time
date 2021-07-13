<template>
  <div class="Login">
     <div class="row">
        <div class="col-md-6 col-md-push-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <strong>Forgot Password</strong>
                </div>
                <div class="panel-body">
                    <form @submit.prevent="forgot()">
                        <div class="form-group">
                            <label>Email:</label>
                            <input class="form-control" v-model="password_resets.email" name="email" placeholder="Enter your email address" type="text" >
                        </div>
                        <button type="submit" @click="forgot()" class="btn btn-primary">Forget Password</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
//import Code from '@/components/forgot_password/Code.vue';
export default {
  name: 'Forgot_Password',
  data () {
    return {
      datapasswordreset:[],
      password_resets:{
        email: '',
      }
    }
  },

  methods: {
    forgot: function(){        
      axios.post('http://127.0.0.1:8000/api/forget-password', this.password_resets)
      .then( () => {
        alert("Code đã gửi đến mail của bạn. Vui lòng check mail nhé!");
        this.$router.push({ name: 'Code' }) 
      })
      .catch( () => {
        console.log("lỗi rồi!");
      });
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