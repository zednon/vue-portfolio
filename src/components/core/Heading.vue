<template>
  <v-col :cols="cols">
    <h2
      :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
      class="font-weight-bold primary--text mb-4"
    >
      <slot />
    </h2>
  </v-col>
</template>

<script>
  export default {
    name: 'CoreHeading',

    props: {
      cols: {
        type: String,
        default: '12',
      },
    },
  }
</script>
