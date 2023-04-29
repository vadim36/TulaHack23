<template>
    <div class="card-login">
        <h1 class="card-login__title">Войти в учётную запись</h1>
        <form action="#" class="card-login__form-login form-login" name="loginForm">
            <input type="text" name="nameForm" placeholder="Введите ваше имя или email..."
                   class="form-login__field-name form-control" v-model="name">
            {{ nameError }}
            <input type="password" name="passwordForm" placeholder="Введите ваш пароль..."
                   class="form-login__field-password form-control" v-model="password">
            {{ passwordError }}
            <input type="submit" class="form-login__submit-button btn btn-primary" name="submitForm"
                   @click.prevent="checkForm">
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            password: '',
            nameError: null,
            passwordError: null
        }
    },
    methods: {
        checkForm() {
            const form = document.querySelector('.card-login__form-login');

            if (!this.name) {
                this.nameError = 'Поле обязательно к заполнению'
            } else {
                this.nameError = null;
            }

            if (!this.password) {
                this.passwordError = 'Поле обязательно к заполению'
            } else {
                this.passwordError = null;
            }

            if (this.nameError === null && this.passwordError === null) {
                form.submit();
            }
        }
    }
}
</script>
<style>
@import "@/assets/style/views/LoginPage_view.scss";
</style>