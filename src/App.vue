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
    
    <v-footer color="indigo lighten-1">
      <span class="white--text">&copy; 2019</span>
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
