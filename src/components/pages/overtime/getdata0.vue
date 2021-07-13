<template>
    <div class="container">
        <h1>Quản lý đơn chờ duyệt của nhân viên</h1>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Nhân Viên</th>
                        <th>Số giờ</th>
                        <th>Lý do làm thêm</th>
                        <th>Ngày DK</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>                    
                    <tr v-for="(data, i) in dataOvertime" :key="i"> 
                        <td v-text="i+1">  </td>
                        <td>{{data.name}}</td>
                        <td>{{data.number}}</td>
                        <td>{{data.reason}}</td>
                        <td>{{data.ngayDK}}</td>
                        <td>
                          <a :href="'http://localhost:8080/editOT/'+data.id"  class='btn btn-warning' > Sửa </a>
                          <a href="" class='btn btn-success' @click.prevent="click_apply(data.id)" > Duyệt </a>
                          <a href="" class='btn btn-danger' @click.prevent="click_detroy(data.id)" > Xóa </a>
                        </td>
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
      dataOvertime: [],
      user_localstore:{
        admin_id:'',
        
      }
    }
    },

  mounted(){    
    this.checklogin();
  },

  methods:{
    checklogin: function(){
      axios.get('http://127.0.0.1:8000/api/getdata0',{
      })
      .then( response => {
        this.dataOvertime = response.data;        
        this.user_localstore.admin_id =  JSON.parse(localStorage.getItem('user')).user.id; 
        
        // console.log(this.user_localstore);
      })
      .catch( () => {
        console.log('loi roi');
      })
    },

    click_apply: function(id){
        axios.post('http://127.0.0.1:8000/api/approveOT/'+id,
            this.user_localstore
        )
        .then( res => {
          alert("Đã duyệt thành công!");
          // window.location.reload();
          console.log(res.data);         

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
