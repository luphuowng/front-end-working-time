<template>
    <div>   
    <div class="card">
        <div class="card-header">
          <h3 class="card-title">Quản lý nghỉ phép</h3>

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
                          Tên nhân viên
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
                          Thao tác
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(data, i) in dataDayOff" :key="i">
                      <td v-text="i+1">
                      </td>
                      <td>
                         {{data.name}}
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
                      <td class="project-actions">
                          <a :href="'http://localhost:8080/Dayoff_edit/'+data.id" class="btn btn-warning btn-sm"><i class="fas fa-pencil-alt"></i> Sửa </a>&nbsp;
                          <a href="" class="btn btn-success btn-sm" @click.prevent="click_apply(data.id)" ><i class="fas fa-clipboard-check"></i> Duyệt </a>&nbsp;
                          <a href="" class="btn btn-danger btn-sm" @click.prevent="click_detroy(data.id)" ><i class="fas fa-trash"></i> Xóa </a>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
</template>

<script>
    const axios = require('axios');

export default ({
   data() {
    return{
      dataDayOff: [],
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
      axios.get('http://127.0.0.1:8000/api/get-data/',{
      })
      .then( response => {
        this.dataDayOff = response.data;        
        this.user_localstore.admin_id =  JSON.parse(localStorage.getItem('user')).user.id; 
        
      })
      .catch( () => {
        console.log('Đã xảy ra lỗi');
      })
    },

    click_apply: function(id){
        axios.post('http://127.0.0.1:8000/api/approved-dayoff/'+id,
            this.user_localstore
        )
        .then( res => {
          alert("Đã duyệt thành công!");
          console.log(res.data);
          window.location.reload();         

        })
        .catch( () => {
          console.log('Đã xảy ra lỗi');
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
          console.log('Đã xảy ra lỗi');
        })
    },
  }
})
</script>
<style></style>