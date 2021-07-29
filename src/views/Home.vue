<template>
  <div>
    <div class="banner">
      <v-img class="white--text banner-image" aspect-ratio="4.5" src="../assets/danial-ricaros-FCHlYvR5gJI-unsplash.jpg">
        <v-row class="banner-wrap" align-content="center">
          <div class="banner-content">
              <p class="banner-title display-3">Welcome to my blog</p>
              <p class="banner-title headline">Enjoy your stay and post your articles</p>
          </div>
        </v-row>
      </v-img>
    </div>

    <v-container>
        <v-row>
          <v-col cols="9">
            <PostList v-bind:posts="posts"/>
            <v-pagination :length="15" :total-visible="7" circle/>
          </v-col>

          <v-col cols="3" class="side-panel">
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
  .banner-wrap{
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
  }

  .banner-content{
    padding-left: 10%;
  }

  .banner-content p {
    display: block;
  }

  .banner{
    margin-right: -12px;
    margin-left: -12px;
    margin-top: -12px;
  }

  .side-panel {
    padding-left: 24px;
  }
</style>