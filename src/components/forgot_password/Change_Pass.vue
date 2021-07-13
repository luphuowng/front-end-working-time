<template>
  <div class="Login">
     <div class="row">
        <div class="col-md-6 col-md-push-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <strong>Change Password</strong>
                </div>
                <div class="panel-body">
                    <form @submit.prevent="Change_Pass">
                        <div class="form-group">
                            <label>New password:</label>
                            <input class="form-control" name="password" placeholder="Enter your new password" type="password" v-model="password">
                        </div>
                        <div class="form-group">
                            <label>New password confirm:</label>
                            <input class="form-control" name="password_confirm" placeholder="Enter your new password confirm" type="password">
                        </div>
                        <button type="submit" @click="Change_Pass()" class="btn btn-primary">Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Change_Pass',
  data () {
    return {
      password: ''
    }
  },

  methods: {
    Change_Pass: function(){
        axios.post('http://127.0.0.1:8000/api/change-password')
      .then( (res) => {
          if(res.status == 201){
            alert("Change password successfully!");
            this.$router.push({ name: 'Login' }) 
          } else {
            alert("Two passwords are not the same!");
          }     
        })
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