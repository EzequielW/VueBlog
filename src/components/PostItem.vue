<template>
    <v-card class="post-item">
        <v-row class="post-wrap" align="center">
            <v-col cols="5" class="post-image">
                <v-img src="https://via.placeholder.com/348x248" aspect-ratio="1.4" contain/>
            </v-col>

            <v-col cols="7">
                <router-link :to="'/posts/' + post._id">
                    <v-card-title class="post-title">{{post.title}}</v-card-title>
                </router-link>
                
                <v-card-subtitle class="post-user">
                    <v-avatar class="post-avatar">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar> 
                    <a href="#">{{post.author_id.name}}</a>
                </v-card-subtitle>

                <v-card-text class="post-text">{{post.intro}}</v-card-text>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: 'PostItem',
    props: ['post']
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .post-item {
        margin-bottom: 3%;
    }

    .post-item .post-wrap {
        margin: 0;
    }

    .post-item .post-wrap .post-image {
        padding-right: 0;
    }

    .post-item .post-wrap .post-title {
        padding-top: 0;
        padding-bottom: 3px;
    }

    .post-item .post-wrap .post-user {
        padding-top: 3px;
    }

    .post-item .post-wrap .post-user a {
        padding-left: 10px;
    }

    .post-item .post-wrap .post-text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        padding-bottom: 0;
    }
</style>