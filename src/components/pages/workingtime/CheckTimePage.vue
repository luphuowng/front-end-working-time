<template>
  <div class="body">
    <h1>Check-In Form</h1>
    <div class= "form-check-in">
      <form action="" method="" @submit.prevent="submitcheckform()">
        <input v-model="workingtime.id_user" id="id_user" class="form-control" type="text" name="id_user" readonly style="display: none">
        <div class="form-group">
          <label for="username">Name:</label>
          <input v-model="workingtime.name" id="username" class="form-control" type="text" name="username" readonly> 
        </div>

        <div class="form-group">
          <label for="work">Enter Your Project Today:</label>
          <b-form-input v-model="workingtime.work" id="work" class="picker"  name = "work" placeholder="Enter your work"></b-form-input>  
        </div>

        <div class="form-group">
          <label for="check_in" >Date-Time:</label>
          <input  v-model="workingtime.check_in" id="check_in" class="form-control" type="datetime-local" name="check_in" required> 
        </div>

        <div class="form-group">
          <label for="note">Note:</label>
          <textarea class="picker" v-model="workingtime.note" name="note" id="note" placeholder="Add your note"></textarea>
        </div>

        <button type ="submit" class="btn">Check In Your Time</button>
        <button @click="click_reset()" class="btn">Reset</button>
      </form>
    </div>
  </div>  
</template>

<script>

const axios = require('axios');

export default (  {
  name: "CheckTimePage",
  data(){
    return{
      dataworkingtime:[],
      workingtime:{
      check_in:'',
      check_out:'',
      work:'',
      note:'',
      id_user:'',  
      },
      errors:{}
    }
  },

  mounted(){
    this.checklogin();
  },
  
  methods: {
    checklogin: function(){
      var a1 = JSON.parse(localStorage.getItem('user'));
      this.workingtime.id_user = a1.user.id;
      this.workingtime.name = a1.user.name;    
    },
    click_reset: function(){
          window.location.reload();
    },

    submitcheckform: function(){        
      axios.post('http://127.0.0.1:8000/api/storeWorkingtime', this.workingtime)
      
      .then( () => {
        alert("Đã Check_in thành công!");
        window.location.reload();
      })

      .catch( () => {
        console.log("lỗi rồi!");
      });
    }
  }
})
</script>

<style scoped>
  .body{
    padding: 10px;
    float: left;
    width: 100%;
  }

  h1 {
    background-clip: border-box;
    background: green;
    border-radius: 8px 8px 0px 0px;
    color: white;
    text-align: left;
    font-family: Tahoma, Verdana, sans-serif;
    font-size: 30px;
    padding: 5px;
    width: 50%;
  }
    h2 {
    background-clip: border-box;
    background: green;
    border-radius: 8px 8px 0px 0px;
    color: white;
    text-align: right;
    font-family: Tahoma, Verdana, sans-serif;
    font-size: 17px;
    padding: 5px;
    width: 35%;
    float: right ;
    overflow: auto;
  }

  .picker  {
    width: 100%;
    padding: 12px 20px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .form-check-in {
    width: 50%;
    border-radius: 0px 0px 8px 8px;
    background-color: #f2f2f2;
    padding :20px;
    float: left ;
    overflow: auto;
    
  }
  .form-check-out {
    width: 35%;
    border-radius: 0px 0px 8px 8px;
    background-color: #f2f2f2;
    padding :20px;
    float: right ;
    overflow: auto;
  }

  .btn {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    margin-bottom: 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #3e8e41;
  }
</style>
