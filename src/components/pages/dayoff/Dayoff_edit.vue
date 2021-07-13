<template>
    <div>
        <AppHeader></AppHeader>
         <div id="layoutSidenav">
           <AppSideBar />
           <div id="layoutSidenav_content">
              <main>
                  <div class="container-fluid">
                      <!-- Page content -->
                       <slot name="LayoutContent" />
                      <!-- Page content -->

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Quản lý nghỉ phép</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Edit</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <form class="needs-validation" @submit.prevent="editDayOff();" >
    <section class="content">
      <div class="row">
        <div class="col-md-6">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">General</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
             
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="card-body">
                <input v-model="day_off.user_id" type="text" id="txtUserid" name="user_id" class="form-control" readonly style="display: none">
              <div class="form-group">
                <label for="name">Họ Tên</label>
                <input v-model="day_off.name" type="text" id="txtName" name="name" class="form-control" readonly >
              </div>
             <div class="form-group">
                <label for="email">Email</label>
                <input v-model="day_off.email" type="text" id="txtEmail" name="email" class="form-control" readonly >
              </div>
               <div class="form-group">
                <label for="phone_number">Số điện thoại</label>
                <input v-model="day_off.phone_number" type="text" id="txtSdt" name="phone_number" class="form-control" readonly >
              </div>
              <div class="form-group">
                <label for="start_off">Ngày bắt đầu</label>
                <input v-model="day_off.start_off" type="date" id="dateStart" name="start_off" class="form-control">
              </div>
              <div class="form-group">
                <label for="num_off">Thời gian nghỉ (Ngày)</label>
                <input v-model="day_off.num_off" type="number" id="txtNum" name="num_off" class="form-control" min='1' max='14'>
              </div>
              <div class="form-group">
                <label for="off_reason">Lý do nghỉ</label>
                <textarea v-model="day_off.off_reason" id="txtReason" name="off_reason" class="form-control" rows="4"></textarea>
              </div>
              
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <!-- <a href="#" class="btn btn-secondary">Cancel</a> -->
          <input type="submit" value="Cập nhật" class="btn btn-success btn-sm float-left">&nbsp;
          <button class="btn btn-warning btn-sm" type="reset">Reset</button>&nbsp;
          <a class="btn btn-danger btn-sm" href="javascript:history.back()">Hủy</a>
        </div>
      </div>
    </section>
    </form>
    <!-- /.content -->
  </div>
                  </div>
              </main>
           </div><!--end #layoutSidenav_content -->
           <!-- <AppFooter></AppFooter> -->
         </div>
    </div>
</template>

<script>
    import AppHeader from '@/components/layouts/header.vue'
    import AppSideBar from '@/components/layouts/sidebar.vue'
   // import AppFooter from '@/components/layouts/footer.vue'
    const axios = require('axios');
    export default ({
        name: 'Dayoff_edit',
        components: {
            AppHeader,
            AppSideBar,
        //    AppFooter
        },
       data() {
    return{
      id_url:'',
      day_off:{
        user_id: '',
        name:'',
        email:'',
        phone_number:'',
        off_reason:'',
        start_off: '',
        num_off: '',
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
      axios.get('http://127.0.0.1:8000/api/dayoff-edit/'+id, {
      })
      .then( response => {
        this.day_off = response.data[0];       
        this.day_off.start_off = response.data[0].start_off.slice(0, 10);

      })
      .catch( errors => {
        console.log(errors);
      })
    },    

    editDayOff: function(){        
      axios.post('http://127.0.0.1:8000/api/dayoff-update/'+this.id_url,
          this.day_off
      )
      .then( () => {
        alert("Cập nhật thành công!");
        window.location.reload()

      })
      .catch( errors => {
        console.log("Yêu cầu đã xảy ra lỗi");
        console.log(errors);
      });
    },

  }

    })
</script>
<style></style>


