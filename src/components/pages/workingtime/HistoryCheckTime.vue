<template>
    <div class="container">
        <h1>Quản lý đơn chờ duyệt của nhân viên</h1>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Staff Name</th>
                        <th>Project</th>
                        <th>Note</th>
                        <th>Check_in At</th>
                        <th>Check_out At</th>
                        <th>Create_at</th>
                        <th>Update_at</th>
                    </tr>
                </thead>
                <tbody>                    
                    <tr v-for="(data, i) in dataworkingtime" :key="i"> 
                        <td>{{data.id}}</td>
                        <td>{{data.name}}</td>
                        <td>{{data.work}}</td>
                        <td>{{data.note}}</td>
                        <td>{{data.check_in}}</td>
                        <td>{{data.check_out}}</td>
                        <td>{{data.created_at}}</td>
                        <td>{{data.updated_at}}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

const axios = require('axios');

export default ({
    name: "HistoryCheckTime",
    data() {
        return{
            dataworkingtime: []
        }
    },

  mounted(){
    this.checklogin();
  },
  methods:{
    checklogin: function(){
      axios.get('http://127.0.0.1:8000/api/showWorkingtime',{
      })
      .then(response => {
        this.dataworkingtime = response.data;
        console.log(this.dataworkingtime);

      })
      .catch(() => {
        console.log('loi roi');
      })
    },

  }

})
</script>