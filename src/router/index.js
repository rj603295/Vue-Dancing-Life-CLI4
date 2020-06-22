import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/backstage/Login.vue')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/backstage/Products.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('@/views/backstage/Coupon.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'customer_list',
        name: 'CustomerList',
        component: () => import('@/views/backstage/CustomerList.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/forestage/Home.vue')
  },
  {
    path: '/get_coupon',
    name: 'FrontCoupon',
    component: () => import('@/views/forestage/FrontCoupon.vue')
  },
  {
    path: '/competition',
    name: 'Competition',
    component: () => import('@/views/forestage/Competition.vue')
  },
  {
    path: '/set',
    name: 'Setting',
    component: () => import('@/views/Setting.vue'),
    children: [
      {
        path: 'shopping',
        name: 'CustomerOrder',
        component: () => import('@/views/forestage/CustomerOrders.vue')
      },
      {
        path: 'shopping/:id',
        name: 'ProductDetail',
        component: () => import('@/views/forestage/ProductDetail.vue')
      },
      {
        path: 'check',
        name: 'Check',
        component: () => import('@/views/forestage/Check.vue')
      },
      {
        path: 'buy_info',
        name: 'BuyInfo',
        component: () => import('@/views/forestage/BuyInfo.vue')
      },
      {
        path: 'after_buy',
        name: 'AfterBuy',
        component: () => import('@/views/forestage/AfterBuy.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/forestage/Contact.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
