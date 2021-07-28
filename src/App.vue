<template>
  <v-app id="main-app">
    <Header />

    <v-content>
      <v-container fluid>
        <router-view/>
        <router-link v-if="$store.state.loggedIn" to="/write">
          <v-btn
            color="green"
            fab
            fixed
            large
            dark
            bottom
            right
            class="v-btn--example"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </router-link>
      </v-container>
    </v-content>

    
    
    <v-footer
      color="indigo lighten-1"
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/layout/Header';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style scoped>
</style>
