<template>
  <div>
    <loading v-if="isLoading"></loading>
    <div class="container content">
      <div class="form-row mt-md-5 mt-3 mb-5" v-if="step == 1 || step == 2 || step == 3">
        <div class="col-12 col-sm">
          <div class="alert alert-rounded font-weight-bold" role="alert" :class="{'alert-warning border border-warning': step === 1, 'alert-dark': step != 1}">
              step1. 確認購物清單
          </div>
        </div>
        <div class="col-12 col-sm">
          <div class="alert alert-rounded font-weight-bold" role="alert" :class="{'alert-warning border border-warning': step === 2, 'alert-dark': step != 2}">
              step2. 填寫購買資料
          </div>
        </div>
        <div class="col-12 col-sm">
          <div class="alert alert-rounded font-weight-bold" role="alert" :class="{'alert-warning border border-warning': step === 3, 'alert-dark': step != 3}">
              step3. 付款去
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <!-- step1 -->
      <div v-if="step === 1">
        <div v-for="item in cart.carts" :key="item.id">
          <div class="row">
            <div class="col-2 d-flex align-items-center justify-content-center">
              <div>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
            <div class="col-5 d-flex justify-content-center">
              <div>
                <img class="height-100px img-fluid" :src="item.product.imageUrl" alt="">
              </div>
            </div>
            <div class="col-5 d-flex align-items-center">
              <div>
              <span class="font-weight-bold">{{ item.product.title }}</span>
              <div class="text-success" v-if="item.coupon">
              已套用優惠券
              </div>
              <div class="mt-1"><a href="#" class="text-dark" @click.prevent="changeQty(item.id, item.product.id, item.qty, false)"><i class="fas fa-minus"></i></a> {{ item.qty }}{{ item.product.unit }} <a href="#" class="text-dark" @click.prevent="changeQty(item.id, item.product.id, item.qty, true)"><i class="fas fa-plus"></i></a></div>
              <div class="mt-1">{{ item.final_total }}</div>
              </div>
            </div>
          </div>
          <hr/>
        </div>
        <div class="d-flex justify-content-end">
          <p class="text-right mr-2">總計</p>
          <p class="text-right">{{ cart.total }}</p>
        </div>
        <div class="d-flex justify-content-end" v-if="cart.final_total !== cart.total">
          <p class="text-right text-success mr-2">折扣價</p>
          <p class="text-right text-success">{{ cart.final_total }}</p>
        </div>
        <div class="row justify-content-end mr-1">
            <div class="col-xs-6">
              <div class="input-group mb-3 input-group-sm">
                <input type="text" class="form-control border-dark input-width" placeholder="請輸入優惠碼" v-model="coupon_code">
                <div class="input-group-append">
                  <button class="btn border-dark" type="button" @click="addCouponCode">
                  套用優惠碼
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
        <!-- step2 -->
      <div class="m-0 row w-100 h-100" v-if="step === 2">
        <form class="col-md-12" @submit.prevent="createOrder">
          <div class="form-group">
            <label for="useremail">Email(必填)</label>
            <input type="email" class="form-control" name="email" id="useremail"
                v-model="form.user.email" v-validate="'required|email'" placeholder="請輸入 Email" :class="{'is-invalid': errors.has('email')}" required>
            <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
          </div>
          <div class="form-group">
            <label for="username">收件人姓名(必填)</label>
            <input type="text" class="form-control" name="name" id="username" v-validate="'required'"
                v-model="form.user.name" placeholder="輸入姓名" :class="{'is-invalid': errors.has('name')}">
            <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
          </div>
          <div class="form-group">
            <label for="usertel">收件人電話(必填)</label>
            <input type="tel" class="form-control" :class="{'is-invalid': errors.has('tel')}" name="tel" id="usertel" v-validate="'required'" v-model="form.user.tel" placeholder="請輸入電話">
            <span class="text-danger" v-if="errors.has('tel')">電話必須輸入</span>
          </div>
          <div class="form-group">
            <label for="useraddress">收件人地址(必填)</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.has('address')}" name="address" id="useraddress" v-validate="'required'" v-model="form.user.address"
                placeholder="請輸入地址">
            <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
          </div>
          <div class="form-group">
            <label for="comment">留言 (有什麼想告訴我們的請備註在此)</label>
            <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
          </div>
          <div class="d-flex">
            <div>
              <button type="button" class="btn btn-border" v-if="step === 2||step === 3" @click="step = step-1"><i class="fas fa-arrow-left"></i>上一步</button>
            </div>
            <div class="ml-auto">
              <button class="btn btn-color text-right">送出訂單<i class="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </form>
      </div>
        <!-- step3 -->
      <div class="my-5 row justify-content-center" v-if="step === 3">
        <form class="col-md-9" @submit.prevent="payOrder" >
          <table class="table">
            <thead>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ order.total }}</td>
              </tr>
            </tfoot>
          </table>
          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex">
              <button type="button" class="btn btn-color" v-if="step === 3" @click="step = step-1"><i class="fas fa-arrow-left"></i>上一步</button>
              <button type="button" class="btn btn-danger ml-auto" v-if="step === 3 && order.is_paid === false" @click="payOrder">付款去</button>
          </div>
        </form>
      </div>
        <!-- step4 完成 -->
      <div v-if="step === 4" class="d-flex justify-content-center align-items-center px-5 py-4 mt-5">
          <i class="fas fa-check-circle fa-4x"></i>
          <p class="h1 p-responsive">付款完成，已經收到您的訂單!</p>
      </div>
      <div class="d-flex justify-content-center">
        <a class="btn btn-color px-4 py-3" href="#/set/shopping?type=ALL" role="button" v-if="step === 4">繼續購物<i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="mb-5">
        <div class="d-flex">
          <a class="btn btn-border" href="#/set/shopping?type=ALL" role="button" v-if="step === 1">繼續購物</a>
          <div class="ml-auto">
            <button type="button" class="btn btn-color" @click="step = 2" v-if="step === 1">下一步<i class="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title text-white" id="exampleModalLabel">OOPS!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-center"><strong>您輸入的優惠碼無法使用！</strong></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title text-white" id="exampleModalLabel">OOPS!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-center"><strong>您的購物車為空！</strong></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import Loading from '@/components/forestage/Loading'
import { mapGetters } from 'vuex'
export default {
  components: {
    Loading
  },
  data () {
    return {
      status: {
        loadingItem: ''
      },
      coupon_code: '',
      form: {
        user: {
          name: '',
          tel: '',
          email: '',
          address: ''
        },
        message: ''
      },
      pagination: [],
      step: 1,
      order: {
        user: {}
      },
      orderId: '',
      coupons: []
    }
  },
  methods: {
    removeCartItem (id) {
      this.$store.dispatch('removeCartItem', id)
    },
    getCart () {
      this.$store.dispatch('getCart')
    },
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`
      const vm = this
      vm.$store.dispatch('updateLoading', true)
      vm.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false)
        vm.coupons = response.data.coupons
        vm.pagination = response.data.pagination
      })
    },
    addCouponCode () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const coupon = {
        code: vm.coupon_code
      }
      const filterCoupon = vm.coupons.filter(function (item) {
        return item.code === coupon.code
      })
      if (filterCoupon.length === 1) {
        vm.$store.dispatch('updateLoading', true)
        vm.$http.post(url, { data: coupon }).then((response) => {
          vm.getCart()
          vm.$store.dispatch('updateLoading', false)
        })
      } else {
        $('#couponModal').modal('show')
      }
    },
    createOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const order = vm.form
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$http.post(url, { data: order }).then((response) => {
            vm.orderId = response.data.orderId
            vm.getOrder()
            if (response.data.success) {
              vm.step = 3
            }
          })
        }
      })
    },
    getOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.$store.dispatch('updateLoading', true)
      vm.$http.get(url).then((response) => {
        vm.order = response.data.order
        vm.$store.dispatch('updateLoading', false)
      })
    },
    payOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.$store.dispatch('updateLoading', true)
      vm.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.getOrder()
          vm.step = 4
        }
        vm.$store.dispatch('updateLoading', false)
      })
    },
    changeQty (id, productId, qty, calc) {
      this.$store.commit('LOADING', true)
      let num
      if (calc === true) {
        num = qty + 1
      } else if (qty === 1) {
        num = 1
      } else {
        num = qty - 1
      }
      this.$store.dispatch('cartChangeQty', { id, productId, num })
    }
  },
  created () {
    this.getCart()
    this.getCoupons()
  },
  watch: {
    cart () {
      if (this.cart.carts.length === 0) {
        this.$router.push('/set/shopping?type=ALL')
      }
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    ...mapGetters(['products', 'cart'])
  }
}
</script>
