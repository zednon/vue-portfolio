<template>
<core-section id="what-my-clients-say">
    <abstract-4 />
     <core-heading>What my clients say.</core-heading>

  <v-card 
    v-for="(client, i) in projects"
      :key="i"
    max-width="344"
    class="mx-auto"
  >  
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      height="194"
    ></v-img>

    <v-card-text>
      <client :value="client" />
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="accent2"
      >
        Read
      </v-btn>
      <v-btn
        text
        color="accent2"
      >
        Bookmark
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
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
      projects: [
        {
          quote: 'A project using the React Library and CSS Grid',
          name: 'Click Me',
          company: 'React',
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
