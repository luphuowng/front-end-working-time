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
                  </div>
              </main>
           </div><!--end #layoutSidenav_content -->
          
         </div> 
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    import AppHeader from '@/components/layouts/header.vue'
    import AppSideBar from '@/components/layouts/sidebar.vue'
    import AppFooter from '@/components/layouts/footer.vue'
    export default {
        name: 'admin',
        components: {
            AppHeader,
            AppSideBar,
            AppFooter
        }
    }
</script>

<style scoped></style>