<template>
  <div>
    <FrontNavbar class="sticky-top"></FrontNavbar>
    <Alert></Alert>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/forestage/Footer.vue'
import FrontNavbar from '@/components/forestage/FrontNavbar.vue'
import Alert from '@/components/backstage/AlertMessage.vue'
export default {
  components: {
    FrontNavbar,
    Footer,
    Alert
  },
  data () {
    return {

    }
  }
}
</script>
