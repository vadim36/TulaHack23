<template>
    <div class="card-register">
        <h1 class="card-register__title">Зарегистрироваться</h1>
        <form action="#" class="card-register__form-register form-register">
            <input type="text" name="nameForm" placeholder="Введите ваше имя..."
                   class="form-register__field-name form-control">
            <input type="email" inputmode="email" name="emailForm"
                   placeholder="Введите ваш email..."
                   class="form-register__field-email form-control">
            <input type="password" name="passwordForm"
                   placeholder="Введите ваш пароль..."
                   class="form-register__field-password form-control">
            <input type="password" name="passwordFormRepeat"
                   placeholder="Повторите пароль..."
                   class="form-register__field-password-repeat form-control">
            <input type="submit" class="form-register__submit-button btn btn-primary"
                   name="submitForm" @click.prevent="$event">
        </form>
    </div>
</template>
<script>

</script>
<style>
@import "@/assets/style/views/RegisterPage_view.scss";
</style>