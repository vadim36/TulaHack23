<template>
  <div class="container-tape tape">
      <h1 class="tape__title">Лента</h1>
      <div class="tape__container-posts">
          <NewPost/>
          <NewPost/>
          <NewPost/>
          <NewPost/>
          <NewPost/>
      </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import NewPost from "@/components/NewPost.vue";

export default defineComponent({
    components: {NewPost}
})
</script>
<style>
@import "@/assets/style/views/TapePage_view.scss";
</style>