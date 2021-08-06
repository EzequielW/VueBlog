<template>
    <v-card class="post-item mb-6">
        <div class="d-flex flex-sm-row flex-column">
            <v-col class="pr-sm-0 pb-0 pb-sm-3" cols="12" sm="5" md="4">
                <v-img :src="imgPath" max-height="250px"/>
            </v-col>
            <v-col class="px-0 pt-0 pb-3" cols="12" sm="7" md="8">
                <router-link :to="'/posts/' + post._id">
                    <v-card-title class="pb-1">{{post.title}}</v-card-title>
                </router-link>
                
                <v-card-subtitle class="pt-0">
                    <v-avatar class="mr-2" size="40">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar> 
                    <a class="body-1" href="#">
                        {{post.author_id.name}}
                    </a>
                </v-card-subtitle>

                <v-card-text class="post-text body-2 pb-0" v-show="$vuetify.breakpoint.smAndUp">{{post.intro}}</v-card-text>
            </v-col>
        </div>
    </v-card>
</template>

<script>
import api from '../services/Api'

export default {
    name: 'PostItem',
    props: ['post'],
    data: function() {
        return {imgPath: api().defaults.baseURL + 'images/' + this.$props.post.imgPreview}
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .post-item .post-text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
</style>