import { createRouter, createWebHashHistory } from 'vue-router'
import StartMenu from '@/./views/StartMenu.vue';
import MainLayout from "@/views/MainLayout.vue";
import Contacts from "@/views/Contacts.vue";
import Settings from "@/views/Settings.vue";
import Account from "@/views/Account.vue";
import Login from "@/views/Login.vue";
import Registration from "@/views/Registration.vue";
import MakePost from "@/views/MakePost.vue";

const routes = [
  {
    path: '/',
    name: 'Start Menu',
    component: StartMenu
  },
  {
    path: '/home',
    name: 'main page',
    component: MainLayout,
    children: [
      {
        path: '/contacts',
        name: 'contacts page',
        component: Contacts
      },
      {
        path: '/settings',
        name: 'settings page',
        component: Settings
      },
      {
        path: '/personalAccount',
        name: 'personalAccount page',
        component: Account
      },
      {
        path: '/login',
        name: 'login page',
        component: Login
      },
      {
        path: '/register',
        name: 'register page',
        component: Registration
      },
    ]
  },
  {
    path: '/makePost',
    name: 'make post page',
    component: MakePost
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
