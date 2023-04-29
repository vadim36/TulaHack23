<template>
    <div class="card-post">
        <h2 class="card-post__title">Название поста</h2>
        <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
             alt="posts-img" class="card-post__image">
        <p class="card-post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda
            aut consectetur, consequatur dicta dignissimos facilis illo, in labore libero, nostrum perspiciatis quidem
            quis sunt totam veniam voluptatum? Ab amet consequuntur cupiditate delectus distinctio doloremque esse
            facere, ipsam iure nobis numquam obcaecati perspiciatis possimus quia quos sequi similique voluptatibus
            voluptatum.</p>
        <div class="card-post__control-container">
            <button type="button" class="card-post__button-like btn btn-outline-danger"
                    @click.once="likePost"> {{likes}} Нравится
            </button>
            <button type="button" class="btn btn-outline-primary"
                @click="showComments">Комментарии</button>
            <div class="card-post__container-comments" id="comments">
                Комментарии
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            likes: 0,
        }
    },
    methods: {
        likePost() {
            const likeButton = document.querySelector('.card-post__button-like');
            likeButton.classList.remove('btn-outline-danger');
            likeButton.classList.add('btn-danger');

            this.likes +=1;
        },
        showComments() {
            const commentsContainer = document.querySelector('.card-post__container-comments');
            commentsContainer.classList.toggle('show');
        }
    }
}
</script>
<style>
@import "@/assets/style/components/NewPost_component.scss";
</style>