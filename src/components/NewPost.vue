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
                    v-on:click="likePost"> {{ likes }} Нравится
            </button>
            <button type="button" class="card-post__button-comment btn btn-outline-primary"
                    v-on:click="showComments">Комментарии
            </button>
            <div class="card-post__container-comments container-comments" id="comments">
                <strong class="container-comments__title">Комментарии</strong>
                <ul class="container-comments__comments-list">
                    <li class="container-comments__comments-item comments-item"
                          v-for="comment in commentsArray"
                          :key="comment">
                        <img src="@/assets/img/avatar.png" alt="avatar"
                             class="comments-item__avatar">
                        <strong class="comments-item__title-name"> {{ name }} </strong>
                        <p class="comments-item__text-comment">{{ comment }}</p>
                    </li>
                </ul>
                <input v-on:change="addComment" class="container-comments__form-comment form-control"
                       type="text" placeholder="Напишите ваш комментарий...">
            </div>
            <button type="button" class="card-post__button-complaint btn btn-danger"
                v-on:click="showComplaint">Пожаловаться на пост</button>
            <form action="#" class="card-post__form-complaint form-complaint">
                <strong class="form-complaint__title">Выберите причину жалобы</strong>
                <label for="complaintReasons" class="form-complaint__container-reasons">
                    <input type="radio" name="complaintReasons">
                    Контент сексуального характера <br>
                    <input type="radio" name="complaintReasons">
                    Жестокие сцены <br>
                    <input type="radio" name="complaintReasons">
                    Оскорбления <br>
                    <input type="radio" name="complaintReasons">
                    Пропоганда
                </label>
                <input type="submit" class="form-complaint__button-submit btn btn-outline-danger">
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            likes: 0,
            commentsArray: []
        }
    },
    props: {
        name
    },
    methods: {
        likePost(event) {
            if (event.target.className.includes('btn-outline-danger')) {
                event.target.classList.remove('btn-outline-danger');
                event.target.classList.add('btn-danger');

                this.likes += 1;
            } else {
                event.target.classList.remove('btn-danger');
                event.target.classList.add('btn-outline-danger');

                this.likes -= 1;
            }
        },
        showComments(event) {
            const commentsContainer = event.target.parentElement.querySelector('.card-post__container-comments');
            commentsContainer.classList.toggle('show');
        },
        addComment(event) {
            this.commentsArray.push(event.target.value);
            event.target.value = '';
        },
        showComplaint(){
            const complaintForm = document.querySelector('.card-post__form-complaint');
            complaintForm.classList.toggle('show');
        }
    }
}
</script>
<style>
@import "@/assets/style/components/NewPost_component.scss";
</style>