<template>
    <div class="wrapper-mainPage">
        <header class="header navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
              <router-link to="/" class="navbar-brand">
                  <h2 class="header__title">Жду</h2>
              </router-link>
              <nav class="header__nav nav">
                  <ul class="nav__list navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <router-link to="/personalAccount" class="nav-link active" aria-current="page">Личный Аккаунт</router-link>
                      </li>
                  </ul>
              </nav>
              <form action="#" role="search" class="header__form-search form-search d-flex">
                  <input class="form-search__input-search form-control me-2" type="search" placeholder="Поиск..." aria-label="Search">
                  <button class="form-search__button-search btn btn-outline-dark" type="button">Поиск</button>
              </form>
          </div>
        </header>
        <router-view/>
    </div>

    <Tape v-if="$route.path === '/'"/>
</template>
<script>
import Tape from '@/components/Tape.vue';
export default {
    name: 'Main page',
    components: {
        Tape
    }
}
</script>
<style>
@import "@/assets/style/views/MainLayout_view.scss";
</style>