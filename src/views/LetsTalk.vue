<template>
  <core-section id="lets-talk">
    <core-heading>Let's talk.</core-heading>

    <v-col
      cols="12"
      md="5"
      class="mb-4 pr-md-5"
    >
      <core-subheading class="text-uppercase">
        What can I do for you?
      </core-subheading>

      <core-text class="mb-5">
   Please Contact me if you have any quesitons about my work and would like to speak to me. 
      </core-text>
<!-- 
      <core-subheading class="text-uppercase mb-3">
        Send me a Message
      </core-subheading>

      <v-form>
        <v-text-field
          solo-inverted
          flat
          label="Name"
        />

        <v-text-field
          solo-inverted
          flat
          label="Email"
        />

        <v-text-field
          solo-inverted
          flat
          label="Subject"
        />

        <v-textarea
          solo-inverted
          flat
          label="Message"
        />

        <v-btn
          class="ma-0"
          color="primary"
        >
          Contact Me
        </v-btn>
      </v-form>-->
    </v-col> 

    <v-col
      cols="12"
      md="4"
      class="text-left"
    >
      <core-subheading class="text-uppercase">
     Contacts Me:
      </core-subheading>

      <social-contacts />

      <v-list
        class="transparent"
        three-line
      >
       
         
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              size="48"
              color="primary"
              class="mr-5"
            >
              mdi-email
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Email
            </v-list-item-title>
            <v-list-item-subtitle v-text="schema.basics.email" />
          </v-list-item-content>
        </v-list-item>
      
      </v-list>
    </v-col>

  </core-section>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'LetsTalk',

    components: {
      SocialContacts: () => import('@/components/SocialContacts'),
    },

    computed: {
      ...mapState('app', ['schema']),
    },
  }
</script>
