<template>
  <core-section id="what-i-can-do-for-you">
    <core-heading>What I can do for you.</core-heading>

    <v-col
      cols="12"
      md="6"
    >
      <v-expansion-panels
        v-model="expansion"
        popout
      >
        <v-expansion-panel
          v-for="(item,i) in items"
          :key="i"
        >
          <v-expansion-panel-header class="title font-weight-light">
            <div v-text="item.name" />
          </v-expansion-panel-header>

          <v-expansion-panel-content :class="expansion !== i ? 'transparent' : ''">
            <div>
              <v-card
                color="transparent"
                flat
              >
                <v-card-text>
                  <div
                    v-for="(text, j) in item.keywords"
                    :key="j"
                    v-text="text"
                  />
                </v-card-text>
              </v-card>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </core-section>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'WhatICanDoForYou',

    data: () => ({
      expansion: 0,
    }),

    computed: {
      ...mapState('app', ['schema']),
      items () {
        return this.schema.interests
      },
    },
  }
</script>
