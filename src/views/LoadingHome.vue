<template>
  <div class="loading-back-color">
    <div>
      <bannerHome/>
    </div>
  </div>
</template>

<script>

import bannerHome from '@/components/banners/BannerHome.vue'

export default {
  name: 'charginHome',
  components: {
    bannerHome
  }
}
</script>

<style scoped>
  .loading-back-color {
    background-color: #9CD1C0;
    min-height: 100vh;
  }
</style>