<template>
    <div class="wrapper-makingPost">
        <header class="header">
            <router-link to="/personalAccount">
                <button type="button" class="button-reverse btn btn-secondary">Обратно</button>
            </router-link>
            <h1 class="title">Создание нового поста</h1>
        </header>
        <form action="#" name="makingNewPost" class="card-newPost">
            <label for="makingTitle" class="card-newPost__label-name">
                Введите название вашего поста:
                <input type="text" v-model="name" name="makingTitle" placeholder="Название для поста..."
                       class="card-newPost__field-name form-control">
            </label>
            <label for="takeFile" class="card-newPost__label-file">
                Приложите ваши фотографии/видеоролики
                <input type="file" name="takeFile" class="card-newPost__field-file"
                    v-on:change="getImages">
            </label>
            <label for="makingDescription" class="card-newPost__label-description">
                Напишите описание(опционально):
                <textarea v-model="description" cols="10" rows="8" name="makingDescription"
                          class="form-control card-newPost__field-description"></textarea>
            </label>
            <input type="submit" name="submitButton" class="card-newPost__submit-button btn btn-primary">
        </form>
    </div>
</template>
<script>

export default {
    data() {
        return {
            name: '',
            description: '',
            photo: null
        }
    },
    methods: {
        getImages(event){
            const file = event.target.files[0];
            const urlFile = URL.createObjectURL(file);

            this.photo = urlFile;
        }
    }
}
</script>
<style>
@import "@/assets/style/views/MakePostPage_view.scss";
</style>