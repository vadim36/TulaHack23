<template>
<div class="wrapper-startPage">
    <h1 class="title">Жены Героев</h1>
    <button class="btn btn-lg btn-outline-dark button-pass" @click="$router.push({name: 'main page'})">Перейти на сайт</button>
</div>
</template>

<script>
export default {
  name: 'Start Menu'
}
</script>

<style>
@import "@/assets/style/views/StartPage_view.scss";
</style>