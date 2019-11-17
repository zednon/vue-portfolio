<template>
  <v-img
    :src="require('@/assets/abstract4.png')"
    class="abstract-4"
    height="90%"
    width="100%"
  />
</template>

<style lang="sass">
.abstract-4
  position: absolute !important
  left: 0
  right: 0
  top: 50%
  z-index: 0 !important

  ~ *
    z-index: 1 !important
</style>
