<template>
  <div class="my-4">
    <a
      v-for="(social, i) in socials"
      :key="i"
      :href="social.url"
      class="mx-2"
      :title="`${social.network} profile`"
    >
      <v-icon v-text="social.icon" />
    </a>
  </div>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    data: () => ({
      iconMap: {
        github: 'mdi-github-box',
        linkedin: 'mdi-linkedin-box',
        twitter: 'mdi-twitter-box',
      },
    }),
    computed: {
      ...mapState('app', ['schema']),
      socials () {
        return this.schema.basics.profiles.map(social => ({
          ...social,
          icon: this.iconMap[social.network.toLowerCase()] || 'mdi-account',
        }))
      },
    },
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
