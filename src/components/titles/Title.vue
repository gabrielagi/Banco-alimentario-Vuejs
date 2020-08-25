<template>
    <p class="title-style">
      {{text}}
    </p>
</template>

<script>
export default {
  props: {
    text: String,
  }
}
</script>

<style scoped>
  .title-style {
    font-size: 38px !important;
    letter-spacing: 0.02em;
    color: white;
    font-weight: 600;
    margin-top: 100px;
  }
</style>