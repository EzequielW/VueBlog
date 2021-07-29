<template>
    <v-row align="center" justify="center">
        <v-card>
            <v-form ref="form" class="ma-3 pa-6">   
                <v-text-field label="Title" v-model="title" :rules="titleRules" required></v-text-field>

                <ImageInput v-model="preview">
                    <div slot="activator">
                        <v-img size="150px" v-ripple v-if="!preview" class="grey lighten-3 mb-3">
                            <span>Add preview image</span>
                        </v-img>
                        <v-img size="150px" v-else :src="preview.imageURL" aspect-ratio="1.4" contain></v-img>
                    </div>
                </ImageInput>

                <v-textarea label="Introduction" v-model="intro" :rules="introRules" required></v-textarea>

                <SimpleEditor class="editor" v-model="content" :rules="contentRules" required/>

                <v-btn color="indigo lighten-1 white--text" class="post-submit mr-2" @click="postArticle">submit</v-btn>
            </v-form>
        </v-card>
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
            const response = await Api().post('/posts', {
                title: this.title,
                intro: this.intro,
                content: this.content,
                author_id: this.$store.state.userId
            },
            {
                headers: {
                    'auth-token': this.$store.state.token
                }
            })
            
            this.$router.push('/posts/' + response.data._id)
        }
    }
}
</script>

<style scoped>
    .editor {
        height: 400px;
    }

    .post-submit {
        margin-top: 2%;
    }
</style>