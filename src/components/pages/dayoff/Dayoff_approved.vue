<template>
    <div>   
    <div class="card">
        <div class="card-header">
          <h3 class="card-title">Yêu cầu đã gửi</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-0 table-responsive">
          <table class="table table-striped projects">
              <thead>
                  <tr>
                      <th style="width: 1%">
                          STT
                      </th>
                      <th style="width: 10%">
                          Ngày xin phép
                      </th>
                      <th style="width: 10%">
                        Số ngày nghỉ
                      </th>
                      <th style="width: 20%">
                          Lý do nghỉ
                      </th>
                      <th style="width: 10%">
                          Thao tác
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(data, i) in dataDayOff" :key="i">
                      <td v-text="i+1">
                      </td>
                      <td>
                          {{data.start_off}}
                      </td>
                      <td>
                          {{data.num_off}}
                      </td>
                      <td >
                         {{data.off_reason}}
                      </td>
                     <td>
                          <a :href="'http://localhost:8080/Dayoff_edit/'+data.id"  class="btn btn-warning btn-sm" ><i class="fas fa-pencil-alt"></i> Sửa </a>&nbsp;
                          <a href="" class="btn btn-danger btn-sm" @click.prevent="click_detroy(data.id)" ><i class="fas fa-trash"></i> Xóa </a>
                        </td>
                  </tr>
              </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
<div class="card">
        <div class="card-header">
          <h3 class="card-title">Yêu cầu đã duyệt</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-0 table-responsive">
          <table class="table table-striped projects">
              <thead>
                  <tr>
                      <th style="width: 1%">
                          STT
                      </th>
                      <th style="width: 10%">
                          Ngày xin phép
                      </th>
                      <th style="width: 10%">
                        Số ngày nghỉ
                      </th>
                      <th style="width: 10%">
                          Lý do nghỉ
                      </th>
                      <th style="width: 10%">
                          Người duyệt
                      </th>
                       <th style="width: 10%">
                          Ngày duyệt
                      </th>
                      <th style="width: 10%">
                          Trạng thái
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(data, i) in dataDayOff1" :key="i">
                      <td v-text="i+1">
                      </td>
                      <td>
                          {{data.start_off}}
                      </td>
                      <td>
                          {{data.num_off}}
                      </td>
                      <td>
                         {{data.off_reason}}
                      </td>
                     <td>{{data.admin_id}}</td>
                    <td>{{data.approved_at}}</td>
                    <td>
                        <span class="badge badge-success">Đã duyệt</span>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
    </div>
    
</template>

<script>

const axios = require('axios');
export default ({
   data() {
    return{
      dataDayOff: [],
       dataDayOff1: [],
    }
    },

  mounted(){    
    this.checklogin();
  },

  methods:{
    checklogin: function(){
        var user_id =  JSON.parse(localStorage.getItem('user')).user.id; 
        axios.get('http://127.0.0.1:8000/api/dayoff-show/'+user_id,{
        })
        .then( response => {
            this.dataDayOff = response.data[0];        
            this.dataDayOff1 = response.data[1];  
        })
        .catch( () => {
            console.log('Yêu cầu đã xảy ra lỗi');
        })
    },

    click_detroy: function(id){
        axios.get('http://127.0.0.1:8000/api/cancel-dayoff/'+id,{           
        })
        .then( res => {
          alert("Đã xóa thành công!");
          console.log(res.data);
          window.location.reload();
        })
        .catch( () => {
          console.log('Yêu cầu đã xảy ra lỗi');
        })
    },
  }
})
</script>
<style></style>