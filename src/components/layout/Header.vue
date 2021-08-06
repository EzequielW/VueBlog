<template>
    <div>
      <v-app-bar color="indigo lighten-1 px-sm-14" fade-on-scroll dark> 
        <v-app-bar-nav-icon @click="drawer = true" v-show="$vuetify.breakpoint.xsOnly"></v-app-bar-nav-icon>
        <router-link to="/">
          <v-img class="mx-2" :src="require('@/assets/logo.png')" max-height="40" max-width="40" contain/>
        </router-link>
        <v-toolbar-title>VueBlog</v-toolbar-title>

        <v-divider class="mx-4" vertical v-show="$vuetify.breakpoint.smAndUp"/>

        <!-- Main navigation, just two pages -->
        <v-toolbar-items v-show="$vuetify.breakpoint.smAndUp">
          <v-btn text to="/">Home</v-btn>
          <v-btn class="mr-auto" text to="about">About</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <!-- Sign buttons on sm plus devices -->
        <v-toolbar-items v-if="!$store.state.loggedIn && $vuetify.breakpoint.smAndUp">
          <v-btn text to="login">Sign in</v-btn>
          <v-btn text to="register">Sign up</v-btn>
        </v-toolbar-items>

        <!-- Actions when already logged in -->
        <v-toolbar-items v-if="$store.state.loggedIn">
          <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
          <v-btn icon><v-icon>mdi-account</v-icon></v-btn>
          <v-btn @click="logout" icon><v-icon>mdi-logout</v-icon></v-btn>
        </v-toolbar-items>
        
        <!-- Mobile only sign in/up button -->
        <v-menu left bottom v-if="!$store.state.loggedIn && $vuetify.breakpoint.xsOnly">
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
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item to="/">
              <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="about">
              <v-list-item-icon><v-icon>mdi-information-outline</v-icon></v-list-item-icon>
              <v-list-item-title>about</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
</template>

<script>
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
    }
}
</script>

<style scoped>
  .v-toolbar__title{
    cursor: pointer;
  }
</style>