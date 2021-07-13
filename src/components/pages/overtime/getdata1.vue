<template>
    <div class="container">

        <h1>Quản lý đơn đã duyệt của nhân viên</h1>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Nhân Viên</th>
                        <th>Số giờ</th>
                        <th>Lý do làm thêm</th>
                        <th>Ngày DK</th>
                        <th>Nguòi duyệt</th>
                        <th>Thời gian duyệt</th>
                    </tr>
                </thead>
                <tbody>                    
                    <tr v-for="(data, i) in dataOvertime" :key="i"> 
                        <td v-text="i+1">  </td>
                        <td>{{data.name}}</td>
                        <td>{{data.number}}</td>
                        <td>{{data.reason}}</td>
                        <td>{{data.ngayDK}}</td>
                        <td>{{data.id_Admin}}</td>
                        <td>{{data.approved_time}}</td>
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
      dataOvertime: []
    }
    },

  mounted(){
    this.checklogin();
  },

  methods:{
    checklogin: function(){
      axios.get('http://127.0.0.1:8000/api/getdata1',{
      })
      .then(response => {
        this.dataOvertime = response.data;
        console.log(this.dataOvertime);

      })
      .catch(() => {
        console.log('loi roi');
      })
    },

  }

})
</script>
