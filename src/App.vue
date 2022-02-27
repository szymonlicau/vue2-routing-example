<template>
  <div>
    <TopMenu />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu.vue';

export default {
  components: {
    TopMenu
  }
}
</script>

<style>
:root {
  --page-width: 102.4rem;
}

html {
  font-size: 62.5%;
  font-family: sans-serif;
}

body {
  font-size: 1.6rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

main {
  max-width: var(--page-width);
  padding: 1rem;
  margin: 0 auto;
}
</style>
