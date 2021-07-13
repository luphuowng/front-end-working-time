<template>
  <div class="container">
     <div class="row">
       <div class="col-6 formOT">
        <h1>Sửa Form Đăng Ký</h1>
        <form action="" method="" @submit.prevent="editOT()">
            <div class="mess">
                Điền đầy đủ thông tin bên dưới!
            </div>
            <hr style="color: green;">

            <input v-model="overtime.id_user" id="id_user" class="form-control" type="text" name="id_user" style="display:none" readonly > 
            <!--  -->
            <div class="form-group">
                <label for="username">Tên Nhân Viên</label>
                <input v-model="overtime.name" id="username" class="form-control" type="text" name="username" readonly> 
            </div>

            <div class="form-group">
                <label for="sdt">SĐT Nhân Viên</label>
                <input  v-model="overtime.phone_number" id="sdt" class="form-control" type="text" name="sdt" readonly>
            </div>

            <div class="form-group">
                <label for="email">Email Nhân Viên</label>
                <input  v-model="overtime.email" id="email" class="form-control" type="text" name="email" readonly>
            </div>

            <div class="form-group">
                <label for="ngay">Ngày đăng ký</label>
                <input  v-model="overtime.ngayDK" id="ngayDK" class="form-control" type="date" name="ngayDK">
            </div>

            <div class="form-group">
                <label for="soh">Số giờ đăng ký</label>
                <input  v-model="overtime.number" id="soh" class="form-control" type="number"  name="number" min='1' max='10' >
            </div>

            <div class="form-group">
                <label for="lydo">Lý do đăng ký</label> <br>
                <textarea  v-model="overtime.reason" name="reason" id="lydo" cols="60" rows="5"></textarea>
            </div>

            <div class="btnabc">
                <a href="" @click="click_reset()" class="btn btn-primary">Reset</a>
                <button type="submit" class="btn btn-success">Submit</button>
                <a href="" class="btn btn-danger"> Cancel </a>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
  /* h1{ 
    color: green;
    text-align: center;
  }
  .mess{
    color:red;
    text-align: center;
  }
  .formOT{
    border: green 1px solid;
  }
  .btnabc{
    margin-left: 15%;
  }
  .btnabc button,a{
    margin: 0px 5px 0px 0px;
  } */
</style>

<script>

const axios = require('axios');

export default ({
  data() {
    return{
      id_url:'',
      overtime:{
        id_user: '',
        name:'',
        email:'',
        phone_number:'',
        reason:'',
        number:'',
        ngayDK: '',
      },
      errors: {}
    }
  },

  mounted(){
    this.id_url = this.$route.params.id;
    this.checklogin(this.id_url);
  },

  methods:{
    
    checklogin: function(id){
      axios.get('http://127.0.0.1:8000/api/editOT/'+id, {
      })
      .then( response => {
        this.overtime = response.data[0];       
        this.overtime.ngayDK = response.data[0].ngayDK.slice(0, 10);

        // console.log(this.dataOvertime[0]['id']);       
      })
      .catch( errors => {
        console.log(errors);
      })
    },    

    editOT: function(){        
      axios.post('http://127.0.0.1:8000/api/updateOT/'+this.id_url,
          this.overtime
      )
      .then( () => {
        alert("Đã cập nhật thành công!");
        window.location.reload()
        // console.log(response.data);

      })
      .catch( errors => {
        console.log("lỗi rồi!");
        console.log(errors);
      });
    },

    click_reset: function(){
       window.location.reload();
    },

  }

})
</script>
