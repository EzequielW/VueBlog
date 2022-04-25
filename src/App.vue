<template>
  <v-app id="main-app">
    <Header />

    <v-main >
      <router-view/>
      <router-link v-if="$store.state.loggedIn && $route.name!=='write'" to="/write">
        <v-btn color="green" icon size="x-large" id="write-fab">
          <v-icon color="white">mdi-plus</v-icon>
        </v-btn>
      </router-link>
      
    </v-main>
    
    <v-footer
      class="bg-indigo-lighten-1 text-center d-flex flex-column"
    >
      <div>
        <v-btn variant="text" icon>
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn variant="text" icon>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </div>

      <div class="text-white pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </div>

      <v-divider></v-divider>

      <div class="text-white">
        2022 — <strong>SC Tech</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }

  .v-main{
    background-color: #F6F6F6;
    min-height: 100vh;
  }

  #write-fab{
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;
  }
</style>
