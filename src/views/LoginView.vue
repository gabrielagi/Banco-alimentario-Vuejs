<template>
  <div class="home">
    <login-button text="Login" link="/login"/>
  </div>
</template>

<script>
// @ is an alias to /src
import loginButton from '@/components/buttons/LoginButton.vue'

export default {
  name: 'home',
  components: {
    'login-button': loginButton
  }
}
</script>
