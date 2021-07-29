<template>
    <div>
    <v-app-bar app color="indigo lighten-1" dark> 
      <router-link to="/">
        <v-img class="mx-2" :src="require('@/assets/logo.png')" max-height="40" max-width="40" contain/>
      </router-link>
      <v-toolbar-title>VueBlog</v-toolbar-title>

      <v-divider class="mx-4" vertical/>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="about">About</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items v-if="!$store.state.loggedIn">
        <v-btn text to="register">Sign up</v-btn>
        <v-btn text to="login">Sign in</v-btn>
      </v-toolbar-items>
      <div v-if="$store.state.loggedIn">
        <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-account</v-icon></v-btn>
        <v-btn @click="logout" icon><v-icon>mdi-logout</v-icon></v-btn>
      </div>
    </v-app-bar>
    <!--<v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>

        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="register">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>-->
    </div>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
      drawer: null,
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