<template>
  <div class="Login">
     <div class="row">
        <div class="col-md-6 col-md-push-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <strong>Change Password</strong>
                </div>
                <div class="panel-body">
                    <form @submit.prevent="forget">
                        <div class="form-group">
                            <label>Email:</label>
                            <input class="form-control" name="email" placeholder="Enter your email address" type="text" v-model="email">
                        </div>
                        <button type="submit" @click="forget()" class="btn btn-primary">Forget Password</button>
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
  name: 'Change_Password',
  data () {
    return {
      email: '',
    }
  },

  methods: {
    forget: function(){        
      axios.post('http://127.0.0.1:8000/api/forget-password',
          this.email
        )
      .then( () => {
        alert("Code đã gửi đến mail của bạn. Vui lòng check mail nhé!");
        window.location.reload();

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