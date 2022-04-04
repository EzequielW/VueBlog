<template>
    <v-row align="center" justify="center">
        <v-col cols="9">
            <v-card>
                <v-form ref="form" class="ma-3 pa-6">
                    <h1 class="display-1 text-center mb-6">List preview</h1>
                    <v-card class="d-flex flex-no-wrap mb-8"> 
                        <v-col cols="4">
                            <ImageInput class="input-image" v-model="preview" v-on:input="preview=$event">
                                <template v-slot:activator>
                                    <v-img class="grey lighten-3 d-flex align-center" height="250px" max-width="400px" v-ripple v-if="!preview">
                                        <p class="text-center">Image preview</p>
                                    </v-img>
                                    <v-img height="250px" max-width="400px" v-else :src="preview.imageURL" contain></v-img>
                                </template>
                            </ImageInput>
                        </v-col>
                        <v-col cols="8 pa-0">
                            <v-card-title class="py-0">
                                <v-textarea label="Title" v-model="title" :rules="titleRules" rows="1" auto-grow required counter clearable></v-textarea>
                            </v-card-title>
                            <v-card-text class="py-0">
                                <v-textarea label="Introduction" v-model="intro" :rules="introRules" rows="4" required counter clearable></v-textarea>
                            </v-card-text>
                        </v-col>
                    </v-card>

                    <h1 class="display-1 text-center mb-6">Main content</h1>
                    <SimpleEditor class="editor" v-model="content" :rules="contentRules" v-on:input="content=$event" required/>

                    <v-btn color="indigo lighten-1 white--text" class="mr-2 mt-6" @click="postArticle">submit</v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import SimpleEditor from '../components/SimpleEditor'
import ImageInput from '../components/ImageInput'
import Api from '../services/Api'

export default {
    name: 'Write',
    components: {
        SimpleEditor,
        ImageInput
    },
    data() { 
        return {
            title: '',
            titleRules: [
                v => !!v || 'Title is required',
                v => v.length >= 35 || 'Title must be atleast 35 characters long',
                v => v.length < 100 || 'Title cant be longer than 100 characters'
            ],
            intro: '',
            introRules: [
                v => !!v || 'Introduction is required',
                v => v.length >= 120 || 'Introduction must be atleast 120 characters long',
                v => v.length < 340 || 'Introduction cant be longer than 340 characters'
            ],
            content: '',
            contentRules: [
                v => !!v || 'You must write something',
                v => v.length >= 1000 || 'Article must be atleast 1000 characters long'
            ],
            preview: null
        }
    },
    methods: {
        async postArticle() {
            const formData = new FormData();
            formData.append('title', this.title);
            formData.append('intro', this.intro);
            formData.append('content', this.content);
            formData.append('author_id', this.$store.state.userId);
            formData.append('file', this.preview.imageFile);
            console.log(this.$data);

            const response = await Api().post('/posts', formData,
            {
                headers: {
                    'auth-token': this.$store.state.token
                }
            })
            
            this.$router.push('/posts/' + response.data._id)
        },
    },
}
</script>

<style scoped>
    .editor {
        height: 400px;
    }

    .input-image{
        cursor: pointer;
    }
</style>