<template>
  <v-img
    :src="require('@/assets/abstract1.png')"
    class="abstract-1"
    height="528"
    width="613"
  />
</template>

<style lang="sass">
.abstract-1
  position: absolute !important
  left: -48px
  top: -48px
  z-index: 0 !important

  ~ *
    z-index: 1 !important
</style>
