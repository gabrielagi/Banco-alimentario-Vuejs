<template>
  <a class="btn btn-register">
    {{text}}
  </a>
</template>

<script>
export default {
  props: {
    text: String,
    link: String
  }
}
</script>

<style scoped>
  .btn-register {
    background-color: green;
  }
</style>