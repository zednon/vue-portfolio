<template>
  <v-sheet
    class="py-md-4"
    height="100%"
    color="transparent"
    padding="5%"
    margine="10px"
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
          style="max-width: 100%; 
          padding: 5%;"
          
         
        >
          <core-subheading class="mb-4">
            Project Details
          </core-subheading>
          <core-text>
                 <span
        class="subheading"
        v-text="value.projectDetails"
      />
          </core-text>

          <core-subheading>
            Project Info
          </core-subheading>
          <v-list class="transparent">
            <v-list-item>
           
              <v-list-item-title class="mr-2">
                Try It for your self:
              </v-list-item-title>
              <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                       
                 <span
        class="subheading"">
        <a v-bind:href="value.tryIt"> Click here to View </a>
                 </span>
         
              </v-list-item-title>

            
              </v-list-item>
          
            <v-list-item>
              
              
              <v-list-item-title class="mr-2">
                View the Code:
              </v-list-item-title>
                          <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                       
                 <span
        class="subheading">
        <a v-bind:href="value.viewCode"> Click here to View The Code </a>
                 </span>
         
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
          projectDetails: '',
          tryIt: '',
          category: '',
          viewCode: '',
          src: undefined,
        }),
      },
    },
  }
</script>
