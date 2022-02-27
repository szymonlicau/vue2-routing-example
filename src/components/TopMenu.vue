<template>
  <nav class="top-menu">
    <router-link
      class="top-menu-item"
      exact-active-class="top-menu-item--active"
      :to="{ name: 'Home' }"
    >
      Home
    </router-link>

    <router-link
      class="top-menu-item"
      active-class="top-menu-item--active"
      :to="{ name: 'Posts' }"
    >
      Posts
    </router-link>

    <router-link
      class="top-menu-item"
      active-class="top-menu-item--active"
      :to="{ name: 'About' }"
    >
      About
    </router-link>

    <router-link
      class="top-menu-item"
      active-class="top-menu-item--active"
      :to="{ name: 'Contact' }"
    >
      Contact
    </router-link>
  </nav>
</template>

<style lang="scss">
.top-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.1rem solid black;
  margin-bottom: 1rem;

  &-item {
    padding: 2rem 1rem;
    text-decoration: none;
    font-size: 1.8rem;
    color: green;

    &:hover,
    &--active {
      font-weight: bold;
    }

    & + & {
      margin-left: 1rem;
    }
  }
}
</style>
