<template>
  <div>
    <Navbar/>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/backstage/Sidebar.vue'
import Navbar from '@/components/backstage/Navbar.vue'
import Alert from '@/components/backstage/AlertMessage.vue'
export default {
  components: {
    Sidebar,
    Navbar,
    Alert
  },
  created () {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = myCookie
  },
  data () {
    return {

    }
  }
}
</script>
