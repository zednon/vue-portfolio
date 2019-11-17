<template>
  <v-navigation-drawer
    v-if="$vuetify.breakpoint.mdAndUp"
    app
    class="text-center"
    color="#181818"
    permanent
  >
    <v-row
      align="center"
      class="flex-column fill-height py-5 mx-0"
      justify="center"
    >
      <h2
        class="display-3 font-weight-black primary--text mb-2"
        v-text="initials"
      />
      <div
        class="display-1 mb-2"
        v-text="schema.basics.name"
      />
      <span
        class="title font-weight-light mb-5"
        v-text="schema.basics.label"
      />
      <div
        v-for="(item, i) in items"
        :key="i"
      >
        <v-btn
          class="text-capitalize subheading font-weight-light mb-3"
          text
          @click="$vuetify.goTo(item.to)"
        >
          <span v-text="item.text" />
        </v-btn>
      </div>
      <div class="mt-auto">
        <social-contacts />
      </div>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'Drawer',

    components: {
      SocialContacts: () => import('@/components/SocialContacts'),
    },

    data: vm => ({
      items: [
        {
          text: 'About Me',
          to: '#who-i-am',
        },
        {
          text: 'Services',
          to: '#what-i-can-do-for-you',
        },
        {
          text: 'Experience',
          to: '#where-ive-been',
        },
        {
          text: 'Skills & Education',
          to: '#what-i-know',
        },
        {
          text: 'Portfolio',
          to: '#what-ive-done',
        },
        {
          text: 'Clients',
          to: '#what-my-clients-say',
        },
        {
          text: 'Contact',
          to: '#lets-talk',
        },
      ],
    }),

    computed: {
      ...mapState('app', ['initials', 'schema']),
    },
  }
</script>
