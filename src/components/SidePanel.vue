<template>
    <div>
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