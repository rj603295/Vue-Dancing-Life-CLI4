<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="dropdown ml-auto fixed">
      <button class="btn btn-sm btn-cart" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div class="rounded-circle shadow-lg bg-white">
          <i class="fa fa-shopping-cart fa-2x p-3 position-relative">
            <div class="position-absolute badge-position">
              <h6><span class="badge badge-pill badge-danger" v-if="cart.carts.length>0">{{ cart.carts.length }}</span></h6>
            </div>
          </i>
        </div>
      </button>
      <div class="dropdown-menu dropdown-menu-right drop-menu-width">
        <div class="px-3 py-3">
          <h6 class="mb-2 text-center font-weight-bold">已選擇商品</h6>
          <div class="d-flex align-items-center justify-content-center">
            <p class="m-0" v-if="cart.carts.length === 0">還沒有商品！</p>
          </div>
          <div class="table-responsive">
            <table class="table table-sm">
              <tbody v-for="item in cart.carts" :key="item.product.product_id">
                <tr>
                  <td class="align-middle" width="5%">
                    <a href="#" class="text-secondary" @click="removeCartItem(item.id)"><i class="fas fa-trash"></i></a>
                  </td>
                  <td width="80%">{{ item.product.title }}</td>
                </tr>
                <tr>
                  <td></td>
                  <td class="text-right">{{ item.qty }}{{ item.product.unit }}  {{ item.total }}元</td>
                </tr>
              </tbody>
            </table>
          </div>
          <router-link v-if="cart.carts.length !== 0" to="/set/check" class="btn btn-border btn-block">結帳去</router-link>
          <router-link v-if="cart.carts.length == 0" to="/set/shopping" class="btn btn-border btn-block">購物去</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    removeCartItem (id) {
      this.$store.dispatch('removeCartItem', id)
    }
  },
  computed: {
    ...mapGetters(['cart'])
  }
}
</script>
