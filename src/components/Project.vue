<template>
  <v-sheet
    class="py-md-5"
    height="100%"
    color="transparent"
  >
    <div class="text-center mb-5">
      <core-subheading
        class="mb-1"
        v-text="value.name"
      />
      <span
        class="subheading"
        v-text="value.category"
      />
    </div>
    <v-row>
      <v-col cols="auto">
        <div
          class="mb-3"
          style="max-width: 500px;"
        >
          <core-subheading class="mb-3">
            Project Details
          </core-subheading>
          <core-text>
            In ac felis quis tortor malesuada pretium. Phasellus dolor. Fusce fermentum odio nec arcu. Integer tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac felis quis tortor malesuada pretium. Phasellus dolor. Fusce fermentum odio nec arcu. Integer tincidunt.
          </core-text>

          <core-subheading>
            Project Info
          </core-subheading>
          <v-list class="transparent">
            <v-list-item>
              <v-list-item-action>
                <v-icon color="primary">
                  mdi-account
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Client Name
              </v-list-item-title>
              <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                the clients name
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="primary">
                  mdi-calendar
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Project Dates
              </v-list-item-title>
              <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                date, date
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="primary">
                  mdi-tag
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Project Category
              </v-list-item-title>
              <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                category, category, category
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col
        v-if="value.src"
        class="hidden-sm-and-down"
      >
        <v-img
          :src="require(`@/assets/projects/${value.src}`)"
          height="350"
          width="500"
          contain
          class="mx-auto"
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        default: () => ({
          name: '',
          category: '',
          src: undefined,
        }),
      },
    },
  }
</script>
