<template>
  <div class="mb-4">
    <h4
      class="text-uppercase mb-3 primary--text"
      v-text="value.name"
    />

    <div class="pl-md-4">
      <v-row
        v-for="(skill, i) in value.keywords"
        :key="i"
        align="center"
        class="mb-2 mx-0"
      >
        <v-col cols="4">
          <h5
            class="subheading"
            v-text="skill"
          />
        </v-col>
        <v-col cols="8">
          <v-rating
            length="6"
            dense
            empty-icon="mdi-record"
            full-icon="mdi-record"
            :value="value.level"
            background-color="grey darken-4"
            readonly
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        default: () => ({
          category: '',
          skills: [],
        }),
      },
    },
  }
</script>
