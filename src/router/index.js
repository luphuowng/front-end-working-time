import Vue from 'vue'
import VueRouter from 'vue-router'

//login---phuong.nguyen
import Login from '../components/Login.vue' //login
import admin from '../components/admin.vue' //logout
import Forgot_Password from '../components/forgot_password/Forgot_Password.vue'
import Code from '../components/forgot_password/Code.vue'
import Change_Pass from '../components/forgot_password/Change_Pass.vue'
//import RegisterPage from '../components/pages/RegisterPage.vue'//dang ki tai khoan

//check_in-check_out---hieu.tran
import CheckTimePage from '../components/pages/workingtime/CheckTimePage.vue' //form check_in
import HistoryCheckTime from '@/components/pages/workingtime/HistoryCheckTime.vue' //form check_out
import CheckOut from '@/components/pages/workingtime/CheckOut.vue' //lich su check_in check_out

//Ot---son.le
import createOT from '@/components/pages/overtime/createOT.vue' //dang ki Ot
import editOT from '@/components/pages/overtime/editOT.vue' //sua Ot
import getdata0 from '@/components/pages/overtime/getdata0.vue' //form ot cho duyet
import getdata1 from '@/components/pages/overtime/getdata1.vue' //form ot da duyet
import reportOT from '@/components/pages/overtime/reportOT.vue' //bao cao ot
import showOTofuser from '@/components/pages/overtime/showOTofuser.vue' // form ot cua user

//day_off---truc.ho
import DayOffPage from '../components/pages/dayoff/Day_off.vue' // Quan ly nghi phep
import RegisterPage from '../components/pages/dayoff/Dayoff_register.vue' // Dang ky nghi phep
import DayOffTrackingPage from '../components/pages/dayoff/Dayoff_tracking.vue' // Theo doi nghi phep da duyet cua admin
import DayOffEditPage from '../components/pages/dayoff/Dayoff_edit.vue' // Sua thong tin nghi phep
import DayOffApprovedPage from '../components/pages/dayoff/Dayoff_approved.vue' // Quan ly yeu cau da gui cua nhan vien
Vue.use(VueRouter)

const routes = [
    //login-logout---phuong.nguyen
    {
      path: '/',
      name: 'Login',
      component:  Login
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        auth: true
      },
      component: admin,
    },
    {
      path: '/Forgot_Password',
      name: 'Forgot_Password',
      component: Forgot_Password,
    },    
    {
      path: '/Code',
      name: 'Code',
      component: Code
    },
    {
      path: '/Change_Pass',
      name: 'Change_Pass',
      component: Change_Pass
    },  
    //check_in-check_out---hieu.tran
    {
      path: "/CheckTimePage",
      name: "CheckTimePage",
      components:{
        default: admin,
        'content': CheckTimePage
      }
    },

    {
      path: "/CheckOut/:id",
      name: "CheckOut",
      components:{
        default: admin,
        'content': CheckOut
      }
    },
    
    {
      path: "/HistoryCheckTime",
      name: "HistoryCheckTime",
      components:{
        default: admin,
        'content': HistoryCheckTime
      }
    },
    //day_off--truc.ho
    {
      path: '/Day_off',
      name: 'Day_off',
      components:{
        default: admin,
        'content': DayOffPage
      }
    },

    {
      path: '/Dayoff_register',
      name: 'Dayoff_register',
      components:{
        default: admin,
        'content': RegisterPage
      }
    },

    {
      path: '/Dayoff_tracking',
      name: 'Dayoff_tracking',
      components:{
        default: admin,
        'content': DayOffTrackingPage
      }
    },

    {
      path: '/Dayoff_edit/:id',
      name: 'Dayoff_edit',
      components:{
        default: admin,
        'content': DayOffEditPage
      }
    },

    {
      path: '/Dayoff_approved',
      name: 'Dayoff_approved',
      components:{
        default: admin,
        'content': DayOffApprovedPage
      }
    },

    //OT---son.le
    {
      path: "/FormOvertime",
      name: "FormOvertime",
      components:{
        default: admin,
        'content': createOT
      }
    },

    {
      path: "/EditOvertime/:id",
      name: "EditOvertime",
      components:{
        default: admin,
        'content': editOT
      }
    },

    {
      path: "/GetData0",
      name: "GetData0",
      components:{
        default: admin,
        'content': getdata0
      }
    },

    {
      path: "/GetData1",
      name: "GetData1",
      components:{
        default: admin,
        'content': getdata1
      }
    },

    {
      path: "/ReportOvertime",
      name: "ReportOvertime",
      components:{
        default: admin,
        'content': reportOT
      }
    },

    {
      path: "/ShowOTofuser",
      name: "ShowOTofuser",
      components:{
        default: admin,
        'content': showOTofuser
      }
    },
    
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  router.beforeEach((to, from, next) => {
    
    const loggedIn = localStorage.getItem('user')
  
    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        return next('/')
    }
    next();    
  })
  
  export default router


