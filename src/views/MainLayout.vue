<template>
    <div class="wrapper-mainPage">
        <header class="header navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
              <!--TODO:Добавить лого-->
              <router-link to="/home" class="navbar-brand">
                  <h2 class="header__title">Жены героев</h2>
              </router-link>
              <nav class="header__nav nav">
                  <ul class="nav__list navbar-nav me-auto mb-2 mb-lg-0">
                      <!--TODO:ссылки-->
                      <li class="nav-item">
                          <router-link to="" class="nav-link active" aria-current="page">Контакты</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link to="" class="nav-link active" aria-current="page">Настройки</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link to="" class="nav-link active" aria-current="page">Личный Аккаунт</router-link>
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
</template>
<script>
export default {
    name: 'Main page'
}
</script>
<style>
@import "@/assets/style/views/MainLayout_view.scss";
</style>