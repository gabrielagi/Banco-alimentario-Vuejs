<template>
    <a class="btn btn-primary" :href="link">
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

</style>