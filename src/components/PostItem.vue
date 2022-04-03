<template>
    <v-card class="post-item mb-6 rounded-0" color="#fff" elevation="0">
        <v-img :src="post.imgPreview" :aspect-ratio="16/9" max-height="450px" contain/>

        <v-card-header class="py-6">
            <v-card-header-text>
                <v-card-subtitle>
                    <a class="body-2" href="#">
                        {{formatDate(post.date)}} | {{post.author_id.name}}
                    </a>
                </v-card-subtitle>
                <p class="text-h4 text--primary">
                    <router-link :to="'/posts/' + post._id">
                        <v-card-title>{{post.title}}</v-card-title>
                    </router-link>
                </p>
            </v-card-header-text>
        </v-card-header>
        
        <!-- <v-card-text class="post-text body-2 pb-0" v-show="$vuetify.breakpoint.smAndUp">{{post.intro}}</v-card-text> -->
    </v-card>
</template>

<script>
const moment = require('moment');

export default {
    name: 'PostItem',
    props: ['post'],
    methods: {
        formatDate: function(date){
            return moment(date).format('MMM DD, YYYY');
        }
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: inherit;
    }

    .post-item .post-text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
</style>