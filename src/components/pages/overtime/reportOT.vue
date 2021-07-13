<template>
    <div class="container">
        <div class="row">
            <h1>Bảng Báo Cáo Giờ Làm Thêm Của Nhân Viên</h1>

        </div>
    </div>
</template>

<style>

</style>

<script>
const axios = require('axios');


export default ({
  data() {
    return{
      dataOvertime: [],
      
      errors: {}
    }
  },

  mounted(){
    this.checklogin();
  },

  methods:{
    checklogin: function(){
      axios.get('http://127.0.0.1:8000/api/reportOT', {
      })
      .then( response => {
        this.dataOvertime = response.data;
        console.log(this.dataOvertime[0]);

      })
      .catch( error => {
        console.log(error);
      })
    },
    
    
  }

})
</script>
