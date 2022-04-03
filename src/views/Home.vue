<template>
  <div>
    <v-img class="white--text d-flex align-center" aspect-ratio="4.5" src="../assets/danial-ricaros-FCHlYvR5gJI-unsplash.jpg" 
      gradient="to top right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)">
      <div class="ma-16 pa-16">
          <p class="display-3">Welcome to my blog</p>
          <p class="headline">Enjoy your stay and post your articles</p>
      </div>
    </v-img>

    <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-row>
              <v-col cols="12" md="9">
                <PostList v-bind:posts="posts"/>
                <v-pagination v-model="page" :length="totalPages" :total-visible="2" @input="changePage" circle/>
              </v-col>

              <v-col class="pl-4" cols="12" md="3">
                <SidePanel />
              </v-col>
            </v-row>
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
        posts: '',
        totalPages: 1,
        page: 1
      }
    },
    created() {
        api().get(`posts?page=1&per_page=10`)
        .then(res => {
          this.posts = res.data.posts;
          this.totalPages = res.data.totalPages;
        })
        .catch(err => console.log(err.response.data))
    },
    methods: {
      changePage: function(page) {
        api().get(`posts?page=${page}&per_page=10`)
        .then(res => {
          this.posts = res.data.posts;
          this.totalPages = res.data.totalPages;
        })
        .catch(err => console.log(err.response.data))
      }
    }
}
</script>

<style scoped>
</style>