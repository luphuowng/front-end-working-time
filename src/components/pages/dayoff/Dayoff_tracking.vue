<template>
    <div>   
    <div class="card">
        <div class="card-header">
          <h3 class="card-title">Thông tin nghỉ phép đã duyệt</h3>

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
                          Người duyệt
                      </th>
                       <th style="width: 10%">
                          Ngày duyệt
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
                     <td>{{data.admin_id}}</td>
                    <td>{{data.approved_at}}</td>
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
      dataDayOff: []
    }
    },

  mounted(){
    this.checklogin();
  },

  methods:{
    checklogin: function(){
      axios.get('http://127.0.0.1:8000/api/approved/',{
      })
      .then(response => {
        this.dataDayOff = response.data;
        console.log(this.dataDayOff);

      })
      .catch(() => {
        console.log('Yêu cầu đã xảy ra lỗi');
      })
    },

  }

})
</script>

<style></style>