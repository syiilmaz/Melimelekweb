import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fc28fa6e = () => interopDefault(import('../pages/acc/index.vue' /* webpackChunkName: "pages/acc/index" */))
const _928e1124 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _cb7b8df4 = () => interopDefault(import('../pages/filter/index.vue' /* webpackChunkName: "pages/filter/index" */))
const _32b41071 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _6f48b192 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _7d151a4f = () => interopDefault(import('../pages/product/productId.vue' /* webpackChunkName: "pages/product/productId" */))
const _54717157 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/acc",
    component: _fc28fa6e,
    name: "acc"
  }, {
    path: "/cart",
    component: _928e1124,
    name: "cart"
  }, {
    path: "/filter",
    component: _cb7b8df4,
    name: "filter"
  }, {
    path: "/login",
    component: _32b41071,
    name: "login"
  }, {
    path: "/product",
    component: _6f48b192,
    name: "product"
  }, {
    path: "/product/productId",
    component: _7d151a4f,
    name: "product-productId"
  }, {
    path: "/",
    component: _54717157,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
