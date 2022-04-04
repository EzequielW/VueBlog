<template>
    <div>    
        <v-card elevation="0" class="rounded-0 mb-5" color="#fff">
            <v-card-title class="headline">Related Blogs</v-card-title>

            <v-card-text>
                <p>
                    <a class="subtitle-1" href="https://www.devblogs.microsoft.com">Microsoft devblog</a>
                    <a class="subtitle-1" href="https://www.devblogs.microsoft.com">Microsoft devblog</a>
                    <a class="subtitle-1" href="https://www.devblogs.microsoft.com">Microsoft devblog</a>
                    <a class="subtitle-1" href="https://www.devblogs.microsoft.com">Microsoft devblog</a>
                </p>
            </v-card-text>
        </v-card>
        <PostItem v-bind:post="post"/>
    </div>
</template>

<script>
import PostItem from './PostItem.vue';
import archImg from '../assets/diagram-FCM.png';

export default {
    name: 'SidePanel',
    components: {
        PostItem
    },
    data: () => ({
        post: {
            _id: '0',
            title: 'Firebase architecture diagram in detail',
            imgPreview: archImg,
            date: '2022-04-03T00:03:54.683Z',
            author_id: {
                name: 'Lawrence'
            }
        }
    })
}
</script>

<style scoped>
    a {
        text-decoration: none;
        display: block;
    }
</style>