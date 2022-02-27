<template>
  <router-link
    class="post-item"
    :to="{ name: 'Post', params: { postId: post.id } }"
  >
    {{ post.title }}
  </router-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.post-item {
  border: 0.1rem solid black;
  padding: 2.4rem;
  border-radius: 0.4rem;
  display: block;
  text-decoration: none;
  color: black;

  & + & {
    margin-top: 1rem;
  }
}
</style>
