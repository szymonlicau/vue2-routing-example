<template>
  <div class="posts-page">
    <div class="posts-page__content">
      <router-view />
    </div>

    <aside class="posts-page__aside">
      <h2> Aside with some cool info </h2>
    </aside>
  </div>
</template>

<style lang="scss">
.posts-page {
  display: grid;
  grid-template-columns: 1fr 30rem;
  grid-column-gap: 1rem;

  &__content {
  }

  &__aside {
  }
}
</style>
