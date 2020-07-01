import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    products: [],
    pagination: [],
    cart: []
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    PRODUCTS (state, payload) {
      state.products = payload
    },
    PAGINATION (state, payload) {
      state.pagination = payload
    },
    CART (state, payload) {
      state.cart = payload
    }
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    },
    getProducts (context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      context.commit('LOADING', true)
      axios.get(api).then((response) => {
        context.commit('LOADING', false)
        context.commit('PRODUCTS', response.data.products)
        context.commit('PAGINATION', response.data.pagination)
      })
    },
    getCart (context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true)
      axios.get(url).then((response) => {
        context.commit('CART', response.data.data)
        context.commit('LOADING', false)
      })
    },
    removeCartItem (context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      context.commit('LOADING', true)
      axios.delete(url).then((response) => {
        context.dispatch('getCart')
        context.commit('LOADING', false)
      })
    },
    addtoCart (context, { id, qty = 1 }) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      context.commit('LOADING', true)
      axios.post(url, { data: cart }).then((response) => {
        context.commit('LOADING', false)
        context.dispatch('getCart')
      })
    },
    updateProductQty (context, { originCartId, originProductId, newQty }) {
      context.commit('LOADING', true)
      const delAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${originCartId}`
      const addAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const changeCart = {
        product_id: originProductId,
        qty: newQty
      }
      axios
        .all([axios.delete(delAPI), axios.post(addAPI, { data: changeCart })])
        .then(axios.spread(() => {
          context.dispatch('getCart')
          context.commit('LOADING', false)
        }))
    },
    cartChangeQty (context, { id, productId, num }) {
      const delAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      const addAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const newCart = {
        product_id: productId,
        qty: num
      }
      axios
        .all([axios.delete(delAPI), axios.post(addAPI, { data: newCart })])
        .then(axios.spread(() => {
          context.dispatch('getCart')
          context.commit('LOADING', false)
        }))
    }
  },
  getters: {
    products (state) {
      return state.products
    },
    cart (state) {
      return state.cart
    }
  },
  modules: {
  }
})
