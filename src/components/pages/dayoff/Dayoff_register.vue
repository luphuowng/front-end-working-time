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
            <h1>Đăng ký nghỉ phép</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Register</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <form class="needs-validation" @submit.prevent="createDayOff();" >
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
                <input v-model="day_off.name" type="text" id="txtName" name="name" class="form-control" readonly  placeholder="Fullname">
              </div>
             <div class="form-group">
                <label for="email">Email</label>
                <input v-model="day_off.email" type="text" id="txtEmail" name="email" class="form-control" readonly placeholder="Email">
              </div>
               <div class="form-group">
                <label for="phone_number">Số điện thoại</label>
                <input v-model="day_off.phone_number" type="text" id="txtSdt" name="phone_number" class="form-control" readonly  placeholder="Phone number">
              </div>
              <div class="form-group">
                <label for="start_off">Ngày bắt đầu</label>
                <input v-model="day_off.start_off" type="date" id="dateStart" name="start_off" class="form-control"  placeholder="Day start" required>
              </div>
              <div class="form-group">
                <label for="num_off">Thời gian nghỉ (Ngày)</label>
                <input v-model="day_off.num_off" type="number" id="txtNum" name="num_off" class="form-control"  placeholder="Number of day" min='1' max='14' required>
                 </div>
              <div class="form-group">
                <label for="off_reason">Lý do nghỉ</label>
                <textarea v-model="day_off.off_reason" id="txtReason" name="off_reason" class="form-control" rows="4" placeholder="Reason" required></textarea>
              </div>
              
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <input type="submit" value="Gửi yêu cầu" class="btn btn-success btn-sm float-left">&nbsp;
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
        name: 'Dayoff_register',
        components: {
            AppHeader,
            AppSideBar,
           // AppFooter
        },
        data(){
          return{
            dataDayOff: [],
            day_off:{
              user_id: '',
              name: '',
              email: '',
              phone_number: '',
              off_reason: '',
              start_off: '',
              num_off: '',
            },
            errors: {}
          }
        },
        mounted(){
          this.checklogin();
        },
        methods:{
          checklogin: function(){
            var x = JSON.parse(localStorage.getItem('user'));
            this.day_off.user_id = x.user.id;
            this.day_off.name = x.user.name;
            this.day_off.email = x.user.email;
            this.day_off.phone_number = x.user.phone_number;
            this.day_off.start_off = new Date().toISOString().slice(0, 10);
          },
          createDayOff: function(){
            axios.post('http://127.0.0.1:8000/api/dayoff-register',
            this.day_off
            )
            .then (() =>{
              alert("Đăng ký thành công!");
              window.location.reload();
            })
            .catch (() =>{
              console.log("Yêu cầu đã xảy ra lỗi");
            });
          }
        }

    })
</script>
<style></style>


