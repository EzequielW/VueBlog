<template>
    <div>
      <v-app-bar color="indigo lighten-1 px-sm-14" fade-on-scroll dark> 
        <v-app-bar-nav-icon @click="drawer = true" v-show="xs"></v-app-bar-nav-icon>
        <router-link to="/">
          <v-img class="mx-2" src="@/assets/logo.png" height="35" width="180"/>
        </router-link>

        <!-- Main navigation, just two pages -->
        <div v-if="smAndUp">
          <v-btn to="/" color="white--text">Home</v-btn>
          <v-btn class="mr-auto" to="about" color="white--text">About</v-btn>
        </div>
        <v-spacer></v-spacer>

        <!-- Sign buttons on sm plus devices -->
        <div v-if="!$store.state.loggedIn && smAndUp">
          <v-btn to="login">Sign in</v-btn>
          <v-btn to="register">Sign up</v-btn>
        </div>

        <!-- Actions when already logged in -->
        <div v-if="$store.state.loggedIn">
          <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
          <v-btn icon><v-icon>mdi-account</v-icon></v-btn>
          <v-btn icon @click="logout"><v-icon>mdi-logout</v-icon></v-btn>
        </div>
        
        <!-- Mobile only sign in/up button -->
        <v-menu left bottom v-if="!$store.state.loggedIn && xs">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="login">
              <v-list-item-title>Sign in</v-list-item-title>
            </v-list-item>
            <v-list-item to="register">
              <v-list-item-title>Sign up</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <!-- Main navigation on xs devices -->
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item to="/">
              <v-icon>mdi-home</v-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="about">
              <v-icon>mdi-information-outline</v-icon>
              <v-list-item-title>about</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </div>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
    name: 'Header',
    data: () => ({
      drawer: false,
      group: null
    }),
    methods: {
      logout() {
        this.$store.dispatch('removeToken');

        console.log(this.$router.currentRoute)
        if(this.$router.currentRoute.name !== 'home') {
          this.$router.push('/')
        }
        else this.$router.go(0)
      }
    },
    setup () {
      // Destructure only the keys we want to use
      const { xs, smAndUp } = useDisplay()

      return { xs, smAndUp }
    }
}
</script>

<style scoped>
  a{
    color: inherit;
  }

  .v-toolbar__title{
    cursor: pointer;
  }
</style>