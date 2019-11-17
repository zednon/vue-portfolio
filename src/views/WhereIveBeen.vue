<template>
  <core-section id="where-ive-been">
    <core-heading>Where I've been</core-heading>

    <v-col
      cols="12"
      md="9"
      class="mx-auto px-0"
    >
      <v-timeline
        :dense="$vuetify.breakpoint.smAndDown"
        :light="light"
      >
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          v-bind="getAttrs()"
        >
          <span
            slot="opposite"
            v-text="item.startDate.slice(0, 4)"
          />

          <v-card class="pa-3">
            <h3
              class="subheading font-weight-bold"
              v-text="item.company"
            />
            <div v-text="item.summary" />
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </core-section>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'WhereIveBeen',

    data: vm => ({
      light: vm.random(),
    }),

    computed: {
      ...mapState('app', ['schema']),
      items () {
        return this.schema.work
      },
    },

    methods: {
      getAttrs () {
        const attrs = {}

        if (this.random()) attrs.fillDot = true
        if (this.random()) attrs.largeDot = true

        return attrs
      },
      random () {
        return Boolean(Math.round(Math.random()))
      },
    },
  }
</script>
