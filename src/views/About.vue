<template>
  <div>
    <v-container fluid class="pt-0">
        <v-row justify="center">
            <v-col cols="12" md="10">
                <v-img class="white--text d-flex align-center" max-height="600" src="../assets/about.avif" 
                gradient="to top right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)" cover>
                    <div class="mx-16 px-16">
                        <p class="text-h3 pb-4 font-weight-bold c-white">Diversify your tech view</p>
                        <p class="text-subtitle-1 font-weight-light c-white">I started this blog to explore differents perspectives around tech</p>
                    </div>
                </v-img>
                <p class="text-body-1 font-weight-light pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis mollis dui. Suspendisse arcu lacus, ornare et odio et, laoreet venenatis erat. Etiam laoreet viverra tortor. Proin ac elit eu libero lobortis imperdiet. Morbi quis odio et ipsum condimentum imperdiet ac quis metus. Aliquam a elit nec massa congue consequat dignissim auctor eros. Ut convallis et nunc cursus gravida. Sed accumsan eget orci in scelerisque. Nam pharetra justo vel odio sodales, ut condimentum mi aliquam. Aenean in cursus enim. Suspendisse eu nulla non sem varius pulvinar. Aliquam varius sit amet arcu a sollicitudin. Mauris scelerisque, nisl ultricies efficitur aliquam, urna mi porta mauris, at dapibus ligula risus quis mi. Proin et blandit nulla, non sollicitudin neque. Integer id ultrices libero.
                </p>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
    name: 'About'
}
</script>

<style scoped>
  .v-container{
    background-color: transparent;
  }

  .c-white{
    color: #fff;
  }

  a{
    color: inherit;
  }
</style>