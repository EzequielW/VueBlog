<template>
  <v-app id="main-app">
    <Header />

    <v-main>
      <v-container fluid>
        <router-view/>
        <router-link v-if="$store.state.loggedIn" to="/write">
          <v-btn color="green" class="v-btn--example" fab fixed large dark bottom right>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </router-link>
      </v-container>
    </v-main>
    
    <v-footer color="indigo lighten-1">
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
