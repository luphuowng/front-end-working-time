<template>
<div class="body">
    <h1>Check-out Form</h1>
    <div class= "form">
      <form action="" method="" @submit.prevent="updatecheckform()">
        <input v-model="workingtime.id_user" id="id_user" class="form-control" type="text" name="id_user" readonly style="display: none">
        <div class="form-group">
          <label> id Check_in:</label>
          <input v-model="workingtime.id" id="id" class="form-control" type="text" name="id" readonly> 
        </div>

        <input  v-model="workingtime.check_in" id="check_in" class="form-control" type="datetime" name="check_in" required style="display: none"> 
        
        <div class="form-group">
          <label for="work">Your Project Today:</label>
          <b-form-input v-model="workingtime.work" id="work" class="picker"  name = "work" placeholder="Enter your work" readonly></b-form-input>
        </div>
           
        <div class="form-group">
          <label for="check_out" >Date-Time:</label>
          <input  v-model="workingtime.check_out" id="check_out" class="form-control" type="datetime-local" name="check_out" required> 
        </div>

        <div class="form-group">
          <label for="note">Note:</label>
          <textarea class="picker" v-model="workingtime.note" name="note" id="note" placeholder="Add your note"></textarea>
        </div>
       

        <button type ="submit" class="btn">Check Out Your Time</button>

      </form>
    </div> 
</div>
</template>

<script>

const axios = require('axios');

export default (  {
  name: "CheckOut",
  data(){
    return{
      id_url:'',
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
    this.id_url = this.$route.params.id;
    this.checklogin(this.id_url);
  },
  

  methods: {
    checklogin: function(id){
      axios.get('http://127.0.0.1:8000/api/editWorkingtime/'+id, {
      })
      .then( response => {
        this.workingtime = response.data[0];       
        this.workingtime.check_in = response.data[0].check_in.slice(0, 10);   
      })
      .catch( errors => {
        console.log(errors);
      })
    },  

    updatecheckform: function(){        
      axios.post('http://127.0.0.1:8000/api/updateWorkingtime/'+this.id_url, this.workingtime)
      
      .then( () => {
        alert("Đã Check_in thành công!");
        window.location.reload();
      })

      .catch( () => {
        console.log("lỗi rồi!");
        alert("Đã Check_out thành công!");
        window.location.reload();
      });
    },
    click_reset: function(){
       window.location.reload();
    },
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

  .form{
    width: 50%;
    border-radius: 0px 0px 8px 8px;
    background-color: #f2f2f2;
    padding :20px;
    float: left ;
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