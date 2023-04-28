<template>
    <div class="card-login">
        <h1 class="card-login__title">Войти в учётную запись</h1>
        <form action="#" class="card-login__form-login form-login" name="loginForm">
            <input type="text" name="nameForm" placeholder="Введите ваше имя или email..."
                class="form-login__field-name form-control">
            <input type="password" name="passwordForm" placeholder="Введите ваш пароль..."
                class="form-login__field-password form-control">
            <input type="submit" class="form-login__submit-button btn btn-primary" name="submitForm"
                   @click.prevent="$event">
        </form>
    </div>
</template>
<script>
</script>
<style>
@import "@/assets/style/views/LoginPage_view.scss";
</style>