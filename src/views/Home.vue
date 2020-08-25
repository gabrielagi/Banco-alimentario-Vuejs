<template>
  <div v-if="loading">
    <div class="loading-back-color">
      <div>
        <bannerHome/>
        <titleHome text="Bienvenidos al sitio del Banco Alimentario"/>
        <spinner class="margin-spinner"/>
      </div>
    </div>
  </div>
  <div v-else>
    <p>INICIO</p>
    <!-- <login-button text="Sign up" link="/login"/> -->
  </div>
</template>

<script>
//import loginButton from '@/components/buttons/LoginButton.vue'
import bannerHome from '@/components/banners/BannerHome.vue'
import titleHome from '@/components/titles/Title.vue'

export default {
  name: 'home',
  components: {
    // 'login-button': loginButton,
    bannerHome,
    titleHome
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    hide () {
      var $this = this
      setTimeout(function () {
        $this.loading = false
      }, 2000)
    }
  },
  created () {    //Ésta función predeterminada hace que se ejecute lo que contiene cuando se crea el componente
    this.hide()
  }
}
</script>

<style scoped>
  .loading-back-color {
    background-color: #9CD1C0;
    min-height: 100vh;
  }
  .margin-spinner {
    margin-top: 100px;
  }
</style>