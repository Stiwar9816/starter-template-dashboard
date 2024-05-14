import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import ClientsView from '@/views/ClientsView.vue'
import BalanceView from '@/views/BalanceView.vue'
import CashView from '@/views/CashView.vue'
import InventoryView from '@/views/InventoryView.vue'
import ExpensesView from '@/views/ExpensesView.vue'
import InvoicesView from '@/views/InvoicesView.vue'
import WalletView from '@/views/WalletView.vue'
import BookingView from '@/views/BookingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ' login',
      component: LoginView,
      meta: {
        layout: 'Default'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'Dashboard',
        requireAuth: true
      }
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsView,
      meta: {
        layout: 'Dashboard',
        requireAuth: true
      }
    },
    {
      path: '/balance',
      name: 'balance',
      component: BalanceView,
      meta: {
        layout: 'Dashboard',
        requireAuth: true
      }
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingView,
      meta: {
        layout: 'Dashboard',
        requireAuth: true
      }
    },
    {
      path: '/cash',
      name: 'cash',
      component: CashView,
      meta: {
        layout: 'Dashboard',
        requireAuth: true
      }
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryView,
      meta: {
        layout: 'Dashboard',
        requireAuth: true
      }
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: ExpensesView,
      meta: {
        layout: 'Dashboard',
        requireAuth: true
      }
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: InvoicesView,
      meta: {
        layout: 'Dashboard',
        requireAuth: true
      }
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletView,
      meta: {
        layout: 'Dashboard',
        requireAuth: true
      }
    }
  ]
})

export default router
