<template>
  <div>
    <Loading v-if="isLoading"></Loading>
    <div class="container-fluid content">
      <div class="row mt-4">
        <div class="col-md-3 mb-4" v-for="item in filterProducts" :key="item.id">
          <div class="card border-0 card-wrap"  @click="getProduct(item.id, $event)">
            <div class="mx-3 d-flex justify-content-center align-items-center">
              <img :src="item.imageUrl" alt="" class="img-fluid height-width-350px">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">
                <a href="#" class="text-dark">{{ item.title }}</a>
              </h5>
              <div class="price">
                <del class="h6">{{ item.orgin_price }}</del>
                <p class="h5 text-center">{{ '$'+item.price }}</p>
              </div>
            </div>
            <div class="price-wrap animate__animated animate__fadeIn">
              <div class="price-overlay p-3 bg-light rounded shadow-lg">
                <p class="h5 text-center">{{ '$'+item.price }}</p>
                <a class="btn btn-button" href="#" role="button" @click.prevent="addtoCart(item.id)">加入購物車</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cart v-if="cart.carts"></Cart>
  </div>
</template>
<script>
import Cart from '@/components/forestage/Cart'
import Loading from '@/components/forestage/Loading'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Cart,
    Loading
  },
  data () {
    return {
      product: {},
      status: {
        loadingItem: ''
      }

    }
  },
  methods: {
    getProducts () {
      this.$store.dispatch('getProducts')
    },
    getProduct (id, event) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      vm.status.loadingItem = id
      vm.$http.get(url).then((response) => {
        vm.product = response.data.product
        vm.status.loadingItem = ''
        if (event.target.tagName === 'A') {

        } else {
          vm.$router.push(`shopping/${response.data.product.id}`)
        }
      })
    },
    getCart () {
      this.$store.dispatch('getCart')
    },
    addtoCart (id, qty = 1) {
      const vm = this
      const target = this.cart.carts.filter(items => items.product_id === id)
      if (target.length > 0) {
        const sameCartItem = target[0]
        const originQty = sameCartItem.qty
        const originCartId = sameCartItem.id
        const originProductId = sameCartItem.product.id
        const newQty = originQty + qty
        this.$store.dispatch('updateProductQty', { originCartId, originProductId, newQty })
      } else {
        this.$store.dispatch('addtoCart', { id, qty })
      }
      vm.$bus.$emit('message:push', '成功加入購物車', 'warning')
    },
    ...mapActions(['getProducts'])
  },
  created () {
    this.getProducts()
    this.getCart()
  },
  computed: {
    filterProducts: function () {
      const enabledProducts = []
      this.products.forEach(function (item) {
        if (item.is_enalbed === 1) {
          enabledProducts.push(item)
        }
      })
      if (this.$route.query.type === 'ALL' || this.$route.query.type === undefined) {
        return enabledProducts
      } else if (this.$route.query.type === 'TEE') {
        const newProducts = []
        enabledProducts.forEach(function (item) {
          if (item.category === 'TEE') {
            newProducts.push(item)
          }
        })
        return newProducts
      } else if (this.$route.query.type === 'PANTS') {
        const newProducts = []
        enabledProducts.forEach(function (item) {
          if (item.category === 'PANTS') {
            newProducts.push(item)
          }
        })
        return newProducts
      } else if (this.$route.query.type === 'SHOES') {
        const newProducts = []
        enabledProducts.forEach(function (item) {
          if (item.category === 'SHOES') {
            newProducts.push(item)
          }
        })
        return newProducts
      } else if (this.$route.query.type === 'HAT') {
        const newProducts = []
        enabledProducts.forEach(function (item) {
          if (item.category === 'HAT') {
            newProducts.push(item)
          }
        })
        return newProducts
      } else if (this.$route.query.type === 'OTHERS') {
        const newProducts = []
        enabledProducts.forEach(function (item) {
          if (item.category === 'OTHERS') {
            newProducts.push(item)
          }
        })
        return newProducts
      } else if (this.$route.query.type === 'ACCESSORIES') {
        const newProducts = []
        enabledProducts.forEach(function (item) {
          if (item.category === 'HAT' || item.category === 'OTHERS') {
            newProducts.push(item)
          }
        })
        return newProducts
      } else if (this.$route.query.type === 'JACKET') {
        const newProducts = []
        enabledProducts.forEach(function (item) {
          if (item.category === 'JACKET') {
            newProducts.push(item)
          }
        })
        return newProducts
      }
      return []
    },
    isLoading () {
      return this.$store.state.isLoading
    },
    ...mapGetters(['products', 'cart'])
  }
}
</script>
