import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/'
import Layout from '@/views/layout/'

import Triangle from '@/views/triangle'
import Calendar from '@/views/calendar'
import Computer from '@/views/computer/'
import Telecom from '@/views/telecom/'

import Employee from '@/views/employee/'
import Ecommerce from '@/views/ecommerce/'
import CS from '@/views/cs/'
import ATM from '@/views/atm/'
import ERP from '@/views/erp/'
import Web from '@/views/web/'
import Program from '@/views/program/'
import Sales from '@/views/sales/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: '/telecom',
        name: 'telecom',
        component: Telecom
      }, {
        path: '/triangle',
        name: 'triangle',
        component: Triangle
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: Calendar
      },
      {
        path: '/computer',
        name: 'computer',
        component: Computer
      },
      {
        path: '/employee',
        name: 'employee',
        component: Employee
      },
      {
        path: '/ecommerce',
        name: 'ecommerce',
        component: Ecommerce
      },
      {
        path: '/cs',
        name: 'cs',
        component: CS
      },
      {
        path: '/atm',
        name: 'atm',
        component: ATM
      },
      {
        path: '/erp',
        name: 'erp',
        component: ERP
      },
      {
        path: '/web',
        name: 'web',
        component: Web
      },
      {
        path: '/program',
        name: 'program',
        component: Program
      },
      {
        path: '/sales',
        name: 'sales',
        component: Sales
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const user = JSON.parse(window.localStorage.getItem('user'));


export default router
