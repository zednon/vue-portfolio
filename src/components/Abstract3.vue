<template>
  <v-img
    :src="require('@/assets/abstract3.png')"
    class="abstract-3"
    height="100%"
    width="100%"
  />
</template>

<style lang="sass">
.abstract-3
  position: absolute !important
  left: 0
  right: 0
  z-index: 0 !important

  ~ *
    z-index: 1 !important
</style>
