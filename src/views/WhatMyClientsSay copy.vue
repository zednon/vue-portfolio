<template>
  <core-section id="what-my-clients-say">
    <abstract-4 />

    <core-heading>What my clients say.</core-heading>

    <v-col
      v-for="(client, i) in clients"
      :key="`quote-${i}`"
      cols="12"
      md="4"
    >
      <client :value="client" />
    </v-col>

    <template v-if="logos.length">
      <v-col
        v-for="(logo, i) in logos"
        :key="`logo-${i}`"
        cols="12"
        md="3"
      >
        <v-img
          :src="require(`@/assets/logos/${logo}`)"
          contain
          height="75"
        />
      </v-col>
    </template>
  </core-section>
</template>

<script>
  export default {
    name: 'WhatMyClientsSay',

    components: {
      Abstract4: () => import('@/components/Abstract4'),
      Client: () => import('@/components/Client'),
    },

    data: () => ({
      clients: [
        {
          quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
          name: 'J. Williams',
          company: 'Motion',
          avatar: 'Client1.png',
        },
        {
          quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
          name: 'A. Long',
          company: 'Classic Cafe',
          avatar: 'Client2.png',
        },
        {
          quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
          name: 'M. Hernandez',
          company: 'Flagship',
          avatar: 'Client3.png',
        },
        {
          quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
          name: 'L. McCannon',
          company: 'Motion',
          avatar: 'Client4.png',
        },
        {
          quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
          name: 'A. Mah',
          company: 'Classic Cafe',
          avatar: 'Client5.png',
        },
        {
          quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
          name: 'H. Russo',
          company: 'Flagship',
          avatar: 'Client6.png',
        },
      ],
      logos: [
        'motion.png',
        'cafe.png',
        'flagship.png',
        'biere.png',
      ],
    }),
  }
</script>
