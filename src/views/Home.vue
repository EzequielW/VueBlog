<template>
  <div>
    
    <v-container fluid class="pt-0">
      <v-img class="white--text d-flex align-center" max-height="420" src="../assets/danial-ricaros-FCHlYvR5gJI-unsplash.jpg" 
        gradient="to top right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)" cover>
        <div class="ma-16 px-16">
            <p class="text-h3 pb-4 font-weight-bold">Welcome to my blog</p>
            <p class="text-subtitle-1">Enjoy your stay and post your articles</p>
        </div>
      </v-img>

        <v-row justify="center" class="pt-10">
          <v-col cols="12" md="10">
            <v-row>
              <v-col cols="12" md="8">
                <PostList v-bind:posts="posts"/>
                <v-pagination v-model="page" :length="totalPages" :total-visible="2" @input="changePage" circle/>
              </v-col>

              <v-col class="pl-4" cols="12" md="4">
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
  .v-container{
    background-color: transparent;
    padding-left: 15em;
    padding-right: 15em;
  }

  p{
    color: #fff;
  }

  a{
    color: inherit;
  }
</style>