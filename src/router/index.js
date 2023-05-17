import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ApplyJobView from '../views/ApplyJobView.vue'
import LoginView from '../auth/LoginView.vue'

import JobDescription from '../job/JobDescription.vue'
import ApplicationForm from '../job/ApplicationForm.vue'

import AdminLogin from '../admin/AdminLogin.vue'
import AdminDashboard from '../admin/content/AdminDashboard.vue'
import AdminCompliance from '../admin/content/AdminCompliance.vue'
import AdminForms from '../admin/content/AdminForms.vue'
import AdminRequestLeave from '../admin/content/AdminRequestLeave.vue'
import AdminChangePassword from '../admin/content/AdminChangePassword.vue'

import AdminEmployee from '../admin/content/AdminEmployee.vue'
import AdminEmployeeGenInfo from '../admin/content/AdminEmployeeGenInfo.vue'
import AdminAddEmployee from '../admin/content/AdminAddEmployee.vue'
import AdminUpdateEmployee from '../admin/content/AdminUpdateEmployee.vue'

import AdminAttendanceCalendar from '../admin/content/AdminAttendanceCalendar.vue'
import AdminAttendanceEmployee from '../admin/content/AdminAttendanceEmployee.vue'
import AdminAttendance from '../admin/content/AdminAttendance.vue'

import AdminJobPosting from '../admin/content/AdminJobPosting.vue'
import AdminAddJobPosting from '../admin/content/AdminAddJobPosting.vue'
import AdminUpdateJobPosting from '../admin/content/AdminUpdateJobPosting.vue'

import AdminPayroll from '../admin/content/AdminPayroll.vue'
import AdminPayrollPayslip from '../admin/content/AdminPayrollPayslip.vue'

import AdminRecruitment from '../admin/content/AdminRecruitment.vue'
import AdminAddApplicant from '../admin/content/AdminAddApplicant.vue'
import AdminViewApplicant from '../admin/content/AdminViewApplicant.vue'

import AdminEventsUpdate from '../admin/content/AdminEventsUpdate.vue'
import AdminAddEventsUpdate from '../admin/content/AdminAddEventsUpdates.vue'
import AdminEditEventsUpdate from '../admin/content/AdminEditEventsUpdates.vue'

import AdminReports from '../admin/content/AdminReports.vue'
import ViewDailyReport from '../admin/content/ViewDailyReport.vue'

import EmployeeMain from '../pages/employee/EmployeeMain.vue'
import EmployeeChangePassword from '../pages/employee/EmployeeChangePassword.vue'

import EmployeeAccomplishmentReport from '../pages/employee/EmployeeAccomplishmentReport.vue'
import EmployeeDailyAccomplishmentReport from '../pages/employee/EmployeeDailyAccomplishmentReport.vue'
import EmployeeSendDailyReport from '../pages/employee/EmployeeSendDailyReport.vue'

import _404View from '../views/_404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        hideAdminNav: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        hideAdminNav: true
      }
    },
    {
      path: '/applyjob',
      name: 'applyjob',
      component: ApplyJobView,
      meta: {
        hideAdminNav: true
      }
    },

    //job
    {
      path: '/jobdescription',
      name: 'jobdescription',
      component: JobDescription,
      meta: {
        hideAdminNav: true
      }
    },
    {
      path: '/applicationform',
      name: 'applicationform',
      component: ApplicationForm,
      meta: {
        hideAdminNav: true
      }
    },

    //auth
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        hideNav: true,
        hideFooter: true
      }
    },

    //admin login
    {
      path: '/adminlogin',
      name: 'adminlogin',
      component: AdminLogin,
      meta: {
        hideNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/admindashboard',
      name: 'admindashboard',
      component: AdminDashboard,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminattendancecalendar',
      name: 'adminattendancecalendar',
      component: AdminAttendanceCalendar,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminattendance',
      name: 'adminattendance',
      component: AdminAttendance,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminattendanceemployee',
      name: 'adminattendanceemployee',
      component: AdminAttendanceEmployee,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/admincompliance',
      name: 'admincompliance',
      component: AdminCompliance,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminemployee',
      name: 'adminemployee',
      component: AdminEmployee,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminemployeegeneralinfo',
      name: 'adminemployeegeneralinfo',
      component: AdminEmployeeGenInfo,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminaddemployee',
      name: 'adminaddemployee',
      component: AdminAddEmployee,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminupdateemployee',
      name: 'adminupdateemployee',
      component: AdminUpdateEmployee,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminforms',
      name: 'adminforms',
      component: AdminForms,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminjobposting',
      name: 'adminjobposting',
      component: AdminJobPosting,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminaddjobposting',
      name: 'adminaddjobposting',
      component: AdminAddJobPosting,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminupdatejobposting',
      name: 'adminupdatejobposting',
      component: AdminUpdateJobPosting,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminpayroll',
      name: 'adminpayroll',
      component: AdminPayroll,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminpayrollpayslip',
      name: 'adminpayrollpayslip',
      component: AdminPayrollPayslip,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminrecruitment',
      name: 'adminrecruitment',
      component: AdminRecruitment,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminaddapplicant',
      name: 'adminaddapplicant',
      component: AdminAddApplicant,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminviewapplicant',
      name: 'adminviewapplicant',
      component: AdminViewApplicant,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/admineventsandupdates',
      name: 'admineventsandupdates',
      component: AdminEventsUpdate,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminaddeventsandupdates',
      name: 'adminaddeventsandupdates',
      component: AdminAddEventsUpdate,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminediteventsandupdates',
      name: 'adminediteventsandupdates',
      component: AdminEditEventsUpdate,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminrequestleave',
      name: 'adminrequestleave',
      component: AdminRequestLeave,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminreports',
      name: 'adminreports',
      component: AdminReports,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/viewdailyreport',
      name: 'viewdailyreport',
      component: ViewDailyReport,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/adminchangepassword',
      name: 'adminchangepassword',
      component: AdminChangePassword,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },

    //employee login
    {
      path: '/employeemain',
      name: 'employeemain',
      component: EmployeeMain,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/employeeaccomplishmentreport',
      name: 'employeeaccomplishmentreport',
      component: EmployeeAccomplishmentReport,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/employeedailyaccomplishmentreport',
      name: 'employeedailyaccomplishmentreport',
      component: EmployeeDailyAccomplishmentReport,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/employeesenddailyaccomplishmentreport',
      name: 'employeesenddailyaccomplishmentreport',
      component: EmployeeSendDailyReport,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    {
      path: '/employeechangepassword',
      name: 'employeechangepassword',
      component: EmployeeChangePassword,
      meta: {
        hideNav: true,
        hideAdminNav: true,
        hideFooter: true,
      }
    },
    
    
    //catchAll 404
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: _404View,
      meta: {
        hideNav: true,
        hideAdminNav: true
      }
    }
  ]
})

export default router
