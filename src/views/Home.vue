<template>
  <div>
    <hero />

    <v-container
      class="py-5 px-0"
      fluid
    >
      <who-i-am />

      <what-i-can-do-for-you />

      <where-ive-been />

      <what-i-know />

      <what-ive-done />

      <what-my-clients-say />

      <lets-talk />
    </v-container>
  </div>
</template>

<script>
  export default {
    components: {
      Hero: () => import('@/views/Hero'),
      WhoIAm: () => import('@/views/WhoIAm'),
      WhatICanDoForYou: () => import('@/views/WhatICanDoForYou'),
      WhereIveBeen: () => import('@/views/WhereIveBeen'),
      WhatIKnow: () => import('@/views/WhatIKnow'),
      WhatIveDone: () => import('@/views/WhatIveDone'),
      WhatMyClientsSay: () => import('@/views/WhatMyClientsSay'),
      LetsTalk: () => import('@/views/LetsTalk'),
    },

    metaInfo () {
      return {
        title: this.$i18n.t('Home.title'),
      }
    },

    data: () => ({
      //
    }),
  }
</script>
