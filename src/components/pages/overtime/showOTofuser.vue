<template>
    <div class="container">
        <h1>Các đơn đã đăng ký</h1>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>                        
                        <th>Số giờ</th>
                        <th>Lý do làm thêm</th>
                        <th>Ngày ĐK</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>                    
                    <tr v-for="(data, i) in dataOvertime0" :key="i"> 
                        <td v-text="i+1">  </td>
                        <td>{{data.number}}</td>
                        <td>{{data.reason}}</td>
                        <td>{{data.ngayDK}}</td>
                        <td>
                          <a :href="'http://localhost:8080/editOT/'+data.id"  class='btn btn-warning' > Sửa </a>
                          <a href="" class='btn btn-danger' @click.prevent="click_detroy(data.id)" > Xóa </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h1>Các đơn đã duyệt</h1>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>                        
                        <th>Số giờ</th>
                        <th>Lý do làm thêm</th>
                        <th>Ngày ĐK</th>
                        <th>Ngày duyệt</th>
                        <th>Người duyệt</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>                    
                    <tr v-for="(data, i) in dataOvertime1" :key="i"> 
                        <td v-text="i+1">  </td>
                        <td>{{data.number}}</td>
                        <td>{{data.reason}}</td>
                        <td>{{data.ngayDK}}</td>
                        <td>{{data.approved_time}}</td>
                        <td>{{data.id_Admin}}</td>
                        <td> đã duyệt </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    
</template>

<script>

const axios = require('axios');

export default ({
   data() {
    return{
      dataOvertime0: [],
       dataOvertime1: [],
    }
    },

  mounted(){    
    this.checklogin();

  },

  methods:{
    checklogin: function(){
        var id_user =  JSON.parse(localStorage.getItem('user')).user.id; 
        // console.log('s : ', id_user);
        axios.get('http://127.0.0.1:8000/api/showOT/'+id_user,{
        })
        .then( response => {
            this.dataOvertime0 = response.data[0];        
            this.dataOvertime1 = response.data[1];  
            // console.log(this.dataOvertime);
        })
        .catch( () => {
            console.log('loi roi');
        })

    },

    click_detroy: function(id){
        axios.get('http://127.0.0.1:8000/api/destroyOT/'+id,{
            
        })
        .then( res => {
          alert("Đã xóa thành công!");
          console.log(res.data);
          window.location.reload();
        })
        .catch( () => {
          console.log('loi roi');
        })
    },
   

  }

})
</script>
