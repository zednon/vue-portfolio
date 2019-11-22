<template>
  <core-section id="what-ive-done">
    <abstract-3 />

    <core-heading>What I've made</core-heading>

    <v-col cols="12">
      <v-carousel
        :cycle="false"
        :height="950"
        :show-arrows="false"
        class="elevation-5"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(project, i) in projects"
          :key="i"
        >
          <project :value="project" />
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </core-section>
</template>

<script>
  export default {
    name: 'WhatIveDone',

    components: {
      Abstract3: () => import('@/components/Abstract3'),
      Project: () => import('@/components/Project'),
    },

    data: () => ({
      projects: [
        {
          name: 'Click Me',
          projectDetails: 'This project is a game that uses photos in a array to randomly sort the imanges and using React to reshuffle them. The layout was done using CSS Grid. This project is also 100% ADA complant',
          category: 'React, TypeScript, HTML, CSS, JavaScript, ARIA',
          tryIt: 'https://zednon.github.io/clickMe/',
          viewCode: 'https://github.com/zednon/clickMe',
          src: 'ClickMe.png',
        },
        {
      name: 'Bamazon',
          projectDetails: 'This project is a that uses a MySpl data base to keep track of orders',
          category: 'Git, Node.js, MySql',
          tryIt: 'https://github.com/zednon/bamazon',
          viewCode: 'https://github.com/zednon/bamazon',
          src: 'bamazon.png',
        },
        {
        name: 'GifTastic',
          projectDetails: 'This project uses a API call to pull gifs as per the uses request and givees the user a place to serch for gifs of a topic of there choice',
          category: 'JavaScript, HTML, CSS',
          tryIt: 'https://zednon.github.io/GifTastic/',
          viewCode: 'https://github.com/zednon/GifTastic',
          src: 'Giphy.png',
        },
      
      ],
    }),
  }
</script>
