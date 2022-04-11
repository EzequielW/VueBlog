<template>
    <v-card class="rounded-sm py-5" elevation="0">
        <h1 class="single-post-title mb-0 pb-1 px-6">{{post.title}}</h1>
        <v-card-subtitle class="pa-0 pb-4 px-6">
            <a class="body-1" href="#">
                {{formatDate(post.date)}} | {{post.author_id ? post.author_id.name : 'Mika Salo'}}
            </a>
        </v-card-subtitle>

        <v-img :src="post.imgPreview" contain/>
        
        <v-card-text class="pa-0 pt-4 px-6">
            <div class="post-content text--primary" v-html="post.content"></div>
        </v-card-text>
    </v-card>
</template>

<script>
const moment = require('moment');

export default {
    name: 'PostSingle',
    props: ['post'],
    methods: {
        formatDate: function(date){
            return moment(date).format('MMM DD, YYYY');
        }
    }
}
</script>

<style scoped lang="scss">
    .single-post-title{
        margin-bottom: 4%;
    }

    .post-content ::v-deep(img){
        max-width: 100%;
        height: auto;
    }

    .post-content{
        overflow-wrap: break-word;
    }

    h1{
        overflow-wrap: break-word;
    }
</style>