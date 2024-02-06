import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
      // component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/license',
      name: 'license',
      component: () => import('../views/LicenseView.vue')
    },
    {
      path: '/organize',
      name: 'organize',
      component: () => import('../views/OrganizeView.vue')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('../views/BusinessView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/En',
      name: 'homeEn',
      component: () => import('../views/HomeViewEn.vue')
      // component: HomeView
    },
    {
      path: '/aboutEn',
      name: 'aboutEn',
      component: () => import('../views/AboutViewEn.vue')
    },
    {
      path: '/licenseEn',
      name: 'licenseEn',
      component: () => import('../views/LicenseViewEn.vue')
    },
    {
      path: '/organizeEn',
      name: 'organizeEn',
      component: () => import('../views/OrganizeViewEn.vue')
    },
    {
      path: '/businessEn',
      name: 'businessEn',
      component: () => import('../views/BusinessViewEn.vue')
    },
    {
      path: '/newsEn',
      name: 'newsEn',
      component: () => import('../views/NewsViewEn.vue')
    },
    {
      path: '/contactEn',
      name: 'contactEn',
      component: () => import('../views/ContactViewEn.vue')
    },
    // 服務項目內頁
    {
      path: '/service/:id', // :id 是動態參數
      name: 'service',
      component: () => import('../views/ServiceView.vue')
    },
    {
      path: '/serviceEn/:id',
      name: 'serviceEn',
      component: () => import('../views/ServiceViewEn.vue')
    },
    // 添加一個捕獲所有未匹配路徑的規則，並重定向到根路徑
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    },
    // TODO 後台
    {
      path: '/backendLogin',
      name: 'backendLogin',
      component: () => import('../views/Backend/BackendLogin.vue')
    },
    {
      path: '/backendView',
      name: 'backendView',
      component: () => import('../views/Backend/BackendView.vue'),
      meta: { useBackNavBar: true }, // 更換後台的 NavBar
      children: [
        {
          path: '', // 空的子路径
          redirect: '/backendView/backendHome' // 重定向到 backendHome
        },
        {
          path: 'backendHome',
          name: 'backendHome',
          component: () => import('../views/Backend/BackendHome.vue')
        },
        {
          path: 'backendServices',
          name: 'backendServices',
          component: () => import('../views/Backend/backendServices.vue')
        },
        {
          path: 'backendAbout',
          name: 'backendAbout',
          component: () => import('../views/Backend/BackendAbout.vue')
        },
        {
          path: 'backendLicense',
          name: 'backendLicense',
          component: () => import('../views/Backend/BackendLicense.vue')
        },
        {
          path: 'backendOrganize',
          name: 'backendOrganize',
          component: () => import('../views/Backend/BackendOrganize.vue')
        },
        {
          path: 'backendBusiness',
          name: 'backendBusiness',
          component: () => import('../views/Backend/BackendBusiness.vue')
        },
        {
          path: 'backendNews',
          name: 'backendNews',
          component: () => import('../views/Backend/BackendNews.vue')
        },
        {
          path: 'backendArticle',
          name: 'backendArticle',
          component: () => import('../views/Backend/BackendArticle.vue')
        },
        {
          path: 'backendContact',
          name: 'backendContact',
          component: () => import('../views/Backend/BackendContact.vue')
        },
        {
          path: 'backendFeedback',
          name: 'backendFeedback',
          component: () => import('../views/Backend/BackendFeedback.vue')
        },
        {
          path: 'backendCompanyData',
          name: 'backendCompanyData',
          component: () => import('../views/Backend/BackendCompanyData.vue')
        },

        {
          path: 'backendStaff',
          name: 'backendStaff',
          component: () => import('../views/Backend/BackendStaff.vue')
        },
        {
          path: 'backendTest',
          name: 'backendTest',
          component: () => import('../views/Backend/BackendTest.vue')
        }
      ]
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
