<template>
  <div>
    <v-img class="white--text d-flex align-center" aspect-ratio="4.5" src="../assets/danial-ricaros-FCHlYvR5gJI-unsplash.jpg" 
      gradient="to top right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)">
      <div class="pa-16">
          <p class="display-3">Welcome to my blog</p>
          <p class="headline">Enjoy your stay and post your articles</p>
      </div>
    </v-img>

    <v-container>
        <v-row>
          <v-col cols="9">
            <PostList v-bind:posts="posts"/>
            <v-pagination :length="15" :total-visible="7" circle/>
          </v-col>

          <v-col cols="3" class="side-panel pl-8">
            <SidePanel />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import api from '../services/Api'
import PostList from '../components/PostList'
import SidePanel from '../components/SidePanel'

export default {
    name: 'Home',
    components: {
      PostList, SidePanel
    },
    data (){
      return {
        posts: ''
      }
    },
    created() {
        api().get('posts')
        .then(res => this.posts = res.data)
        .catch(err => console.log(err))
    },
}
</script>

<style scoped>
</style>