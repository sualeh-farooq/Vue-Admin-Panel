<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p>{{ $store.state.number }}</p>
    <Menu></Menu>
  </div>
</template>

<script>
// import store from '@/store';
import Menu from "@/components/Menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>



